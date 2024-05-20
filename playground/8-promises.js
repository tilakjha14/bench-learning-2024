const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failed");
    // resolve("Success");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("result=", result);
  })
  .catch((error) => {
    console.log("Error=" + error);
  });
