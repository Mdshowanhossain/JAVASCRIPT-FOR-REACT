// const money = 200;
// let food;
// if (money<150) {
//     food = ('ame briyani khaboo');
// }else{
//     food = ('ame alu vortaa khaboo');
// }

// let food = money<150 ? 'ame briyani khabo' : 'ame alur vorta khabo';

// let displayUsers = Active ? 'active' : 'inactive';

// FUCTION-CALL-ALLTERNATIVE

// active ? displayUsers() : hideUser();

// 

// active && displayUsers()
// active || displayUsers()

let active = false;
const x = active && 5;
console.log(x);

// number to string...

const num1 = +'55';
const num2 = 44 + '';
console.log(num2);

// DEFAULT PARAMETER

function add(num1, num2= 30){
    return num1 + num2;
}
const total = add(20);
console.log(total);


// function numbers(num1, num2){
//   num2 = num2 || 30;
//     return num1 + num2;
// }
// const total = add(20);
// console.log(total);