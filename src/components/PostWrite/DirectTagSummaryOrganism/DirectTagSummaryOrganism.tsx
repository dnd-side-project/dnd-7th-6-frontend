import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ContentSection from '../ContentSection';
import {
  ChipContainer,
  ChipWrapper,
} from '../SelectTagSummaryOrganism/SelectTagSummaryOrganism.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {changeCustomTag, changeScreen, toggleTagChip} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';
import {PostWriteParamList} from 'src/screens/RecommendScreen/PostWriteScreen';

interface Props {
  navigation: NativeStackNavigationProp<PostWriteParamList, 'Summary', undefined>;
}

const DirectTagSummaryOrganism = ({navigation}: Props) => {
  const {customTags} = useSelector((state: RootState) => state.postWriteReducer);
  const dispatch = useDispatch();

  const handlePressModifyButton = () => {
    navigation.push('CustomTag' as never, {isModifyMode: true} as never);
    dispatch(changeScreen(2));
  };
  const handleDelete = (target: number, tagId?: number) => () => {
    dispatch(changeCustomTag([...customTags].filter((_, i) => i !== target)));
    if (tagId) {
      dispatch(toggleTagChip(6, tagId));
    }
  };

  return (
    <>
      <ContentSection
        title="직접 태그 "
        subTitle=" (최대 4개)"
        onPressRightIcon={handlePressModifyButton}>
        <ChipContainer>
          {customTags.map((tag: string, i: number) => (
            <ChipWrapper key={tag}>
              <FilterChip selected title={tag} onPressDeleteIcon={handleDelete(i)} isGray={true} />
            </ChipWrapper>
          ))}
        </ChipContainer>
      </ContentSection>
    </>
  );
};

export default DirectTagSummaryOrganism;
