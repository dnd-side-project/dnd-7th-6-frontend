import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SearchBarCotainer = styled.View({
  flexDirection: 'row',
  backgroundColor: theme.colors.grayscale[2],
  borderRadius: 8,
  width: widthPercentage(311),
  height: heightPercentage(46),
  marginLeft: widthPercentage(46),
  alignItems: 'center',
});

export const SearchBarIconWrapper = styled.View({
  marginLeft: widthPercentage(10),
});

export const SearchBarTextInput = styled.TextInput({
  paddingVertical: 0,
  width: widthPercentage(270),
  height: '100%',
  marginLeft: widthPercentage(8),
  color: theme.colors.grayscale[8],
  fontFamily: theme.fonts.Body[3].fontFamily,
  fontSize: theme.fonts.Body[3].size,
});

export const RightIconAndroid = styled.Pressable({
  width: widthPercentage(18),
  height: widthPercentage(18),
  borderRadius: 100,
  backgroundColor: theme.colors.grayscale[3],
  position: 'absolute',
  right: widthPercentage(9),
  alignItems: 'center',
  justifyContent: 'center',
});

export const PressableDeleteView = styled.View({
  alignSelf: 'center',
});
