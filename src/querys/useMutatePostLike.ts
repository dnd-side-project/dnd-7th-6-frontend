import {useMutation} from 'react-query';

import mutatePostLike from 'src/apis/mutatePostLike';

const useMutatePostLike = () => {
  return useMutation((id: number) => mutatePostLike(id));
};

export default useMutatePostLike;
