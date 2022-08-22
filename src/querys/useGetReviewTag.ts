import {useQuery} from 'react-query';

import getReviewTag from 'src/apis/getReviewTag';

const useGetReviewTag = () => {
  return useQuery(['review-form'], getReviewTag, {staleTime: Infinity});
};

export default useGetReviewTag;
