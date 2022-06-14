const { mean, median, mode } = require("./operations");

describe("#findMean", function () {
  it("Calculates the mean of an empty array", function () {
    expect(mean([])).toEqual(0);
  });
  it("Calculates the mean of an array of numbers", function () {
    expect(mean([1, -1, 4, 2])).toEqual(1.5);
  });
});

describe("#findMedian", function () {
  it("Calculates the median of an even set", function () {
    expect(median([1, -1, 4, 2])).toEqual(1.5);
  });
  it("finds the median of an odd set", function () {
    expect(median([1, -1, 4])).toEqual(1);
  });
});

describe("#findMode", function () {
  it("finds the mode", function () {
    expect(mode([1, 1, 1, 2, 2, 3])).toEqual(1);
  });
});
