import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  ChipWrapper,
  Container,
  DescriptionContainer,
  Distance,
  ExeptImage,
  IconConatiner,
  ImageContainer,
  Rating,
  ReviewCount,
  ReviewCountContainer,
  ReviewImageCount,
  styles,
  SubText,
  TagContainer,
  Title,
  TitlenIconWrapper,
} from './BoothSummaryView.styles';

import RoundChip from 'src/components/Chip/RoundChip';
import ColorStarIcon14 from 'src/icons/ColorStarIcon14';
import {PhotoBoothContentData} from 'src/types';
import {getIconCube} from 'src/utils/getIconCube';

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
              <ReviewCount>{item.photoBooth.reviewCount}</ReviewCount>
            </SubText>
          </View>
        </TitlenIconWrapper>

        {/*이 부분 명세가 제대로 안되어 있어서 임의로 비슷한 명세 찾아서 입력 해놨습니다.*/}
        {item.tagSet && (
          <TagContainer>
            {item.tagSet.map(tag => (
              <ChipWrapper key={tag.id}>
                <RoundChip mode="gray">{tag.title}</RoundChip>
              </ChipWrapper>
            ))}
          </TagContainer>
        )}
      </DescriptionContainer>
      <ImageContainer>
        {item.photoBooth.imageUrl ? (
          <FastImage source={{uri: item.photoBooth.imageUrl}} style={styles.image} />
        ) : (
          <ExeptImage
            source={require('src/assets/images/Booth/Except_Image.png')}
            resizeMode="contain"
          />
        )}
        {item.photoBooth.reviewImageCount > 0 && (
          <ReviewCountContainer>
            <ReviewImageCount>{item.photoBooth.reviewImageCount}</ReviewImageCount>
          </ReviewCountContainer>
        )}
      </ImageContainer>
    </Container>
  );
};

export default BoothSummaryView;
