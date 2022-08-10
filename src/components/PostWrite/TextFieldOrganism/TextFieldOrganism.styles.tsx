import styled from '@emotion/native';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View<{focus: boolean}>(({focus}) => ({
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(16),
  marginBottom: focus ? heightPercentage(200) : 0,
}));
