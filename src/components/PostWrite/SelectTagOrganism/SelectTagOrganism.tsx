import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SelectTagSection from '../SelectTagSection';
import {RowBox, SelectTagScrollView, WarningText} from './SelectTagOrganism.styles';

import WarningIcon from 'src/icons/WarningIcon';
import useGetFilterTags from 'src/querys/useGetFilterTags';
import {toggleTagChip} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';

const SelectTagOrganism = () => {
  const dispatch = useDispatch();
  const {tags} = useSelector((state: RootState) => state.postWriteReducer);
  const {data} = useGetFilterTags();
  if (!data) {
    return <></>;
  }
  const typesOfTag = ['브랜드', '인원', '관계', '컨셉', '상황', '프레임'];
  const tagsByType = [
    data.brandTagList,
    data.personalTagList.HEAD_COUNT,
    data.personalTagList.RELATION,
    data.conceptTagList.CONCEPT,
    data.conceptTagList.SITUATION,
    data.frameTagList,
  ];

  const handlePressTag = (index: number) => (id: number) => () => {
    dispatch(toggleTagChip(index, id));
  };

  return (
    <SelectTagScrollView>
      <RowBox>
        <WarningIcon />
        <WarningText>
          {'태그에 원하는 답변이 없나요?\n다음으로 넘어가 직접 태그에 하고싶은 말을 남겨보세요!'}
        </WarningText>
      </RowBox>
      {typesOfTag.map((type, i) => (
        <SelectTagSection
          selects={tags[i]}
          key={i}
          tagsByType={tagsByType[i]}
          type={type}
          onPressTag={handlePressTag(i)}
        />
      ))}
    </SelectTagScrollView>
  );
};

export default SelectTagOrganism;
