const toggleTag = (prev: {[key: number]: boolean}, target: number) => {
  const next = {...prev};

  if (next[target] === undefined) {
    next[target] = true;
    return next;
  }

  next[target] = !next[target];

  return next;
};

export default toggleTag;
