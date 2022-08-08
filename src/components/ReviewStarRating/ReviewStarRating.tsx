import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {StarPressable, StarWrapper} from './ReviewStarRating.styles';

import ColorStarIcon from 'src/icons/ColorStarIcon';
import StarIcon from 'src/icons/StarIcon';
import {changeStars} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';

const ReviewStarRating = () => {
  const maxRating = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const currentStars: number = useSelector((state: RootState) => state.reviewReducer.currentStar);

  return (
    <StarWrapper>
      {maxRating.map(item => {
        return (
          <StarPressable key={item} onPress={() => dispatch(changeStars(item))}>
            {item <= currentStars ? <ColorStarIcon size={38} /> : <StarIcon />}
          </StarPressable>
        );
      })}
    </StarWrapper>
  );
};

export default ReviewStarRating;
