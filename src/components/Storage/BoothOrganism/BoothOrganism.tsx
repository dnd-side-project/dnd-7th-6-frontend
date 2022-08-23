import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useQueryClient} from 'react-query';

import StorageBoothCard from '../StorageBoothCard';
import {Container, FlatListWrapper} from './BoothOrganism.styles';

import useMutatePhotoBoothLike from 'src/querys/useMutatePhotoBoothLike';
import {heightPercentage} from 'src/styles/ScreenResponse';
import {UserLikeBooth} from 'src/types';

interface Props {
  photoBoothList?: UserLikeBooth[];
  isLoading: boolean;
}

const BoothOrganism = ({photoBoothList, isLoading}: Props) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const {mutate: likePhotoBooth} = useMutatePhotoBoothLike();
  const handleCard = (id: number) => () => {
    navigation.navigate(
      'BoothScreen' as never,
      {
        screen: 'BoothDetail' as never,
        params: {id: id} as never,
        initial: false,
      } as never,
    );
  };
  const handleLike = (id: number) => () => {
    likePhotoBooth(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['photo-booth']);
        queryClient.invalidateQueries(['userLike']);
      },
    });
  };

  return (
    <Container>
      <FlatListWrapper>
        {isLoading ? (
          <ActivityIndicator size="large" style={{marginTop: heightPercentage(100)}} />
        ) : (
          <FlatList
            data={photoBoothList}
            numColumns={2}
            renderItem={({index, item}) => (
              <StorageBoothCard
                key={index}
                name={item.name}
                starScore={item.starScore}
                reviewCount={item.reviewCount}
                imgUrl={item.imageUrl}
                isLike={item.like}
                onPress={handleCard(item.id)}
                onLike={handleLike(item.id)}
              />
            )}
          />
        )}
      </FlatListWrapper>
    </Container>
  );
};

export default BoothOrganism;
