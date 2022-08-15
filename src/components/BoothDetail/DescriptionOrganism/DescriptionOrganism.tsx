import React from 'react';

import {
  BoothName,
  Container,
  Distance,
  List,
  ListRow,
  TextElement,
  TitleSection,
} from './DescriptionOrganism.styles';

import {PressableGeneralHeartIcon} from 'src/components/utils/Pressables/PressableIcons';
import NavigationIcon from 'src/icons/NavigationIcon';
import PinIcon from 'src/icons/PinIcon';
import useGetPhotoBoothMock from 'src/querys/useGetPhotoBooth';

interface Props {
  id: number;
  distance: number;
}

const DescriptionOrganism = ({id, distance}: Props) => {
  const data = useGetPhotoBoothMock(id);

  return (
    <Container>
      <TitleSection>
        <BoothName>{data.photoBooth.name}</BoothName>
        <PressableGeneralHeartIcon />
      </TitleSection>
      <List>
        <ListRow>
          <PinIcon />
          <TextElement>{data.photoBooth.jibunAddress}</TextElement>
        </ListRow>
        <ListRow>
          <NavigationIcon />
          <TextElement>
            현재 위치로 부터{' '}
            <Distance>
              {distance < 0 ? `${(distance * 1000).toFixed(0)}m` : `${distance}km`}
            </Distance>
          </TextElement>
        </ListRow>
      </List>
    </Container>
  );
};

export default DescriptionOrganism;
