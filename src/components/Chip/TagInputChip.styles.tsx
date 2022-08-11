import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable<{active: boolean; index: number | undefined}>(
  ({active, index}) => ({
    paddingVertical: heightPercentage(10),
    paddingRight: active ? widthPercentage(6) : widthPercentage(12),
    paddingLeft: widthPercentage(12),
    marginHorizontal: widthPercentage(2),
    marginLeft: index === 0 ? widthPercentage(10) : 0,
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: active ? theme.colors.primary[1].normal : theme.colors.grayscale[3],
    borderWidth: 1,
    backgroundColor: theme.colors.grayscale[1],
    height: heightPercentage(38),
    alignItems: 'center',
    justifyContent: 'center',
  }),
);

export const Title = styled.Text<{active: boolean}>(({active}) => ({
  color: active ? theme.colors.primary[1].normal : theme.colors.grayscale[10],
  fontSize: theme.fonts.Body[2].size,
  fontFamily: theme.fonts.Body[2].fontFamily,
}));

export const IconWrapper = styled.Pressable(() => ({}));
