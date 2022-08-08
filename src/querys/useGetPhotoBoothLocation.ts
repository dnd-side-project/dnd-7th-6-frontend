import {type Coord} from 'react-native-nmap';
import {useQuery} from 'react-query';

import getPhotoBoothLocation from 'src/apis/getPhotoBoothLocation';

const useGetPhotoBoothLocation = (coord: Coord) => {
  return useQuery(
    ['photo-booth'],
    async () => await getPhotoBoothLocation({...coord, distance: 3}),
    {
      onError: error => console.log(error),
      enabled: false,
      staleTime: Infinity,
    },
  );
};

export default useGetPhotoBoothLocation;
