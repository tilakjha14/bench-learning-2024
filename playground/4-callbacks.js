// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };
// geoCode("Delhi", (data) => {
//   console.log(data);
// });

// const add = (x, y, callback) => {
//   setTimeout(() => {
//     const sum = x + y;
//     callback(sum);
//   }, 2000);
// };
// add(1, 4, (sum) => {
//   console.log(sum);
// });

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is error", undefined);
    callback(undefined, [1, 2, 3]);
  }, 2000);
};
doWorkCallback((error, result) => {
  if (error) {
    return console.log("error=", error);
  }
  console.log("result=", result);
});
