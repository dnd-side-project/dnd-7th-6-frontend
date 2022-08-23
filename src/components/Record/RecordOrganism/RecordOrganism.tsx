import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import AddPostButton from '../AddPostButton';
import NickNameView from '../NickNameView';
import RecordHeader from '../RecordHeader';
import {
  CardWrapper,
  PostFlatList,
  ReviewFlatList,
  SlideViewContainer,
  style,
} from './RecordOrganism.styles';

import LineSlideView from 'src/components/utils/LineSlideView';
import NotLoginContainer from 'src/components/utils/NotLoginContainer';
import ReviewSummary from 'src/components/utils/ReviewSummary';
import useDeleteReview from 'src/querys/useDeleteReview';
import useGetUserList from 'src/querys/useGetUserList';
import {startUpdate} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';
import {Review} from 'src/types';

const RecordOrganism = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const isLoggedIn = useSelector((state: RootState) => state.userReducer.isLoggedIn);
  const [focus, setFocus] = useState(0);
  const {data, isFetching, isLoading} = useGetUserList();
  const {mutate: deleteReview} = useDeleteReview();
  const slideViewItems = [
    {name: '사진', count: !data || !isLoggedIn ? 0 : data.postList.length},
    {name: '부스 리뷰', count: !data || !isLoggedIn ? 0 : data.reviewList.length},
  ];

  const reviewMenus = (review: Review) => [
    {
      name: '수정',
      onPressItem: () => {
        dispatch(startUpdate(review));
        navigation.navigate(
          'BoothScreen' as never,
          {
            screen: 'BoothReview',
            params: {
              placeName: review.photoBooth.name,
              boothId: review.photoBooth.id,
            },
          } as never,
        );
      },
    },
    {
      name: '삭제',
      onPressItem: () => {
        deleteReview(review.id, {
          onSuccess: () => {
            queryClient.invalidateQueries(['userList']);
          },
        });
      },
    },
  ];

  return (
    <View>
      <RecordHeader />
      {isLoggedIn && <AddPostButton />}

      {isLoggedIn ? (
        <>
          <NickNameView />
          <SlideViewContainer>
            <LineSlideView items={slideViewItems} index={focus} setIndex={setFocus}>
              {isFetching || isLoading ? (
                <ActivityIndicator size="large" style={{marginTop: heightPercentage(100)}} />
              ) : (
                <PostFlatList
                  numColumns={2}
                  data={data?.postList}
                  renderItem={({item}: any) => (
                    <CardWrapper>
                      <FastImage
                        source={{uri: item.postImageSet[0].imageUrl}}
                        style={style.recordFeedCard}
                      />
                    </CardWrapper>
                  )}
                />
              )}
              {isFetching || isLoading ? (
                <ActivityIndicator size="large" style={{marginTop: heightPercentage(100)}} />
              ) : (
                <ReviewFlatList
                  numColumns={1}
                  data={data?.reviewList}
                  renderItem={({item}: any) => (
                    <ReviewSummary {...item} key={item.id} menuItems={reviewMenus(item)} />
                  )}
                />
              )}
            </LineSlideView>
          </SlideViewContainer>
        </>
      ) : (
        <>
          <SlideViewContainer>
            <LineSlideView items={slideViewItems} index={focus} setIndex={setFocus} disable>
              <NotLoginContainer image={require('src/assets/images/login/before_login_record.png')}>
                오늘 하루를 기억해보세요
              </NotLoginContainer>
            </LineSlideView>
          </SlideViewContainer>
        </>
      )}
    </View>
  );
};

export default RecordOrganism;
