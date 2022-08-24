import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

import {Button} from './AddPostButton.styles';

import PlusIcon32 from 'src/icons/PlusIcon32';
import {RootState} from 'src/redux/store';
import theme from 'src/styles/Theme';

const AddPostButton = () => {
  const navigation = useNavigation();
  const {isLoggedIn} = useSelector((state: RootState) => state.userReducer);

  const handlePressAddPostButton = () => {
    if (!isLoggedIn) {
      navigation.navigate('RouteLoginScreen' as never);
      return;
    }
    navigation.navigate('RoutePostWrite' as never);
  };

  return (
    <Button onPress={handlePressAddPostButton}>
      <PlusIcon32 color={theme.colors.grayscale[2]} />
    </Button>
  );
};

export default AddPostButton;
