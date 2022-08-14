import React, {useState} from 'react';
import {View} from 'react-native';

import PhotoOrganism from '../PhotoOrganism';

import LineSlideView from 'src/components/utils/LineSlideView';

const SwipeOrganism = () => {
  const [index, setIndex] = useState(0);
  const items = [
    {name: '사진', count: 40},
    {name: '부스', count: 26},
  ];

  return (
    <LineSlideView items={items} index={index} setIndex={setIndex}>
      <PhotoOrganism />
      <View />
    </LineSlideView>
  );
};

export default SwipeOrganism;
