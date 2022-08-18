import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import PhotoOrganism from '../PhotoOrganism';

import LineSlideView from 'src/components/utils/LineSlideView';
import NotLoginContainer from 'src/components/utils/NotLoginContainer';
import useGetUserLike from 'src/querys/useGetUserLike';
import {RootState} from 'src/redux/store';

const SwipeOrganism = () => {
  const [index, setIndex] = useState(0);
  const {data} = useGetUserLike();
  const isLoggedIn = useSelector((state: RootState) => state.userReducer.isLoggedIn);
  const items = [
    {name: '사진', count: !data ? 0 : data.imageList.length},
    {name: '부스', count: !data ? 0 : data.photoBoothList.length},
  ];
  return isLoggedIn ? (
    <LineSlideView items={items} index={index} setIndex={setIndex}>
      {!!data && <PhotoOrganism photoList={data.imageList} />}
      <View />
    </LineSlideView>
  ) : (
    <LineSlideView items={items} index={index} setIndex={setIndex}>
      <NotLoginContainer>좋아하거나 가보고 싶은 부스를 찜해보세요.</NotLoginContainer>
    </LineSlideView>
  );
};

export default SwipeOrganism;
