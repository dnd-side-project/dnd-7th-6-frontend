import {useMutation, useQueryClient} from 'react-query';

import mutatePhotoBoothLike from 'src/apis/mutatePhotoBoothLike';

const useMutatePhotoBoothLike = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => mutatePhotoBoothLike(id), {
    onMutate: (targetId: number) => {
      const oldBooth = queryClient.getQueryData(['photo-booth', targetId]);
      queryClient.cancelQueries(['photo-booth', targetId]);
      queryClient.cancelQueries(['userLike']);
      queryClient.setQueryData(['photo-booth', targetId], (oldData: any) => {
        if (!oldData) {
          return;
        }
        return {
          ...oldData,
          like: !oldData.like,
        };
      });
      queryClient.setQueryData(['userLike'], (oldData: any) => {
        if (!oldData) {
          return;
        }
        return {
          ...oldData,
          photoBoothList: oldData.photoBoothList.map((booth: any) => ({
            ...booth,
            like: targetId === booth.id ? !booth.like : booth.like,
          })),
        };
      });
      return () => queryClient.setQueryData(['photo-booth'], oldBooth);
    },
    onError: (err, values, rollback) => {
      if (rollback) {
        rollback();
      }
      return Promise.reject(err);
    },
  });
};

export default useMutatePhotoBoothLike;
