import React from 'react';
import {Alert, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {openPicker} from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from './AddPhotoOrganism.styles';

import PlusIcon from 'src/icons/PlusIcon';
import {addPostWriteImage} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';

const AddPhotoOrganism = () => {
  const dispatch = useDispatch();
  const {image} = useSelector((state: RootState) => state.postWriteReducer);
  const {width, height} = Dimensions.get('window');
  const takePhoto = async () => {
    try {
      const imageResponse = await openPicker({
        includeBase64: true,
        includeExif: true,
        mediaType: 'photo',
        multiple: true,
        maxFiles: 4,
      });
      const preview = imageResponse.map(({mime, data}) => `data:${mime};base64,${data}`);
      if (preview.length > 1) {
        Alert.alert('1장 이상 안됩니다');
      }
      dispatch(addPostWriteImage(preview[0]));
    } catch (error) {
      console.error(error);
    }
  };
  if (image.uri) {
    return (
      <FastImage
        source={{uri: image.uri}}
        style={{
          alignSelf: 'center',
          height: width - 32,
          width: width - 32,
          marginVertical: heightPercentage(8),
        }}
      />
    );
  }

  return (
    <Container onPress={takePhoto}>
      <PlusIcon />
    </Container>
  );
};

export default AddPhotoOrganism;
