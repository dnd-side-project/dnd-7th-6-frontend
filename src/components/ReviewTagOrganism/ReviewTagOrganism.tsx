import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'src/redux/store';

import ReviewSearchList from '../ReviewSearchList';
import ReviewTagInput from '../ReviewTagInput';
import {changeTagData} from 'src/redux/actions/ReviewAction';

const ReviewTagOrganism = () => {
  const [inputWord, setInputWord] = useState('');
  const tagData: string[] = useSelector((state: RootState) => state.reviewReducer.tagData);
  return (
    <>
      <ReviewTagInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        tagData={tagData}
        changeTagData={changeTagData}
      />
      <ReviewSearchList
        inputWord={inputWord}
        setInputWord={setInputWord}
        tagData={tagData}
        changeTagData={changeTagData}
      />
    </>
  );
};

export default ReviewTagOrganism;
