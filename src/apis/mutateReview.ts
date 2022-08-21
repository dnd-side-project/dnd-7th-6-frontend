import AxiosInstance from 'src/components/utils/Interceptor';
import {ReviewCreateRequest} from 'src/types/post';

const mutateReview = async (reviewCreateRequest: ReviewCreateRequest) => {
  try {
    const formData = new FormData();
    const {postImageList, ...restData} = reviewCreateRequest;

    for (let i = 0; i < postImageList.length; i++) {
      formData.append('reviewImageList', postImageList[i]);
    }
    formData.append('reviewCreateRequest', {
      string: JSON.stringify(restData),
      type: 'application/json',
    });

    const result = await AxiosInstance.post('/api/v1/review', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default mutateReview;
