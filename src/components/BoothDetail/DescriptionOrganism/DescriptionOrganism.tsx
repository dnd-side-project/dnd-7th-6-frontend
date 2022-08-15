import React from 'react';

import {
  BoothName,
  Container,
  List,
  ListRow,
  TextElement,
  TitleSection,
} from './DescriptionOrganism.styles';

import {PressableLikeIcon} from 'src/components/utils/Pressables/PressableIcons';
import LocationIcon from 'src/icons/LocationIcon';
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
        <PressableLikeIcon />
      </TitleSection>
      <List>
        <ListRow>
          <LocationIcon />
          <TextElement>{data.photoBooth.jibunAddress}</TextElement>
        </ListRow>
        <ListRow>
          <LocationIcon />
          <TextElement>
            현재 위치로 부터 {distance < 0 ? `${(distance * 1000).toFixed(0)}m` : `${distance}km`}
          </TextElement>
        </ListRow>
      </List>
    </Container>
  );
};

export default DescriptionOrganism;
