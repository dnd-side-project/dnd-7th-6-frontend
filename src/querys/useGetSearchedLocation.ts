import {useQuery} from 'react-query';

import getSearchedLocation from 'src/apis/getSearchedLocation';
import {SearchLocation} from 'src/types';

const useGetSearchedLocation = (searchingWord: string) => {
  return useQuery<SearchLocation>(
    ['search'],
    async () => await getSearchedLocation(searchingWord),
    {
      enabled: false,
      onError: error => console.log(error),
    },
  );
};

export default useGetSearchedLocation;
