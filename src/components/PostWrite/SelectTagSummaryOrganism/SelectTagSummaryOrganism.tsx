import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ContentSection from '../ContentSection';
import {ChipContainer, ChipWrapper} from './SelectTagSummaryOrganism.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import useFilterTag from 'src/hooks/useFilterTag';
import {changeScreen} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';
import {PostWriteParamList} from 'src/screens/RecommendScreen/PostWriteScreen';

interface Props {
  navigation: NativeStackNavigationProp<PostWriteParamList, 'Summary', undefined>;
}

const SelectTagSummaryOrganism = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {tags} = useSelector((state: RootState) => state.postWriteReducer);
  const {getFilterTagById} = useFilterTag();

  const handlePressModifyButton = () => {
    navigation.push('SelectTag' as never, {isModifyMode: true} as never);
    dispatch(changeScreen(1));
  };

  return (
    <>
      <ContentSection title="선택된 태그" onPressRightIcon={handlePressModifyButton}>
        <ChipContainer>
          {tags
            .slice(0, 6)
            .reduce((chips: [], tagMap: any) => {
              const tag = Object.keys(tagMap).filter(key => tagMap[key]);
              return [...chips, ...tag];
            }, [])
            .map((tag: string) => (
              <ChipWrapper key={tag}>
                <FilterChip selected title={getFilterTagById(parseInt(tag, 10))} isGray={true} />
              </ChipWrapper>
            ))}
        </ChipContainer>
      </ContentSection>
    </>
  );
};

export default SelectTagSummaryOrganism;
