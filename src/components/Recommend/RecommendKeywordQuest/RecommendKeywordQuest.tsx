import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {TextnIconWrapper, TitleIcon} from '../PoseOrganism/PoseOrganism.styles';
import {
  Container,
  KeywordSearchList,
  KeywordSearchView,
  RowScrollView,
  SubTitleText,
  TitleText,
} from './RecommendKeywordQuest.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import useGetFilterTags from 'src/querys/useGetFilterTags';
import {
  changeFilteredBrand,
  changeFilteredHeadcountNumber,
  changeFilteredHeadcountRelation,
  changeFilteredPoseEmotion,
  changeFilteredPoseSituation,
} from 'src/redux/actions/PostAction';

const RecommendKeywordQuest = () => {
  const {data} = useGetFilterTags();
  const [sortData, setSortData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [keywordFocus, setKeywordFocus] = useState(Array.from({length: 20}, () => false));
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const keywordOnPress = (id: number, tagType: string) => () => {
    setDisabled(true);
    if (tagType === 'BRAND') {
      dispatch(changeFilteredBrand(id));
    } else if (tagType === 'CONCEPT') {
      dispatch(changeFilteredPoseEmotion(id));
    } else if (tagType === 'SITUATION') {
      dispatch(changeFilteredPoseSituation(id));
    } else if (tagType === 'HEAD_COUNT') {
      dispatch(changeFilteredHeadcountNumber(id));
    } else if (tagType === 'RELATION') {
      dispatch(changeFilteredHeadcountRelation(id));
    }
    navigation.navigate('PostListDetail' as never);
  };

  useEffect(() => {
    if (disabled) {
      setTimeout(() => {
        setDisabled(false);
      }, 1000);
    }
  }, [disabled]);

  useEffect(() => {
    if (data) {
      const nextData: any = [
        ...data.personalTagList.RELATION,
        ...data.personalTagList.HEAD_COUNT,
        ...data.conceptTagList.CONCEPT,
        ...data.conceptTagList.SITUATION,
        ...data.brandTagList,
      ];
      setSortData(
        nextData.sort(
          (a: {postCount: number}, b: {postCount: number}) => b.postCount - a.postCount,
        ),
      );
    }
  }, [data, keywordFocus]);

  return (
    <Container>
      <View>
        <TextnIconWrapper>
          <TitleIcon source={require('src/assets/images/RecommendScreen/Icon_Home_Tag.png')} />
          <TitleText>키워드로 빠르게 찾아보세요</TitleText>
        </TextnIconWrapper>
        <SubTitleText>키워드로 빠르게 포즈를 찾을 수 있어요!</SubTitleText>
      </View>
      <RowScrollView horizontal showsHorizontalScrollIndicator persistentScrollbar>
        <KeywordSearchList
          numColumns={10}
          scrollEnabled={false}
          showsHorizontalScrollIndicator
          data={sortData.slice(0, 20)}
          renderItem={({item, index}: any) => {
            return (
              <KeywordSearchView>
                <FilterChip
                  title={item.title}
                  selected={keywordFocus[index]}
                  onPressIn={() => {
                    setKeywordFocus(keywordFocus.map((v, i) => (i === index ? true : false)));
                  }}
                  onPressOut={() => {
                    setKeywordFocus(keywordFocus.map(() => false));
                  }}
                  onPress={keywordOnPress(item.id, item.tagType)}
                  disabled={disabled}
                />
              </KeywordSearchView>
            );
          }}
        />
      </RowScrollView>
    </Container>
  );
};

export default RecommendKeywordQuest;
