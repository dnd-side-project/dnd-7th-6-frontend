import axios from 'axios';
import React, {PropsWithChildren, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch, useSelector} from 'react-redux';

import getAccessToken from 'src/apis/getAccessToken';
import {loginAction, setAccessToken} from 'src/redux/actions/UserAction';
import {RootState} from 'src/redux/store';
import getApiServer from 'src/utils/getApiServer';

const AxiosInstance = axios.create({
  baseURL: getApiServer,
});

const Interceptor = ({children}: PropsWithChildren<{}>) => {
  const dispatch = useDispatch();
  const {accessToken} = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    AxiosInstance.interceptors.request.use(
      config => {
        if (!config.headers) {
          return config;
        }
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
    AxiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        const {
          config,
          response: {status},
        } = error;
        if (status === 403) {
          const originalHeader = config;
          const refreshToken = await EncryptedStorage.getItem('refreshToken');
          if (!refreshToken) {
            return;
          }
          const newAccessToken = await getAccessToken(refreshToken);
          originalHeader.headers.Authorization = `Bearer ${newAccessToken}`;
          dispatch(setAccessToken(newAccessToken));
          dispatch(loginAction(true));
          return axios(originalHeader);
        }
        return Promise.reject(error);
      },
    );
  }, []);

  return <>{children}</>;
};

export default AxiosInstance;
export {Interceptor};
