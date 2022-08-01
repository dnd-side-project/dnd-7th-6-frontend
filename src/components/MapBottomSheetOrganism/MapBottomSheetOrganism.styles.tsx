import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const bottomSheetStyle = {
  borderRadius: 16,
};

export const handleStyle = {
  width: widthPercentage(80),
  height: heightPercentage(4),
  backgroundColor: theme.colors.grayscale[6],
};
