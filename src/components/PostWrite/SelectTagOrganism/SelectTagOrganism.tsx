import React from 'react';
import {ScrollView} from 'react-native';

import SelectTagSection from '../SelectTagSection';

import useGetFilterTags from 'src/querys/useGetFilterTags';

const SelectTagOrganism = () => {
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

  return (
    <ScrollView>
      {typesOfTag.map((type, i) => (
        <SelectTagSection key={i} tagsByType={tagsByType[i]} type={type} />
      ))}
    </ScrollView>
  );
};

export default SelectTagOrganism;
