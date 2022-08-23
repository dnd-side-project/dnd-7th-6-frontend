import React from 'react';
import {Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import {openPicker} from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import {useDispatch, useSelector} from 'react-redux';

import {Container, style} from './AddPhotoOrganism.styles';

import requestcameraPermission from 'src/hooks/requestcameraPermission';
import PlusIcon from 'src/icons/PlusIcon';
import {addDeleteImage, addPostWriteImage} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';

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
      if (imageResponse.length > 1) {
        Alert.alert('1장 이상 안됩니다');
        return;
      }
      imageResponse.splice(0, 1).map(item =>
        ImageResizer.createResizedImage(
          item.path,
          600,
          600,
          item.mime.includes('jpeg') ? 'JPEG' : 'PNG',
          100,
          0,
        ).then(r => {
          dispatch(addPostWriteImage({uri: r.uri, name: r.name, type: item.mime}));
        }),
      );
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
