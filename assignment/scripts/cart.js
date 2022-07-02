console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = ["taco", "cheese", "apple", "napkins"];

// #1
addItem = (item) => {
  basket.push(item);
  return true;
};

console.log("return true to show item added ", addItem("bread"));
console.log("return updated basket", basket);

// #2
listItems = () => {
  for (let item of basket) {
    console.log(item);
  }
};

listItems();
/*
// #3
empty = () => {
  basket = [];
};

empty();
console.log("return emptied basket", basket);
*/
//stretch goals

let maxItems = 5;

isFull = () => {
  if (basket < maxItems) {
    return false;
  } else {
    return true;
  }
};

console.log(isFull());
