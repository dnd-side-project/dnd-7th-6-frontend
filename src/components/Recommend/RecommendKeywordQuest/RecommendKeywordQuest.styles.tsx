import styled from '@emotion/native';

import {BodyText4, SubHeadline1} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  marginBottom: heightPercentage(52),
  paddingHorizontal: heightPercentage(16),
});

export const TitleText = styled(SubHeadline1)({color: theme.colors.grayscale[9]});

export const SubTitleText = styled(BodyText4)({color: theme.colors.grayscale[7]});

export const RowScrollView = styled.ScrollView({
  paddingBottom: heightPercentage(24),
});

export const KeywordSearchList = styled.FlatList({
  height: heightPercentage(112),
  flex: 1,
  flexDirection: 'row',
  marginTop: heightPercentage(16),
});

export const KeywordSearchView = styled.View({
  marginRight: widthPercentage(8),
  marginBottom: heightPercentage(12),
});
