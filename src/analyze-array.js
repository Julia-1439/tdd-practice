function analyzeArray(arr = []) {
  if (arr.length === 0) {
    return {
      average: null,
      min: null,
      max: null,
      length: arr.length,
    };
  }
  arr.forEach((ele) => {
    if (typeof ele !== "number") throw new Error("Array must only contain numbers");
  });

  return {
    average: arr.reduce((currTotal, num) => currTotal + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export default analyzeArray;
