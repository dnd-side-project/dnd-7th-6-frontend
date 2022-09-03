import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {logout} from '@react-native-seoul/kakao-login';
import EncryptedStorage from 'react-native-encrypted-storage/';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';
import {RootState} from 'src/redux/store';

const useLogout = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {userInfo} = useSelector((state: RootState) => state.userReducer);

  const signOut = async () => {
    const provider = userInfo?.provider;
    if (provider === 'GOOGLE') {
      await GoogleSignin.signOut();
    } else if (provider === 'KAKAO') {
      await logout();
    } else if (provider === 'APPLE') {
    }
    await EncryptedStorage.removeItem('refreshToken');
    dispatch(setAccessToken(''));
    dispatch(changeUserInfo({}));
    dispatch(loginAction(false));
    queryClient.invalidateQueries();
  };

  return signOut;
};

export default useLogout;
