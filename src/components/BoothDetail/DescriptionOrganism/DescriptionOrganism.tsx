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
import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';
import useMutatePhotoBoothLike from 'src/querys/useMutatePhotoBoothLike';

interface Props {
  id: number;
  distance: number;
}

const DescriptionOrganism = ({id, distance}: Props) => {
  const {data} = useGetPhotoBooth(id);
  const {mutate: likePhotoBooth} = useMutatePhotoBoothLike();
  const queryClient = useQueryClient();
  if (!data) {
    return <></>;
  }
  const handleLike = () => {
    likePhotoBooth(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['photo-booth']);
        queryClient.invalidateQueries(['userLike']);
      },
    });
  };
  return (
    <Container>
      <TitleSection>
        <BoothName>{data.photoBooth.name}</BoothName>
        <OnlyLikeButton onPress={handleLike} isActive={data.like} />
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
