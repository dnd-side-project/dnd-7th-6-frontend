import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getUserLikeBooth from 'src/apis/getUserLikeBooth';
import {UserLikeBooth} from 'src/types';

const useGetUserLikeBooth = () => {
  return useQuery<UserLikeBooth[], AxiosError, UserLikeBooth[], [string]>(
    ['userLikeBooth'],
    getUserLikeBooth,
  );
};

export default useGetUserLikeBooth;
