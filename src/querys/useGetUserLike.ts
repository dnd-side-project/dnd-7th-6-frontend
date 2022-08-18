import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getUserLike from 'src/apis/getUserLike';
import {UserLike} from 'src/types';

const useGetUserLike = () => {
  return useQuery<UserLike, AxiosError, UserLike, [string]>(['userLike'], getUserLike);
};

export default useGetUserLike;
