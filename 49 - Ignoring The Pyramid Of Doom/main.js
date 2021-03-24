/* 
  Promise
*/
const myPromise = new Promise((resolve, reject) => {
  let thePosts = ["A", "B", "C", "D", "E", "F", "G", "H"];
  resolve(thePosts);
});

myPromise
  .then((result) => {
    console.log(`The total number of posts is: ${result.length}`);
    return result;
  })
  .then((result) => {
    console.log("#".repeat(30));
    console.log(`The first post is: ${result[0]}`);
    return result;
  })
  .then((result) => {
    console.log("#".repeat(30));
    console.log(`The last post is: ${result.slice(-1).pop()}`);
    return result;
  })
  .then((result) => {
    console.log("#".repeat(30));
    console.log("Evry page has 2 posts");
    console.log(`The number of pages is: ${result.length / 2}`);
  });
