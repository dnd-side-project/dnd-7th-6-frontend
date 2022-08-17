import styled from '@emotion/native';

import {BodyText5, BodyText6} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const TextInputWrapper = styled.View({
  marginTop: heightPercentage(32),
  backgroundColor: theme.colors.grayscale[2],
  borderRadius: 8,
  width: widthPercentage(343),
  height: heightPercentage(48),
  alignSelf: 'center',
  justifyContent: 'center',
});

export const NickNameTextInput = styled.TextInput({
  marginLeft: widthPercentage(14),
});
export const DescriptionTextContainer = styled.View({
  marginTop: heightPercentage(40),
  marginLeft: widthPercentage(16),
});
export const DescriptionText = styled(BodyText6)({
  color: theme.colors.grayscale[7],
  marginBottom: heightPercentage(6),
});

export const MessegeText = styled(BodyText5)(({isSuccess}: {isSuccess: boolean}) => ({
  color: isSuccess ? '#00C880' : '#FE453A',
  marginLeft: widthPercentage(16),
  marginTop: heightPercentage(6),
}));
