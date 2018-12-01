const pause = time =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });

(async () => {
  console.log("Hello ...");
  await pause(1000);
  console.log("World!");
})();
