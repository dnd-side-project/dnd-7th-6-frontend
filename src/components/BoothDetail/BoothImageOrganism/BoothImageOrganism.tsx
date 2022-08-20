import React, {useState} from 'react';

import BoothImageList from '../BoothImageList';

import {ScrollUpWrapper} from 'src/components/ReviewImageDetail/ReviewListOrganism/ReviewListOrganism.styles';
import ScrollUpButton from 'src/components/utils/Button/ScrollUpButton';

interface Props {
  boothId: number;
}

const BoothImageOrganism = ({boothId}: Props) => {
  const [scrollTrigger, setScrollTrigger] = useState(false);

  return (
    <>
      <BoothImageList boothId={boothId} scrollTrigger={scrollTrigger} />
      <ScrollUpWrapper>
        <ScrollUpButton onPress={() => setScrollTrigger(!scrollTrigger)} />
      </ScrollUpWrapper>
    </>
  );
};

export default BoothImageOrganism;
