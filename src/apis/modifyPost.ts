import AxiosInstance from 'src/components/utils/Interceptor';
import {PostUpdateRequest} from 'src/types/post';

const modifyPost = async (postId: number, postUpdateRequest: PostUpdateRequest) => {
  try {
    const formData = new FormData();
    const {postImageList, ...restData} = postUpdateRequest;
    console.log(restData);
    formData.append('postImageList', postImageList[0]);
    formData.append('postUpdateRequest', {
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
