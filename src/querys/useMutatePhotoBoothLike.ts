import {useMutation} from 'react-query';

import mutatePhotoBoothLike from 'src/apis/mutatePhotoBoothLike';

const useMutatePhotoBoothLike = () => {
  return useMutation((id: number) => mutatePhotoBoothLike(id));
};

export default useMutatePhotoBoothLike;
