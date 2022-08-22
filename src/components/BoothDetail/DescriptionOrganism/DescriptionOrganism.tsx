import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useQueryClient} from 'react-query';
import {useSelector} from 'react-redux';

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
import {RootState} from 'src/redux/store';
import {PhotoBoothResponse} from 'src/types';

interface Props {
  booth?: PhotoBoothResponse;
  distance: number | undefined;
}

const DescriptionOrganism = ({booth, distance}: Props) => {
  const {mutate: likePhotoBooth} = useMutatePhotoBoothLike();
  const queryClient = useQueryClient();
  const {isLoggedIn} = useSelector((state: RootState) => state.userReducer);
  const navigation = useNavigation();

  if (!booth) {
    return <></>;
  }
  const handleLike = () => {
    if (!isLoggedIn) {
      navigation.navigate('RouteLoginScreen' as never);
      return;
    }
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
          {distance !== undefined && (
            <>
              <NavigationIcon />
              <TextElement>
                현재 위치로 부터{' '}
                <Distance>
                  {distance < 0 ? `${(distance * 1000).toFixed(0)}m` : `${distance}km`}
                </Distance>
              </TextElement>
            </>
          )}
        </ListRow>
      </List>
    </Container>
  );
};

export default DescriptionOrganism;
