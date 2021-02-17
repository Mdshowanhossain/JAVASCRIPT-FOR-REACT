// variable: let, const.

let money = 300;
// money = 4;
console.log(money);
age = 20;


const person = {
    id: 1,
    name: 'kuddus',
    age: 20,
    city: 'Khulna'
};

const findObject = `Here is the information ${person.id} here is the information of age ${person.age}`
console.log(findObject);


// CONDITION

if (money > 200 && age >20) {
    
    console.log('AME BIRANY KAHABOO');
}
else{
    console.log('AME ALU VORTA R VAR KHABOO');
}


// ARRAY

const friendsName= ['Sohan', 'Osman', 'Rumi', 'Bappi', 'Tanvir'];

const goodBoys= ('Sohan', 'Osman', 'Abdul', 'Hay');

const products= [{id: 1, name: 'Mobile', price: 200,  }, {id: 2, name: 'laptop', price: 300},{id:3, name: 'tablet', price: 400 }];


// LOOP: FOR LOOP

for (let numbers = 0; numbers < numbers.length; i++) {
    const number = numbers[i];
    
}


// FUNCTION: 

function add (num1,num2){
    return num1 + num2;
}
const total = add(4,6);
console.log(' this is total number ' + total);


// ARROW FUNCTION

const fiveTimes = num => num * 5;

const addNumbers = (num1,num2,num3)=> num1+ num2+ num3;

const doMath = (number1, number2)=>{
    const number = number1 + number2;
    return number;
}
