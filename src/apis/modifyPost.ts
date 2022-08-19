import AxiosInstance from 'src/components/utils/Interceptor';
import {PostCreateRequest} from 'src/types/post';

const modifyPost = async (postId: number, postCreateRequest: PostCreateRequest) => {
  try {
    const formData = new FormData();
    const {postImageList, ...restData} = postCreateRequest;

    formData.append('postImageList', postImageList[0]);
    formData.append('postCreateRequest', {
      string: JSON.stringify(restData),
      type: 'application/json',
    });

    const result = await AxiosInstance.patch(`/api/v1/post/${postId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default modifyPost;
