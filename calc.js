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




// /// ignore below 
// const hideBox = document.querySelector('#hide');
// hideBox.addEventListener('change', function(e){
//   if(hideBox.checked){
//     list.style.display = "none";
//   } else {
//     list.style.display = "initial" 
//   }
  
// });

// //filter books 
// const searchBar = document.forms['search-books'].querySelector('input');
// searchBar.addEventListener('keyup', function(e){
//   const term = e.target.value.toLowerCase();
//   const books = list.getElementsByTagName('li');
//   Array.from(books).forEach(function(book){
//       const title = book.firstElementChild.textContent; 
//       if(title.toLowerCase().indexOf(term) != -1){
//         book.style.display = 'block';
//       } else {
//         book.style.display = 'none';
//       }
//   });
// }
// );


