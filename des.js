    // ARRAY DESTRUCTING

    const numbers = [12,24,34];
    // const x = numbers[0];
    // const y = numbers[1];
    // const z= numbers[2];

    const [x,y,z]= numbers;
    // console.log(x,y,z);





function boxify (numbers){
    return [numbers, numbers + 10]; 
}

const totalBoxed = boxify(200);
console.log(totalBoxed);

// ==============

const [box1,box2] = boxify(200);
console.log(box1,box2);
// =================

// Object Destructuring
const people = {id:3, name: 'Sohan', age:20}
const {id,name,age} = people;

// const {id,name,age} ={id:3, name: 'Sohan', age:20}

console.log(id,name,age);


// CREATE-OBJECT-SHORTCUT

const one = 10;
const two = 20;

const myObj ={one, two};
console.log(myObj);
