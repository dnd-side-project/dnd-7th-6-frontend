import {useMutation, useQueryClient} from 'react-query';

import mutateReviewImageLike from 'src/apis/mutateReviewImageLike';
import {ReviewImage} from 'src/types';

interface Parameter {
  onError?: (error: any) => void;
}

const useMutateReviewImageLike = ({onError}: Parameter) => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => mutateReviewImageLike(id), {
    onMutate: (targetId: number) => {
      const oldReviewImages = queryClient.getQueryData(['review-images']);
      queryClient.cancelQueries(['review-images']);
      queryClient.cancelQueries(['userLike']);
      queryClient.setQueryData(['review-images'], (oldData: any) => {
        if (!oldData) {
          return;
        }
        return {
          ...oldData,
          pages: oldData.pages.map((page: any) => ({
            ...page,
            content: page.content.map((reviewImage: ReviewImage) =>
              reviewImage.id === targetId
                ? {...reviewImage, like: !reviewImage.like}
                : {...reviewImage},
            ),
          })),
        };
      });
      queryClient.setQueryData(['userLike'], (oldData: any) => {
        if (!oldData) {
          return;
        }
        return {
          ...oldData,
          imageList: oldData.imageList.map((reviewImage: ReviewImage) =>
            reviewImage.id === targetId
              ? {...reviewImage, like: !reviewImage.like}
              : {...reviewImage},
          ),
        };
      });
      return () => queryClient.setQueryData(['review-images'], oldReviewImages);
    },
    onError: (err, values, rollback) => {
      if (rollback) {
        rollback();
      }
      if (onError) {
        onError(err);
      }
      return Promise.reject(err);
    },
  });
};

export default useMutateReviewImageLike;
