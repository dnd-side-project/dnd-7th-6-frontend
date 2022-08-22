import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import ReviewNextPressable from '../ReviewNextPressable';
import {BackgroundPressableWrapper, ReviewNextPressableWrapper} from './ReviewTagOrganism.styles';

import TagInput from 'src/components/SearchTagInput/TagInput';
import TagSearchList from 'src/components/SearchTagInput/TagSearchList';
import {changeTagData} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';

const ReviewTagOrganism = () => {
  const [inputWord, setInputWord] = useState('');
  const tagData: string[] = useSelector((state: RootState) => state.reviewReducer.tagData);
  const navigation = useNavigation();
  const nextOnPress = () => navigation.goBack();

  return (
    <>
      <TagInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        tagData={tagData}
        changeTagData={changeTagData}
      />
      <TagSearchList
        inputWord={inputWord}
        setInputWord={setInputWord}
        tagData={tagData}
        changeTagData={changeTagData}
      />
      <BackgroundPressableWrapper>
        <ReviewNextPressableWrapper>
          <ReviewNextPressable onPress={nextOnPress} />
        </ReviewNextPressableWrapper>
      </BackgroundPressableWrapper>
    </>
  );
};

export default ReviewTagOrganism;
