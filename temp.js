let ar = [10, 20, 30];

let r = ar.reduce((acc, item, index, arr) => {
  console.log(
    "start",
    "accumulator",
    acc,
    "item",
    item,
    "index",
    index,
    "array:",
    arr,
    "end",
  );
});
// console.log(r)
