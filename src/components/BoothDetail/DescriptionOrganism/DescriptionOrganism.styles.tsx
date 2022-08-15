import styled from '@emotion/native';

import {BodyText4, SubHeadline1} from 'src/components/utils/Text';
import {SubHeadline4} from 'src/components/utils/Text/SubHeadline';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(16),
});

export const TitleSection = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const BoothName = styled(SubHeadline1)({
  color: theme.colors.grayscale[10],
});

export const List = styled.View({
  paddingTop: heightPercentage(16),
  paddingBottom: heightPercentage(8),
});

export const ListRow = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

export const TextElement = styled(BodyText4)({
  color: theme.colors.grayscale[8],
});

export const Distance = styled(SubHeadline4)({
  color: theme.colors.primary[1].normal,
});
