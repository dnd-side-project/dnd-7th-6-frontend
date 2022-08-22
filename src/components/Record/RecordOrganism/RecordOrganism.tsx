import React, {useState} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';

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
import useGetUserList from 'src/querys/useGetUserList';
import {RootState} from 'src/redux/store';

const RecordOrganism = () => {
  const isLoggedIn = useSelector((state: RootState) => state.userReducer.isLoggedIn);
  const [focus, setFocus] = useState(0);
  const {data} = useGetUserList();
  const slideViewItems = [
    {name: '사진', count: !data ? 0 : data.postList.length},
    {name: '부스 리뷰', count: !data ? 0 : data.reviewList.length},
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
              <ReviewFlatList
                numColumns={1}
                data={data?.reviewList}
                renderItem={({item}: any) => <ReviewSummary {...item} key={item.id} />}
              />
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
