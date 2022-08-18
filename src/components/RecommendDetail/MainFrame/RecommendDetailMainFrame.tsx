import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';

import {style} from './RecommendDetailMainFrame.styles';

import useGetPost from 'src/querys/useGetPost';

interface Props {
  id: number;
}

const RecommendDetailMainFrame = ({id}: Props) => {
  const {data} = useGetPost(id);
  const images =
    useMemo(() => data?.postImageSet.sort((a, b) => a.imageOrder - b.imageOrder), [data]) || [];

  return <FastImage source={{uri: images[0]?.imageUrl}} style={style} />;
};

export default RecommendDetailMainFrame;
