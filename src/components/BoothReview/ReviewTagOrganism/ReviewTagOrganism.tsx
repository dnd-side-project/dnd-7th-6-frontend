import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import TagInput from 'src/components/SearchTagInput/TagInput';
import TagSearchList from 'src/components/SearchTagInput/TagSearchList';
import {changeTagData} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';

const ReviewTagOrganism = () => {
  const [inputWord, setInputWord] = useState('');
  const tagData: string[] = useSelector((state: RootState) => state.reviewReducer.tagData);
  return (
    <>
      <TagSearchList
        inputWord={inputWord}
        setInputWord={setInputWord}
        tagData={tagData}
        changeTagData={changeTagData}
      />
      <TagInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        tagData={tagData}
        changeTagData={changeTagData}
      />
    </>
  );
};

export default ReviewTagOrganism;
