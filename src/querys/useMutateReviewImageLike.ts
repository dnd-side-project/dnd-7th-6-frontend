import {useMutation, useQueryClient} from 'react-query';

import mutateReviewImageLike from 'src/apis/mutateReviewImageLike';
import {ReviewImage} from 'src/types';

const useMutateReviewImageLike = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => mutateReviewImageLike(id), {
    onMutate: (targetId: number) => {
      const oldReviewImages = queryClient.getQueryData(['review-images']);
      queryClient.cancelQueries(['review-images']);
      queryClient.setQueryData(['review-images'], (oldData: any) => ({
        ...oldData,
        pages: oldData.pages.map((page: any) => ({
          ...page,
          content: page.content.map((reviewImage: ReviewImage) =>
            reviewImage.id === targetId
              ? {...reviewImage, like: !reviewImage.like}
              : {...reviewImage},
          ),
        })),
      }));
      return () => queryClient.setQueryData(['review-images'], oldReviewImages);
    },
    onError: (err, values, rollback) => {
      if (rollback) {
        rollback();
      }
      return Promise.reject(err);
    },
  });
};

export default useMutateReviewImageLike;
