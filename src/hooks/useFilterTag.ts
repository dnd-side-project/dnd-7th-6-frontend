import {useMemo} from 'react';

import {FILTER} from 'src/constants/filters';
import useGetTagForm from 'src/querys/useGetTagForm';
import {Tag} from 'src/types';

const useFilterTag = () => {
  const filterTag: Promise<Tag[][]>[] = [
    (useGetTagForm(FILTER.BRAND).data || []) as Promise<Tag[][]>,
    (useGetTagForm(FILTER.HEADCOUNT).data || []) as Promise<Tag[][]>,
    (useGetTagForm(FILTER.POSE).data || []) as Promise<Tag[][]>,
    (useGetTagForm(FILTER.FRAME).data || []) as Promise<Tag[][]>,
  ];
  const parsedFilterTag = useMemo(() => {
    return filterTag.reduce((map: {[id: number]: string}, filters: any) => {
      filters.forEach((tags: Tag[]) => {
        tags.forEach(tag => {
          map[tag.id] = tag.title;
        });
      });
      return map;
    }, {});
  }, [filterTag]);

  const getFilterTagById = (id: number) => {
    return parsedFilterTag[id];
  };

  return {getFilterTagById};
};

export default useFilterTag;
