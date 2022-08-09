import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {PressableProps} from 'react-native';
import {useSelector} from 'react-redux';

import {Container, ProgressBarWrapper} from './NextButtonOrganism.styles';

import PressableSubmit from 'src/components/utils/Pressables/PressableSubmit';
import ProgressBar from 'src/components/utils/ProgressBar';
import {RootState} from 'src/redux/store';

interface Props {
  screenName: string;
}

const NextButtonOrganism = ({screenName, ...props}: PropsWithChildren<Props & PressableProps>) => {
  const {tags} = useSelector((state: RootState) => state.postWriteReducer);
  const navigation = useNavigation();
  const nextScreenMap: {[screen: string]: string} = {
    PostWrite: 'SelectTag',
  };
  const disabledPressableSubmit = tags
    .map((tag: any) => Object.entries(tag))
    .flat()
    .every(([_, selected]: any) => !selected);

  return (
    <Container>
      <ProgressBarWrapper>
        <ProgressBar length={1 / 3} />
      </ProgressBarWrapper>
      <PressableSubmit
        {...props}
        disabled={disabledPressableSubmit}
        onPress={() => navigation.navigate(nextScreenMap[screenName] as never)}>
        {disabledPressableSubmit ? '완료' : '다음'}
      </PressableSubmit>
    </Container>
  );
};

export default NextButtonOrganism;
