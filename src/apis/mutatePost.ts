import AxiosInstance from 'src/components/utils/Interceptor';
import {PostCreateRequest} from 'src/types/post';
import getApiServer from 'src/utils/getApiServer';

const mutatePost = async (postCreateRequest: PostCreateRequest) => {
  try {
    const {postImageList, ...restData} = postCreateRequest;
    const formData = new FormData();
    formData.append('postImageList', postImageList);
    formData.append('postCreateRequest', JSON.stringify(restData));
    const result = await AxiosInstance.post(`${getApiServer}/post`, formData);

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default mutatePost;
