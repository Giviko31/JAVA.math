/// დავალება 14 -

/// [ 1 ] /// 

// let personArray = [
//     {
//         name:'giorgi',
//         age:20,
//         address: "vashlijvari",
//     },

//         {
//         name:'nino',
//         age:30,
//         address: "gldani",
//     },

//         {
//         name:'nika',
//         age:23,
//         address: "vake",
//     }
// ]

// console.log(personArray[2].address);


/// [ 2 ] /// 

// let personArray = [
//     {
//         name:'gio',
//         age:20,
//         address: "saburtalo",
//     },

//         {
//         name:'nino',
//         age:30,
//         address: "masivi",
//     },

//         {
//         name:'nika',
//         age:23,
//         address: "digomi",
//     }
// ]
// console.log(`My name is ${personArray[0].name}`);



/// [ 3 ] /// 

// let personsArray = [
//     {
//         name:'giorgi',
//         age:20,
//         address: "vashlijvari",
//     },

//         {
//         name:'nino',
//         age:30,
//         address: "gldani",
//     },

//         {
//         name:'nika',
//         age:23,
//         address: "vake",
//     }
// ] 

// if(personsArray[0].age < 25) {
//     console.log("I am teenager");
// } else {
//     console.log("I am an adult");
// }


/// [ 4 ] /// 

// var numbers = [1, 2, 3, 4, 5,]

// for(var i=0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


////_____________________________


//// დავალება 15 


/// [ 1 ] ///

// var number = 100;
// for (let i =0; i <=number; i++){
//     console.log(i)
// }

/// [ 2 ] ///


// let x =0;
// let y = 50;

// while (x <=y) {
//     console.log(x)
//     x += 1;
// }

/// [ 3 ] /// 


// let x = 0;
// let y = 150;

// do {
//     console.log(x);
//     x++
// } while (x <=y)

/// [ 4 ] /// 


// let arrayNames = ["giorgi", "givi", "nika", "maka", "nino",]
//ბოლოში ამოკლება

// arrayNames.pop()
// console.log(arrayNames);


//თავში ამოკლება

// arrayNames.shift()
// console.log(arrayNames)


//თავში დამატება

// arrayNames.unshift("ekaterine");
// console.log(arrayNames)


//ბოლოში დამატება
// arrayNames.push("tedo");
// console.log(arrayNames)




//__________________________________


//დავალება 16

/// [ 1 ] ///

// const number = (10);

// if(number % 2 == 0) {
//     console.log("true");
// }
// else {
//     console.log("false.");
// }
// console.log(number);


/// [2] /// 

// const getCurrencySymbolFromCode  = ("USD");

// if  (getCurrencySymbolFromCode === "USD") {
//     console.log("$");
// }
// else {
//     console.log("i dont know this currency.");
// }
// if  (getCurrencySymbolFromCode === "EUR") {
//     console.log("€");
// }
// else {
//     console.log("i dont know this currency.");
// }
// if  (getCurrencySymbolFromCode === "GEL") {
//     console.log("ლ");
// }
// else {
//     console.log("i dont know this currency.");
// }

// console.log(getCurrencySymbolFromCode);

/// [3] /// 


// let guestName = 'HI MY NAME IS GIVI';

// console.log(guestName.toLowerCase());
  
/// [4] /// 

// const numbers = [9, 10, 17, 8, 11, 20, 4];

// const evens = numbers.filter((num) => num % 2 === 0);

// console.log(evens);


/// [5] /// 

// function calcExpense(income, expense) {
//     const profit = income - expense;
//     const calcPerc = (profit / income) * 100;
//     return profit;
//   }

// const jan = calcExpense(80, 20);
// const Feb = calcExpense(150, 60); 
// const mar = calcExpense(15, 220);
// const apr = calcExpense(72, 270);
// const may = calcExpense(100, 20);

// const sumOfProfit = [jan, Feb, mar, apr, may];
// console.log(sumOfProfit);