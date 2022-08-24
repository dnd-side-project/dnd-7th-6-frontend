import {DetailScreenProps} from './BoothDetailScreen';

export const DetailHeaderStyle = ({navigation}: DetailScreenProps) => {
  navigation.setOptions({
    headerShown: false,
  });
};
