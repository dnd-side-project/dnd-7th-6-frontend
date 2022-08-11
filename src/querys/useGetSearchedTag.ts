import {useQuery} from 'react-query';

import getSearchedTag from 'src/apis/getSearchedTag';

const useGetSearchedTag = (searchingWord: string) => {
  return useQuery(['search'], async () => await getSearchedTag(searchingWord), {
    enabled: false,
    onError: error => console.log(error),
  });
};

export default useGetSearchedTag;
