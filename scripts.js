// simple arithmetic calculator app

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 */

 const calculator = {
   add(a,b) {
    return Number(a) + Number(b);
  },

 subtract(a,b) {
  return a-b;
}
,
 multiply(a,b) {
  return a*b;
}
,
 divide(a,b) {
  return a / b;
}
,
 remainder(a,b) {
  return a % b;
}
};
console.log(calculator.add(1,2));
const form=document.querySelector("form");
const num1=document.querySelector("#num-1");
const num1=document.querySelector("#num-2");
const num1=document.querySelector("select");
form.addEventListener("submit", function(event){
  event.preventDefault();

  console.log(num1.value,num2.value,select.value)
});
