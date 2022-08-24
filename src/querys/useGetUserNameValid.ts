import {useQuery} from 'react-query';

import getUserNameValid from 'src/apis/getUserNameValid';

const useGetUserNameValid = (name: string) => {
  return useQuery(['userName', name], ({queryKey}) => getUserNameValid(queryKey[1]), {
    enabled: false,
    staleTime: Infinity,
  });
};

export default useGetUserNameValid;
