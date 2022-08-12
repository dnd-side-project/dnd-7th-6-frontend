import React, {useState} from 'react';

import LineSlideView from 'src/components/utils/LineSlideView';

const SwipeOrganism = () => {
  const [index, setIndex] = useState(0);
  const items = [
    {name: '사진', count: 40},
    {name: '부스', count: 26},
  ];
  const handlePressNavigator = (i: number) => () => {
    setIndex(i);
  };

  return <LineSlideView items={items} index={index} onPressNavigator={handlePressNavigator} />;
};

export default SwipeOrganism;
