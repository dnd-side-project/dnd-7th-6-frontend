import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Button} from './AddPostButton.styles';

import PlusIcon32 from 'src/icons/PlusIcon32';
import theme from 'src/styles/Theme';

const AddPostButton = () => {
  const navigation = useNavigation();

  const handlePressAddPostButton = () => {
    navigation.navigate(
      'RouteRecommendScreen' as never,
      {
        screen: 'RoutePostWrite',
        initial: false,
      } as never,
    );
  };

  return (
    <Button onPress={handlePressAddPostButton}>
      <PlusIcon32 color={theme.colors.grayscale[2]} />
    </Button>
  );
};

export default AddPostButton;
