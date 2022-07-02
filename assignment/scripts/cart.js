console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = ["taco", "cheese", "apple"];

addItem = (item) => {
  basket.push(item);
  return true;
};

addItem("bread");

//console.log(basket);
//console.log(addItem());

listItems = () => {
  for (let item of basket) {
    console.log(item);
  }
};

listItems();

empty = () => {
  basket = [];
};

empty();
console.log(basket);
