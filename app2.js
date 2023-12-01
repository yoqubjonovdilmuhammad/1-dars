// export let a = 2;

// export function callMe(name) {
//   console.log(`Hello world ${name}`);
// }



let tartibSon = products
  .sort((a, b) => {
    return a - b;
  })
  .forEach((element) => {
    console.log(element);
  });
