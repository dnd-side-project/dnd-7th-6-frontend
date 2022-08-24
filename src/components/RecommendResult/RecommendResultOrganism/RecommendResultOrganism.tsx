import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import FilterSheetOrganism from 'src/components/PostListDetail/FilterSheetOrganism';
import {changeFilteredCustom} from 'src/redux/actions/PostAction';
import {RecommendResultScreenProps} from 'src/screens/RecommendScreen/KeywordSearchScreen/RecommendResultScreen';

const RecommendResultOrganism = ({route}: RecommendResultScreenProps) => {
  const {title, id} = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(changeFilteredCustom(id));
    }
  }, []);
  return <FilterSheetOrganism title={title} />;
};

export default RecommendResultOrganism;
