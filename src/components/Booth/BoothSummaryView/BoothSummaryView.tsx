import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

import {
  ChipWrapper,
  Container,
  DescriptionContainer,
  Distance,
  IconConatiner,
  ImageContainer,
  Rating,
  ReviewCount,
  ReviewCountContainer,
  SubText,
  TagContainer,
  Title,
  TitlenIconWrapper,
} from './BoothSummaryView.styles';

import RoundChip from 'src/components/Chip/RoundChip';
import ColorStarIcon14 from 'src/icons/ColorStarIcon14';
import {PhotoBoothContentData} from 'src/types';
import {getIconCube} from 'src/utils/getIconCube';

const data = ['#넓은 촬영공간', '#홀수출력 가능'];

const BoothSummaryView = (item: PhotoBoothContentData) => {
  const navigation = useNavigation();
  const boothOnPress = () => {
    navigation.navigate(
      'BoothDetail' as never,
      {id: item.photoBooth.id, distance: item.distance.toFixed(2)} as never,
    );
  };
  return (
    <Container onPress={boothOnPress}>
      <DescriptionContainer>
        <TitlenIconWrapper>
          <IconConatiner source={getIconCube(item.photoBooth.name)} />
          <View>
            <Title>{item.photoBooth.name}</Title>
            <SubText>
              <Distance>{item.distance.toFixed(1)}km</Distance>
              <Text> | </Text>
              <ColorStarIcon14 />
              <Rating>{item.photoBooth.starCount ? item.photoBooth.starCount : '-'}</Rating>
            </SubText>
          </View>
        </TitlenIconWrapper>

        <TagContainer>
          {data.map(tag => (
            <ChipWrapper key={tag}>
              <RoundChip mode="gray">{tag}</RoundChip>
            </ChipWrapper>
          ))}
        </TagContainer>
      </DescriptionContainer>
      <ImageContainer>
        <ReviewCountContainer>
          <ReviewCount>999+</ReviewCount>
        </ReviewCountContainer>
      </ImageContainer>
    </Container>
  );
};

export default BoothSummaryView;
