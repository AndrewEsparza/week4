//each question is numbered 



//question 1

//a
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastIndex = ages.length - 1;     //used to find the last index of an array
let result = ages [lastIndex] - ages[0];
console.log(result);
//b
ages.push(31); 
lastIndex = ages.length - 1;   //a copy from above just finding the last element
result = ages [lastIndex] - ages[0];
console.log(result);//prints 28 now since 31 is pushed to the end of list
//therefore it does 31-3


//c
 let totalAge = 0;
  for (let i = 0; i < ages.length; i++) { //loop will iterate through the ages array
                            //adding up all the ages then dividing by the amount of elements
      totalAge += ages[i]; //same as totalAge = totalAge + ages[i]
 }
 let averageAge = totalAge / ages.length; 
 console.log(averageAge);

//question 2

//a
let names = ['Sam','Tommy','Tim','Sally','Buck', 'Bob'];
let totalLetters = 0;
for (let i= 0;i<names.length;i++){
    totalLetters += names[i].length;  //used to find total letters 
}
let averageLetters = totalLetters / names.length; //finally divide total letters by lenght of array
console.log(averageLetters);

//b
let concatenatedNames = ''; //has to be initialized as string or else undefined
 for (let i = 0; i < names.length; i++) {
      concatenatedNames += names[i] + ' '; //' ' added to make sure there is a space
 }
     console.log(concatenatedNames);
//question 3

let lastElement = ages[ages.length - 1]; //this takes the total amount of elements and substract by to print the last element
console.log(lastElement);

//question 4
let firstElement = ages[0]; //if you wanted to you can do 2 or 3 to access whatever element
console.log(firstElement);

//question 5
let nameLengths = [];//empty array to store new elements
    for (let i = 0; i < names.length; i++) { //loop will iterate to get the length of each element
      nameLengths.push(names[i].length); //.push is used to add the new value into namesLengths array
    }
    console.log(nameLengths);

//question 6 
let sumNameLengths = 0;
    for (let i = 0; i < nameLengths.length; i++) { //loop just goes through the .lenght meaning how long the array is
      sumNameLengths += nameLengths[i]; //changes the names to numbers then adds them all up 
    }
    console.log(sumNameLengths);

//question 7 
function concatenateWord(word, n) {
    return word.repeat(n);
  }
  
  let concatenatedWord = concatenateWord('Hello', 3);
  console.log(concatenatedWord);
//or 
let concatenatedWord2 = (word, n)=>word.repeat(n); //made it to arrow function more simpler 
concatenatedWord2 = concatenateWord('Hello', 3); //invoked the function and passed the arguments hello and 3 to repeat 3 times
console.log(concatenatedWord);

//question 8
let getFullName = (firstName, lastName)=>firstName+" "+lastName;//added the " " to make sure there is a space when both names are added
let fullName = getFullName('Andrew','Esparza');
console.log(fullName); 

//question 9 
let isSumGreaterThan100 = numbers => { //numbers as the parameter 
    let sum =0 //start at 0 to store sum of elements
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];  //adds all the elements together 
      }
      return sum > 100;    //checks if total is more than 100
}
let numbers = [1033, 320, 1231, 323];  //created an array of numbers to test out the function output should be true because they > 100
    console.log(isSumGreaterThan100(numbers));

//question 10
let calculateAverage = numbers =>{
    let sum = 0;
for (let i = 0; i < numbers.length; i++) { //for loop to iterate through all the numbers of the array
      sum += numbers[i]; //adds the total numbers 
    }
    return sum / numbers.length;    //divide the total by the lenght of array to get average of all elements
}
numbers = [1033, 320, 1231, 323];
console.log(calculateAverage(numbers)); //output should be the avg of all the numbers 

//question 11
let isAverageOfFirstArrayGreater = (array1, array2)=> {
    let average1 = calculateAverage(array1); //uses same function as above to find avg of first array 
      let average2 = calculateAverage(array2);//^^^^^^^^^
      return average1 > average2; //if its greater than its true
} 
let array1 = [15, 20, 32];
let array2 = [5, 7, 9];
console.log(isAverageOfFirstArrayGreater(array1, array2)); //invoke the function and use array1 and array2 as arguments output should be true

//question 12
let willBuyDrink = (isHotOutside,moneyInPocket)=>isHotOutside && moneyInPocket > 10.50; //used the && operator to check both conditions
console.log(willBuyDrink(true, 53.59));                                     // if both are true then output is 2 trues 


//question 13
let greetUser= yourName =>`Hello, ${yourName}! Welcome to our website.`; //used a string literal as well as a placeholder to add my name to 
let userName = "Andrew";                                                //string i have created
let greeting =greetUser(userName); //username=andrew therefore the function when it is invoked it will print the string literal plus whatever
console.log(greeting);              //argument i have passed through it
//created this function to greet anybody to your website