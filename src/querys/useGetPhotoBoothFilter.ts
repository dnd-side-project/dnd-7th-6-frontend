import {useQuery} from 'react-query';

import getPhotoBoothFilter from 'src/apis/getPhotoBoothFilter';

const useGetPhotoBoothFilter = () => {
  return useQuery(['map-filter'], async () => await getPhotoBoothFilter(), {
    onError: error => console.log(error),
  });
};

export default useGetPhotoBoothFilter;
