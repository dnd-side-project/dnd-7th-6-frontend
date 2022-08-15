import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TagInput from 'src/components/SearchTagInput/TagInput';
import TagSearchList from 'src/components/SearchTagInput/TagSearchList';
import {changeCustomTag} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';

const InputCustomTagOrganism = () => {
  const [inputWord, setInputWord] = useState('');
  const dispatch = useDispatch();
  const {customTags} = useSelector((state: RootState) => state.postWriteReducer);

  const handleDelete = (index?: number) => {
    const next = [...customTags].filter((tag, i) => index !== i);
    dispatch(changeCustomTag(next));
  };

  return (
    <>
      <TagInput
        changeTagData={changeCustomTag}
        inputWord={inputWord}
        setInputWord={setInputWord}
        tagData={customTags}
        onDelete={handleDelete}
      />
      <TagSearchList
        inputWord={inputWord}
        setInputWord={setInputWord}
        tagData={customTags}
        changeTagData={changeCustomTag}
      />
    </>
  );
};

export default InputCustomTagOrganism;
