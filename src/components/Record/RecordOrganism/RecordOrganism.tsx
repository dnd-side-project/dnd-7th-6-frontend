import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import NickNameView from '../NickNameView';
import RecordHeader from '../RecordHeader';
import {PostFlatList, ReviewFlatList, SlideViewContainer} from './RecordOrganism.styles';

import RecommendFeedCard from 'src/components/Recommend/FeedCard/RecommendFeedCard';
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
    {name: '사진', count: data?.postList.length},
    {name: '부스 리뷰', count: data?.reviewList.length},
  ];
  return (
    <View>
      <RecordHeader />
      {isLoggedIn ? (
        <>
          <NickNameView />
          <SlideViewContainer>
            <LineSlideView items={slideViewItems} index={focus} setIndex={setFocus}>
              <PostFlatList
                numColumns={2}
                data={data?.postList}
                renderItem={({item}: any) => (
                  <RecommendFeedCard imgUrl={item.postImageSet[0].imageUrl} key={item.id} />
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
              <NotLoginContainer>오늘 하루를 기억해보세요</NotLoginContainer>
            </LineSlideView>
          </SlideViewContainer>
        </>
      )}
    </View>
  );
};

export default RecordOrganism;
