const getFirstSelected = (node: any): string | null => {
  return Object.keys(node).reduce((result: string | null, key) => {
    if (result) {
      return result;
    }
    if (typeof node[key] !== 'boolean') {
      return getFirstSelected(node[key]);
    }
    if (node[key]) {
      return key;
    }
    return null;
  }, null);
};

export default getFirstSelected;
