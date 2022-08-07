const getSelectedItems = (node: any): Object | null => {
  return Object.keys(node).reduce((result: Object | null, key) => {
    if (result) {
      return result;
    }
    if (typeof node[key] !== 'boolean') {
      return getSelectedItems(node[key]);
    }
    if (node[key]) {
      return node;
    }
    return null;
  }, null);
};

export default getSelectedItems;
