import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import {type Image, openPicker} from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import ImageSelectPressable from '../../ImageSelectPressable/ImageSelectPressable';
import DismissKeyboardView from '../../utils/DismissKeyboardScrollView';
import TextField from '../../utils/TextField';
import ReviewNextPressable from '../ReviewNextPressable';
import {
  BoothDescribeTitle,
  BoothDescribeWrapper,
  CameranImageWrapper,
  ReviewSectionContainer,
  BoothSelectTitle,
  ReviewNextPressableWrapper,
  ImageWrapper,
  DeletePressable,
  ReviewTextInput,
  TextFieldWrapper,
} from './ReviewImageOrganism.styles';

import ActivityIndicator from 'src/components/utils/ActivityIndicator';
import requestcameraPermission from 'src/hooks/requestcameraPermission';
import DeleteIcon from 'src/icons/DeleteIcon';
import useMutateReview from 'src/querys/useMutateReview';
import usePatchReview from 'src/querys/usePatchReview';
import {
  addDeleteImage,
  addImage,
  addStoreDescription,
  changeDeleteImage,
  clearData,
} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';
import {PostReviewParamList} from 'src/screens/BoothScreen/PostReviewScreen';
import {FormImage} from 'src/types';

const ReviewImageOrganism = () => {
  const queryClient = useQueryClient();
  const route = useRoute<RouteProp<PostReviewParamList, 'BoothImageReviewScreen'>>();
  const dispatch = useDispatch();
  const post = useMutateReview();
  const {mutate: updateReview} = usePatchReview();
  const [uiLoading, setUiLoading] = useState(false);
  const {boothId} = route.params;
  const userInfo = useSelector((state: RootState) => state.userReducer.userInfo);
  const imageData: FormImage[] = useSelector((state: RootState) => state.reviewReducer.imageData);
  const descriptionText: string = useSelector(
    (state: RootState) => state.reviewReducer.storeDescription,
  );
  const isUpdateMode = useSelector((state: RootState) => state.reviewReducer.isUpdateMode);
  const reviewId = useSelector((state: RootState) => state.reviewReducer.reviewId);
  const inputPostReviewData = useSelector((state: RootState) => state.reviewReducer);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (disabled) {
      setTimeout(() => {
        setDisabled(false);
      }, 1000);
    }
  }, [disabled]);
  const onChangeFile = useCallback(async () => {
    try {
      await requestcameraPermission();
      const imageResponse = await openPicker({
        includeBase64: true,
        includeExif: true,
        mediaType: 'photo',
        multiple: true,
        maxFiles: 4,
      });
      onImageResponse(imageResponse);
    } catch (error) {
      setUiLoading(false);
    }
  }, []);

  const onImageResponse = useCallback(async (response: Image[]) => {
    if (response.length > 4) {
      Alert.alert('사진은 총 4장까지 선택한 순서대로 등록돼요!');
      //TO-DO UI변경
    }

    const takeResizeImages = (res: Image[]) => {
      return Promise.all(
        res.splice(0, 4).map(item =>
          ImageResizer.createResizedImage(
            item.path,
            600,
            600,
            item.mime.includes('jpeg') ? 'JPEG' : 'PNG',
            100,
            0,
          ).then(r => {
            return {uri: r.uri, name: r.name, type: item.mime};
          }),
        ),
      );
    };
    const images = await await takeResizeImages(response);

    dispatch(
      changeDeleteImage(imageData.filter((image: any) => !!image.id).map((image: any) => image.id)),
    );
    dispatch(addImage(images));
  }, []);

  const tagIdSet = useMemo(
    () => [
      ...[inputPostReviewData.specificTags].reduce(
        (list: string[], tag: {[key: string]: boolean}) => {
          return [...list, ...Object.keys(tag).filter(key => tag[key])];
        },
        [],
      ),
      ...[inputPostReviewData.resultTags].reduce(
        (list: string[], tag: {[key: string]: boolean}) => {
          return [...list, ...Object.keys(tag).filter(key => tag[key])];
        },
        [],
      ),
    ],
    [inputPostReviewData],
  );

  const imageDeleteOnPress = (index: number) => {
    if (imageData[index]) {
      dispatch(addDeleteImage(imageData[index].id));
    }
    const nextData = [...imageData].filter((item, i) => {
      return index !== i;
    });
    dispatch(addImage(nextData));
  };

  const navigation = useNavigation();
  const nextOnPress = () => {
    setDisabled(true);
    if (isUpdateMode) {
      updateReview(
        {
          reviewId: reviewId,
          reviewUpdateRequest: {
            title: '',
            content: inputPostReviewData.storeDescription,
            tagIdList: tagIdSet,
            starScore: inputPostReviewData.currentStar,
            newTagKeywordList: inputPostReviewData.tagData,
            reviewImageList: [...inputPostReviewData.imageData.filter((image: any) => !image.id)],
            deleteImageIdList: inputPostReviewData.deleteImageIdList,
          },
        },
        {
          onSuccess: () => {
            dispatch(clearData());
            queryClient.invalidateQueries(['userList']);
            queryClient.invalidateQueries(['photo-booth', boothId]);
            queryClient.invalidateQueries(['reviews']);
            navigation.navigate('BoothReviewComplete' as never, {} as never);
          },
        },
      );
    } else {
      post.mutate(
        {
          title: '',
          content: inputPostReviewData.storeDescription,
          tagIdList: tagIdSet,
          photoBoothId: boothId,
          userId: userInfo.id,
          starScore: inputPostReviewData.currentStar,
          newTagKeywordList: inputPostReviewData.tagData,
          postImageList: [...inputPostReviewData.imageData],
        },
        {
          onSuccess: () => {
            dispatch(clearData());
            queryClient.invalidateQueries(['userList']);
            queryClient.invalidateQueries(['photo-booth', boothId]);
            navigation.navigate('BoothReviewComplete' as never, {} as never);
          },
        },
      );
    }
  };

  useEffect(() => {
    setUiLoading(false);
  }, [imageData]);

  return (
    <DismissKeyboardView>
      <ReviewSectionContainer>
        <ActivityIndicator loading={uiLoading}>
          <CameranImageWrapper horizontal bounces={false} showsHorizontalScrollIndicator={false}>
            <ImageSelectPressable
              onPress={() => {
                setUiLoading(true);
                onChangeFile();
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
          <BoothDescribeWrapper>
            <BoothDescribeTitle>이 매장에 대해 설명해주세요</BoothDescribeTitle>
            <BoothSelectTitle>(선택)</BoothSelectTitle>
          </BoothDescribeWrapper>
          <TextFieldWrapper>
            <TextField
              isBorder={true}
              style={ReviewTextInput}
              multiline={true}
              placeholder="이 매장을 이용하면서 느꼈던 느낌을 알려주세요."
              textAlignVertical="top"
              value={descriptionText}
              maxLength={300}
              onChangeText={value => {
                dispatch(addStoreDescription(value));
              }}
            />
          </TextFieldWrapper>
        </ActivityIndicator>
        <ReviewNextPressableWrapper>
          <ReviewNextPressable onPress={nextOnPress} disable={disabled}>
            완료
          </ReviewNextPressable>
        </ReviewNextPressableWrapper>
      </ReviewSectionContainer>
    </DismissKeyboardView>
  );
};

export default ReviewImageOrganism;
