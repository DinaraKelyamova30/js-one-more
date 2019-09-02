//for (let i = 100; i >= 0; i--) {
//    if ( i % 2 === 0 && i % 10 !== 0 ) {
//    document.write(i =  '<br>');
//    }
//}

// let i = 0;
// while (i < 100) {
//     document.write(i + '<br>');
//     i++;
// }

// let i = 0;
//  do {
//      document.write(i + '<br>');
//      i++;
// } while (i < 100);

// let name = parseFloat(prompt('Enter namber'));
//     while (Number.isNaN(num)) {
//     alert('You entered not a number!');
//     num = parseFloat(prompt('Enter namber'));
// }

//  let num;
//  do {
//      if (num !== undefind){

//      }
//      num = parseFloat(prompt('Enter namber'));
//  } while (isNaN(num))

let products = ['Tesla X', 'Tesla S', 'BMW i3'];
products[3] = 'Twsla Y';
products[4] = 'ZAZ Sena';
products[5] = 'Fiat';
products[6] = 'Kia';
products.push('Chevy Corvette', 'Subaru');
products[10] = 'Toyota Corolla';
console.log(products.length);

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
//     if (products[i] !== undefined ) {
//         console.log(products[i]);
//     }
// }

// products.forEach(printElement);

// function printElement(element) {
//     console.log(element)
// }

//  products.forEach(function(el) {
//      console.log(el);
//  });

products.forEach(function( el => console.log(el) );

