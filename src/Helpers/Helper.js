let sumOfObject = object => {
  let sum = Object.keys(object)
    .map(key => object[key])
    .reduce((sum, elm) => sum + elm, 0);
  return sum;
};

export { sumOfObject };
