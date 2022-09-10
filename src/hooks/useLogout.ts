import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch} from 'react-redux';

import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';

const useLogout = () => {
  const dispatch = useDispatch();

  const signOut = async () => {
    await EncryptedStorage.removeItem('refreshToken');
    dispatch(setAccessToken(''));
    dispatch(changeUserInfo({}));
    dispatch(loginAction(false));
  };

  return signOut;
};

export default useLogout;
