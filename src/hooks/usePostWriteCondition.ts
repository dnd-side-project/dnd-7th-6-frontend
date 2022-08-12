import {useSelector} from 'react-redux';

import {RootState} from 'src/redux/store';

const usePostWriteCondition = () => {
  const {screenIndex, ...newPost} = useSelector((state: RootState) => state.postWriteReducer);

  const disabledSelectTag = !newPost.tags
    .map((tag: any) => Object.entries(tag))
    .flat()
    .every(([_, selected]: any) => !selected);

  const getDisabled = () => {
    switch (screenIndex) {
      case 0:
        return !newPost.image.uri || !newPost.contents;
      case 1:
        return !disabledSelectTag;
      case 2:
        return false;
      default:
        return false;
    }
  };

  return {getDisabled};
};

export default usePostWriteCondition;
