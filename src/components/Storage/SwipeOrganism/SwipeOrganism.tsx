import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import BoothOrganism from '../BoothOrganism';
import PhotoOrganism from '../PhotoOrganism';

import LineSlideView from 'src/components/utils/LineSlideView';
import NotLoginContainer from 'src/components/utils/NotLoginContainer';
import useFocus from 'src/hooks/useFocus';
import useGetUserLike from 'src/querys/useGetUserLike';
import {RootState} from 'src/redux/store';

const SwipeOrganism = () => {
  const [index, setIndex] = useState(0);
  const {data, isLoading, refetch, isFetching} = useGetUserLike();
  const isLoggedIn = useSelector((state: RootState) => state.userReducer.isLoggedIn);
  const items = [
    {name: '사진', count: !data || !isLoggedIn ? 0 : data.imageList.length},
    {name: '부스', count: !data || !isLoggedIn ? 0 : data.photoBoothList.length},
  ];

  useFocus(() => {
    refetch();
  });

  return isLoggedIn ? (
    <LineSlideView items={items} index={index} setIndex={setIndex}>
      <PhotoOrganism photoList={data?.imageList} isLoading={isLoading || isFetching} />
      <BoothOrganism photoBoothList={data?.photoBoothList} isLoading={isLoading || isFetching} />
    </LineSlideView>
  ) : (
    <LineSlideView items={items} index={index} setIndex={setIndex} disable>
      <NotLoginContainer image={require('src/assets/images/login/before_login_storage.png')}>
        좋아하거나 가보고 싶은 부스를 찜해보세요.
      </NotLoginContainer>
    </LineSlideView>
  );
};

export default SwipeOrganism;
