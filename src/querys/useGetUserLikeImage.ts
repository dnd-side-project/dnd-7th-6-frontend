import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getUserLikeImage from 'src/apis/getUserLikeImage';
import {UserLikeImage} from 'src/types';

const useGetUserLikeImage = () => {
  return useQuery<UserLikeImage[], AxiosError, UserLikeImage[], [string]>(
    ['userLikeImage'],
    getUserLikeImage,
  );
};

export default useGetUserLikeImage;
