import axios from 'axios';

import {Tag} from 'src/types';
import getApiServer from 'src/utils/getApiServer';

const getTagForm = async (tagType: number): Promise<Tag[][]> => {
  const tagTypes = [['BRAND'], ['HEAD_COUNT', 'RELATION'], ['CONCEPT', 'SITUATION'], ['FRAME']];
  const urls = tagTypes[tagType].map(type => `${getApiServer}/api/v1/tag/form?tagType=${type}`);
  const promises = urls.map(url => axios.get(url));
  const response = await Promise.all(promises);

  return response.map(({data}) => data);
};

export default getTagForm;
