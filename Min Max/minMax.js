function minMax(arr) {
  // console.log(arr, "this is our arr");

  // get data maximal array awal [0]
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  // looping array
  for (let i = 0; i < 5; i++) {
    // looping condition
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
    // push data array[i] ke variable sum
    sum += arr[i];
    console.log(sum);
  }

  let maxSum = sum - min;
  let minSum = sum - max;
  console.log("minimal Sum :", minSum);
  console.log("maximal Sum :", maxSum);

  // if (arr.length > 5) {
  //   return "Too long";
  // }

  // // const clone = [...arr].sort((a, b) => a - b);
  // // console.log("data clone :", clone);

  // const sum = (acc, curr) => acc + curr;
  // // console.log("data setelah di jumlah:", sum);

  // var minArr = arr.slice(0, 4).reduce(sum, 0);
  // var maxArr = arr.slice(1).reduce(sum, 0);

  // console.log(minArr, "minimum");
  // console.log(maxArr, "maximal");

  //   console.log(baseSum, "this is baseSum");
  //   console.log((minSum = baseSum + arr[0]), (maxSum = baseSum + arr[4]));
}

const numArr = [1, 2, 3, 4, 5];

minMax(numArr);
