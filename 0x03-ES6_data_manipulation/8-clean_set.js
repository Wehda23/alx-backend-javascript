const cleanSet = (set, startString) => {
  if (set.size === 0 || startString.length === 0) return '';
  return Array.from(set).filter((value) => value.startsWith(startString)).map((value) => value.replace(startString, '')).join('-');
};

export default cleanSet;
