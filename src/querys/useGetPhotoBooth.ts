import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getPhotoBooth from 'src/apis/getPhotoBooth';
import {PhotoBoothResponse} from 'src/types';

const useGetPhotoBooth = (id?: number, option?: any) => {
  return useQuery<PhotoBoothResponse, AxiosError, PhotoBoothResponse, [string, number | undefined]>(
    ['photo-booth', id],
    ({queryKey}) => getPhotoBooth(queryKey[1] || -1),
    {enabled: !!id, ...option},
  );
};

export default useGetPhotoBooth;
