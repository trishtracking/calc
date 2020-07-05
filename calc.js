function calculate(n1, operator, n2) {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2) // float over int because floats have decimal places
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2) 
  } else if(operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2) 
  } else if(operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2) 
  } 

  return result
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator_display')
const keys = calculator.querySelector('.calculator_keys')

keys.addEventListener('click', function(e){
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))


    if (!action) { // !action means it's a number key
      if (
        displayedNum === '0' || 
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate' 
      ) {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }

      calculator.dataset.previousKeyType = 'number'
    } 
      
    
    if (action === 'decimal') {
      if (!displayedNum.includes('.')) { //we want to make sure we dont double up on decimals
        display.textContent = displayedNum + '.'
      } else if (
        previousKeyType === 'operator' ||  
        previousKeyType ==='calculate'
      ) { 
        display.textContent = '0.'
      }

      calculator.dataset.previousKeyType = 'decimal'        
    } 
          
  if  ( // all the operators 
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
              
    if ( //mid calc update 
      firstValue &&
      operator &&
      previousKeyType !== 'operator' //prevent the calculator from performing 
      //calculation on subsequent clicks on the operator key &&
      && previousKeyType !== 'calculate'
    ) {
      const calcValue = calculate(firstValue, operator, secondValue)
      display.textContent = calcValue
      // Update calculated value as firstValue
      calculator.dataset.firstValue = calcValue
    } else {
      // If there are no calculations, set displayedNum as the firstValue
      calculator.dataset.firstValue = displayedNum
    }

    key.classList.add('is-depressed')
    calculator.dataset.previousKeyType = 'operator'
    calculator.dataset.operator = action 

  }

  if (action === 'clear') {
    if (key.textContent === 'AC') { //if clear key is currently ac
      calculator.dataset.operator = ''
      calculator.dataset.firstValue = ''
      calculator.dataset.midValue = '' 
      calculator.dataset.previousKeyType = ''
    } else { //clear key must be CE 
      key.textContent = 'AC' //so reset to AC 
    }

      display.textContent = 0
      calculator.dataset.previousKeyType = 'clear' 
  }

  if (action !== 'clear') {//implementing the clear last button 
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }

  if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    let secondValue = displayedNum 

    if (firstValue) {
      if (previousKeyType === 'calculate') { //if we've equals already
      //we want to make sure it redoes the calc, 
      //so makes first value the current displayed result
      firstValue = displayedNum
      secondValue = calculator.dataset.midValue
      }

      display.textContent = calculate(firstValue, operator, secondValue) //invokes calc function
    }

    //now we want to store the second value for use
    calculator.dataset.midValue = secondValue
    calculator.dataset.previousKeyType = 'calculate'

  }
}
}) //fin!!! 
  
     






