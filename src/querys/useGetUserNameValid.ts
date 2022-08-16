import {useQuery} from 'react-query';

import getUserNameValid from 'src/apis/getUserNameValid';

const useGetUserNameValid = (name: string) => {
  return useQuery(['userName'], () => getUserNameValid(name), {
    enabled: false,
    staleTime: Infinity,
  });
};

export default useGetUserNameValid;
