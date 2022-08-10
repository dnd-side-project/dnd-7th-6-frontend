import styled from '@emotion/native';

import {BodyText3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable<{active: boolean; index: number | undefined}>(
  ({active, index}) => ({
    paddingVertical: heightPercentage(10),
    paddingRight: widthPercentage(6),
    paddingLeft: widthPercentage(12),
    marginHorizontal: widthPercentage(2),
    marginLeft: index === 0 ? widthPercentage(10) : 0,
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: active ? theme.colors.primary[1].normal : theme.colors.grayscale[3],
    borderWidth: 1,
    alignSelf: 'flex-start',
    backgroundColor: active ? theme.colors.grayscale[1] : theme.colors.grayscale[1],
    height: heightPercentage(38),
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

export const Title = styled(BodyText3)<{active: boolean}>(({active}) => ({
  color: active ? theme.colors.primary[1].normal : theme.colors.grayscale[10],
}));

export const IconWrapper = styled.Pressable(() => ({
  position: 'absolute',
  right: widthPercentage(14),
  alignSelf: 'center',
}));
