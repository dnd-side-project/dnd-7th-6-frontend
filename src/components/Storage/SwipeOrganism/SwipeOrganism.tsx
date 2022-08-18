import React, {useState} from 'react';
import {View} from 'react-native';

import PhotoOrganism from '../PhotoOrganism';

import LineSlideView from 'src/components/utils/LineSlideView';
import useGetUserLike from 'src/querys/useGetUserLike';

const SwipeOrganism = () => {
  const [index, setIndex] = useState(0);
  const {data} = useGetUserLike();
  const items = [
    {name: '사진', count: !data ? 0 : data.imageList.length},
    {name: '부스', count: !data ? 0 : data.photoBoothList.length},
  ];

  return (
    <LineSlideView items={items} index={index} setIndex={setIndex}>
      {!!data && <PhotoOrganism photoList={data.imageList} />}
      <View />
    </LineSlideView>
  );
};

export default SwipeOrganism;
