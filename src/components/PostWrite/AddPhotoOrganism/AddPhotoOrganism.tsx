import React from 'react';
import {Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import {openPicker} from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';

import {Container, style} from './AddPhotoOrganism.styles';

import requestcameraPermission from 'src/hooks/requestcameraPermission';
import PlusIcon from 'src/icons/PlusIcon';
import {addDeleteImage, addPostWriteImage} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';
import valueOfPlatform from 'src/utils/valueOfPlatform';

const AddPhotoOrganism = () => {
  const dispatch = useDispatch();
  const {image} = useSelector((state: RootState) => state.postWriteReducer);

  const takePhoto = (isModify: boolean) => async () => {
    try {
      if (isModify) {
        const isFront = image.name.startsWith('front_');
        if (!isFront) {
          dispatch(addDeleteImage(image.id));
        }
      }
      await requestcameraPermission();
      const imageResponse = await openPicker({
        includeBase64: true,
        includeExif: true,
        mediaType: 'photo',
        multiple: true,
        maxFiles: 1,
      });
      const preview = imageResponse.map(({path, mime, filename}) => ({
        uri: path,
        type: mime,
        name: valueOfPlatform({
          ios: `front_${filename}`,
          android: `front_${Date.now()}.${mime === 'image/jpeg' ? 'jpg' : 'png'}`,
        }),
      }));
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
      <Container onPress={takePhoto(true)}>
        <FastImage source={{uri: image.uri}} style={style.fastImage} />
      </Container>
    );
  }

  return (
    <Container onPress={takePhoto(false)}>
      <PlusIcon />
    </Container>
  );
};

export default AddPhotoOrganism;
