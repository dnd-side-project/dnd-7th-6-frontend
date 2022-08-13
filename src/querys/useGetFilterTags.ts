import {useQuery} from 'react-query';

import getFilterTags from 'src/apis/getFilterTags';

const useGetFilterTags = () => {
  return useQuery(['filterTags'], getFilterTags);
};

export default useGetFilterTags;
