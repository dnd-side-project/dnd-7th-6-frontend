import {type Coord} from 'react-native-nmap';
import {useQuery} from 'react-query';

import getPhotoBoothLocation from 'src/apis/getPhotoBoothLocation';

const useGetPhotoBoothLocation = (coord: Coord) => {
  return useQuery(['photo-booth'], () => getPhotoBoothLocation({...coord, distance: 3}), {
    onError: error => console.log(error),
    onSuccess(data) {
      console.log(data?.data);
    },
  });
};

export default useGetPhotoBoothLocation;
