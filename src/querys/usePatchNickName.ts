import {Alert} from 'react-native';
import {useMutation} from 'react-query';

import patchNickName from 'src/apis/patchNickName';

const usePatchNickName = () => {
  return useMutation(async (nickName: string) => await patchNickName(nickName), {
    onError: () => Alert.alert('닉네임을 수정하는데 문제가 발생하였습니다.'),
  });
};

export default usePatchNickName;
