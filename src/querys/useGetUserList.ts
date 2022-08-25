import {AxiosError} from 'axios';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';

import getUserList from 'src/apis/getUserList';
import {RootState} from 'src/redux/store';
import {UserList} from 'src/types';

const useGetUserList = () => {
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const userInfoValid = Object.keys(userInfo).length !== 0;
  return useQuery<UserList, AxiosError, UserList, [string]>(['userList'], getUserList, {
    enabled: userInfoValid,
  });
};

export default useGetUserList;
