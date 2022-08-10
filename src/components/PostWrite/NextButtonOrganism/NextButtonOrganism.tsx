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
  nextIndex: number;
}

const NextButtonOrganism = ({
  screenName,
  nextIndex,
  ...props
}: PropsWithChildren<Props & PressableProps>) => {
  const {screenIndex} = useSelector((state: RootState) => state.postWriteReducer);
  const navigation = useNavigation();

  return (
    <Container>
      <ProgressBarWrapper>
        <ProgressBar prevIndex={screenIndex} nextIndex={nextIndex} total={4} />
      </ProgressBarWrapper>
      <PressableSubmit {...props} onPress={() => navigation.navigate(screenName as never)}>
        {props.disabled ? '완료' : '다음'}
      </PressableSubmit>
    </Container>
  );
};

export default NextButtonOrganism;
