import React, {useState} from 'react';

import ReviewSearchList from '../ReviewSearchList';
import ReviewTagInput from '../ReviewTagInput';
const ReviewTagOrganism = () => {
  const [inputWord, setInputWord] = useState('');
  return (
    <>
      <ReviewTagInput inputWord={inputWord} setInputWord={setInputWord} />
      <ReviewSearchList inputWord={inputWord} />
    </>
  );
};

export default ReviewTagOrganism;
