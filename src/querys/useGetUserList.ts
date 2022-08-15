import {useQuery} from 'react-query';

import getUserList from 'src/apis/getUserList';

const useGetUserList = () => {
  return useQuery(['userList'], getUserList);
};

export default useGetUserList;
