const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator_keys");

keys.addEventListener("click", function(e){
 if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    if (!action) {
        console.log('you have pressed a number key')
      } else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('you have pressed an operator key')
      } else if (action === 'decimal') {
        console.log('decimal key!')
      } else if (action === 'clear') {
        console.log('clear key!')
      } else if (action === 'calculate') {
        console.log('equal key!')
      };
 };
});





