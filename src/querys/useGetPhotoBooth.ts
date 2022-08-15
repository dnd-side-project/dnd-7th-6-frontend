import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getPhotoBooth from 'src/apis/getPhotoBooth';
import BoothDetailData from 'src/BoothDetailData';
import {PhotoBoothResponse} from 'src/types';

const useGetPhotoBooth = (id: number) => {
  return useQuery<PhotoBoothResponse, AxiosError, PhotoBoothResponse, [string, number]>(
    ['photo-booth', id],
    ({queryKey}) => getPhotoBooth(queryKey[1]),
  );
};

const useGetPhotoBoothMock = (id: number) => {
  return BoothDetailData;
};

export default useGetPhotoBoothMock;
