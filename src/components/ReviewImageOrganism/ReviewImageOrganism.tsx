import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import {type Image, openPicker} from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';

import ImageSelectPressable from '../ImageSelectPressable/ImageSelectPressable';
import ReviewNextPressable from '../ReviewNextPressable';
import DismissKeyboardView from '../utils/DismissKeyboardScrollView';
import TextField from '../utils/TextField';
import {
  BoothDescribeTitle,
  BoothDescribeWrapper,
  CameranImageWrapper,
  ReviewSectionContainer,
  BoothSelectTitle,
  SubtitleBooth,
  ReviewNextPressableWrapper,
  ImageWrapper,
  DeletePressable,
  BoothDescribeTextLengthText,
} from './ReviewImageOrganism.styles';

import DeleteIcon from 'src/icons/DeleteIcon';
import {addImage, addStoreDescription} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';
const ReviewImageOrganism = () => {
  const dispatch = useDispatch();
  const imageData: {uri: string}[] = useSelector(
    (state: RootState) => state.reviewReducer.imageData,
  );
  const descriptionText: string = useSelector(
    (state: RootState) => state.reviewReducer.storeDescription,
  );
  const onTakePhoto = useCallback(async () => {
    try {
      const imageResponse = await openPicker({
        includeBase64: true,
        includeExif: true,
        mediaType: 'photo',
        multiple: true,
        maxFiles: 4,
      });
      onImageResponse(imageResponse);
    } catch (error) {}
  }, []);

  const onImageResponse = useCallback(async (response: Image[]) => {
    const preview = response.map(item => {
      return {uri: `data:${item.mime};base64,${item.data}`};
    });
    if (preview.length > 4) {
      Alert.alert('4장 이상 안됩니다.');
      //TO-DO UI변경
    }
    dispatch(addImage(preview.splice(0, 4)));
  }, []);

  const imageDeleteOnPress = (index: number) => {
    const nextData = [...imageData].filter((item, i) => {
      return index !== i;
    });
    dispatch(addImage(nextData));
  };

  const navigation = useNavigation();
  const nextOnPress = () => navigation.navigate('BoothReviewComplete' as never, {} as never);

  return (
    <DismissKeyboardView>
      <ReviewSectionContainer>
        <CameranImageWrapper horizontal bounces={false} showsHorizontalScrollIndicator={false}>
          <ImageSelectPressable
            onPress={() => {
              onTakePhoto();
            }}
            imageSelectCount={imageData?.length}
          />
          {imageData &&
            imageData.map((src, index) => {
              return (
                <ImageWrapper key={index}>
                  <DeletePressable onPress={() => imageDeleteOnPress(index)}>
                    <DeleteIcon />
                  </DeletePressable>
                  <FastImage
                    source={src}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{height: '100%', borderRadius: 8}}
                  />
                </ImageWrapper>
              );
            })}
        </CameranImageWrapper>
        <SubtitleBooth>(선택)</SubtitleBooth>
        <BoothDescribeWrapper>
          <BoothDescribeTitle>이 매장에 대해 설명해주세요</BoothDescribeTitle>
          <BoothSelectTitle>(선택)</BoothSelectTitle>
        </BoothDescribeWrapper>
        <TextField
          isBorder={true}
          multiline={true}
          placeholder="이 부스를 이용하면서 느꼈던 느낌을 알려주세요."
          textAlignVertical="top"
          value={descriptionText}
          maxLength={300}
          onChangeText={value => {
            dispatch(addStoreDescription(value));
          }}
        />
        <BoothDescribeTextLengthText>{descriptionText.length}/300</BoothDescribeTextLengthText>
        <ReviewNextPressableWrapper>
          <ReviewNextPressable onPress={nextOnPress}>완료</ReviewNextPressable>
        </ReviewNextPressableWrapper>
      </ReviewSectionContainer>
    </DismissKeyboardView>
  );
};

export default ReviewImageOrganism;
