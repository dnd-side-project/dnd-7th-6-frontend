import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const useFocus = (callback: () => void) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callback();
    });
    return unsubscribe;
  }, []);
};

export default useFocus;
