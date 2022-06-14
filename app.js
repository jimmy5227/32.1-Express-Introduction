const express = require("express");
const app = express();

const { mean, median, mode } = require("./operations");

app.get("/", function (req, res) {
  return res.send("<h1>Hello World</h1>");
});

app.get("/mean", function (req, res) {
  if (req.query.nums == undefined) {
    return res
      .status(400)
      .send(
        "<h1>nums query variable and numbers are required in the query</h1>"
      );
  }
  let nums = req.query.nums.split(",");
  if (nums.length == 1 && nums[0] == "") {
    return res.status(400).send("<h1>numbers are required</h1>");
  }

  for (let i = 0; i < nums.length; i++) {
    if (!parseInt(nums[i])) {
      return res.status(400).send(`${nums[i]} is not a number`);
    } else {
      nums[i] = parseInt(nums[i]);
    }
  }

  const obj = {
    response: {
      operation: "mean",
      value: mean(nums),
    },
  };

  return res.json(obj);
});

app.get("/median", function (req, res) {
  if (req.query.nums == undefined) {
    return res
      .status(400)
      .send(
        "<h1>nums query variable and numbers are required in the query</h1>"
      );
  }
  let nums = req.query.nums.split(",");
  if (nums.length == 1 && nums[0] == "") {
    return res.status(400).send("<h1>numbers are required</h1>");
  }

  for (let i = 0; i < nums.length; i++) {
    if (!parseInt(nums[i])) {
      return res.status(400).send(`${nums[i]} is not a number`);
    } else {
      nums[i] = parseInt(nums[i]);
    }
  }

  const obj = {
    response: {
      operation: "median",
      value: median(nums),
    },
  };

  return res.json(obj);
});

app.get("/mode", function (req, res) {
  if (req.query.nums == undefined) {
    return res
      .status(400)
      .send(
        "<h1>nums query variable and numbers are required in the query</h1>"
      );
  }
  let nums = req.query.nums.split(",");
  if (nums.length == 1 && nums[0] == "") {
    return res.status(400).send("<h1>numbers are required</h1>");
  }

  for (let i = 0; i < nums.length; i++) {
    if (!parseInt(nums[i])) {
      return res.status(400).send(`${nums[i]} is not a number`);
    } else {
      nums[i] = parseInt(nums[i]);
    }
  }

  const obj = {
    response: {
      operation: "mode",
      value: mode(nums),
    },
  };

  return res.json(obj);
});

app.listen(8080, function () {});
