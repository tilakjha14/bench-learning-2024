// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Failed");
//     // resolve("Success");
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log("result=", result);
//   })
//   .catch((error) => {
//     console.log("Error=" + error);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//promise chaining

add(1, 1)
  .then((sum) => {
    console.log("sum=" + sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log("sum2=" + sum2);
  })
  .catch((e) => {
    console.log(e);
  });
