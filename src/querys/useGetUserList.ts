import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getUserList from 'src/apis/getUserList';
import {UserList} from 'src/types';

const useGetUserList = () => {
  return useQuery<UserList, AxiosError, UserList, [string]>(['userList'], getUserList);
};

export default useGetUserList;
