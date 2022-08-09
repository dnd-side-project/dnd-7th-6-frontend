import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getTagForm from 'src/apis/getTagForm';
import {Tag} from 'src/types';

const useGetTagForm = (tagType: number) => {
  return useQuery<Promise<Tag[][]>, AxiosError, Promise<Tag[][]>, [string, number]>(
    ['tag', tagType],
    ({queryKey}) => getTagForm(queryKey[1]),
  );
};

export default useGetTagForm;
