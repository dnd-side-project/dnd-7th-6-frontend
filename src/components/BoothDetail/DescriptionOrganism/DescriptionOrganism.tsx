import React from 'react';
import {useQueryClient} from 'react-query';

import {
  BoothName,
  Container,
  Distance,
  List,
  ListRow,
  TextElement,
  TitleSection,
} from './DescriptionOrganism.styles';

import OnlyLikeButton from 'src/components/utils/Button/OnlyLikeButton';
import NavigationIcon from 'src/icons/NavigationIcon';
import PinIcon from 'src/icons/PinIcon';
import useMutatePhotoBoothLike from 'src/querys/useMutatePhotoBoothLike';
import {PhotoBoothResponse} from 'src/types';

interface Props {
  booth?: PhotoBoothResponse;
  distance: number;
}

const DescriptionOrganism = ({booth, distance}: Props) => {
  const {mutate: likePhotoBooth} = useMutatePhotoBoothLike();
  const queryClient = useQueryClient();
  if (!booth) {
    return <></>;
  }
  const handleLike = () => {
    likePhotoBooth(booth.photoBooth.id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['photo-booth']);
        queryClient.invalidateQueries(['userLike']);
      },
    });
  };
  return (
    <Container>
      <TitleSection>
        <BoothName>{booth.photoBooth.name}</BoothName>
        <OnlyLikeButton onPress={handleLike} isActive={booth.like} />
      </TitleSection>
      <List>
        <ListRow>
          <PinIcon />
          <TextElement>{booth.photoBooth.jibunAddress}</TextElement>
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
