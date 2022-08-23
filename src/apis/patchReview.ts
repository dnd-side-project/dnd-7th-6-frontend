import AxiosInstance from 'src/components/utils/Interceptor';
import {ReviewUpdateRequest} from 'src/types/review';

const patchReview = async (reviewId: number, reviewUpdateRequest: ReviewUpdateRequest) => {
  try {
    const formData = new FormData();
    const {reviewImageList, ...restData} = reviewUpdateRequest;

    reviewImageList.forEach(reviewImage => {
      formData.append('reviewImageList', reviewImage);
    });

    formData.append('reviewUpdateRequest', {
      string: JSON.stringify(restData),
      type: 'application/json',
    });

    const result = await AxiosInstance.patch(`/api/v1/review/${reviewId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default patchReview;
