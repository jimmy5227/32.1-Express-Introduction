mean = (array) => {
  let mean = 0;

  if (array.length == 0) {
    return 0;
  } else {
    array.forEach((element) => {
      mean = mean + element;
    });
    mean = mean / array.length;
    return mean;
  }
};

median = (array) => {
  array.sort();

  let median;
  let half = Math.floor(array.length / 2);

  if (array.length % 2) {
    median = array[half];
  } else {
    median = (array[half - 1] + array[half]) / 2;
  }
  return median;
};

mode = (array) => {
  array.sort();

  const mode = {};
  let max = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
  return max;
};

module.exports = {
  mean,
  median,
  mode,
};
