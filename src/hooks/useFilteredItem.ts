import {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {RootState} from 'src/redux/store';

interface SelectedItem {
  type: string;
  index: number;
}

const useFilteredItem = () => {
  const {filteredBrand, filteredHeadcount, filteredPose, filteredFrame, filteredCustom} =
    useSelector((state: RootState) => state.postReducer);
  const items = useMemo(
    () => [
      [{type: '', filtered: filteredBrand}],
      [
        {type: 'number', filtered: filteredHeadcount.number},
        {type: 'relation', filtered: filteredHeadcount.relation},
      ],
      [
        {type: 'emotion', filtered: filteredPose.emotion},
        {type: 'situation', filtered: filteredPose.situation},
      ],
      [{type: '', filtered: filteredFrame}],
      [{type: '', filtered: filteredCustom}],
    ],
    [filteredBrand, filteredHeadcount, filteredPose, filteredFrame, filteredCustom],
  );

  const getCountOfSelected = (index: number): number => {
    return items[index].reduce((count: number, {filtered}: any) => {
      return count + Object.keys(filtered).filter(key => filtered[key]).length;
    }, 0);
  };
  const getFirstSelected = (index: number): SelectedItem | null => {
    if (!getCountOfSelected(index)) {
      return null;
    }
    return items[index].reduce((result: any, {type, filtered}: any) => {
      if (result) {
        return result;
      }
      const selected = Object.keys(filtered).filter(key => filtered[key]);
      if (selected.length <= 0) {
        return null;
      }
      return {type, index: selected[0]};
    }, null);
  };
  const getTagIdSet = () => {
    return items.reduce((set: any, filters) => {
      filters.forEach(({filtered}) => {
        set = [...set, ...Object.keys(filtered).filter(key => filtered[key])];
      });
      return set;
    }, []);
  };
  const tagIdSet = useMemo(
    () => getTagIdSet(),
    [filteredBrand, filteredHeadcount, filteredPose, filteredFrame, filteredCustom],
  );

  return {getCountOfSelected, getFirstSelected, tagIdSet};
};

export default useFilteredItem;
