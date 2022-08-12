import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

import ContentSection from '../ContentSection';
import {ChipContainer, ChipWrapper} from './SelectTagSummaryOrganism.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import useFilterTag from 'src/hooks/useFilterTag';
import {RootState} from 'src/redux/store';

const SelectTagSummaryOrganism = () => {
  const navigation = useNavigation();
  const {tags} = useSelector((state: RootState) => state.postWriteReducer);
  const {getFilterTagById} = useFilterTag();

  return (
    <>
      <ContentSection
        title="선택 태그"
        onPressRightIcon={() =>
          navigation.navigate('SelectTag' as never, {isModifyMode: true} as never)
        }>
        <ChipContainer>
          {tags
            .reduce((chips: [], tagMap: any) => {
              const tag = Object.keys(tagMap).filter(key => tagMap[key]);
              return [...chips, ...tag];
            }, [])
            .map((tag: string) => (
              <ChipWrapper key={tag}>
                <FilterChip selected title={getFilterTagById(parseInt(tag, 10))} />
              </ChipWrapper>
            ))}
        </ChipContainer>
      </ContentSection>
    </>
  );
};

export default SelectTagSummaryOrganism;
