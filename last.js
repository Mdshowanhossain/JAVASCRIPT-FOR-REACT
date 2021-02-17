// JSON

const person ={
    id: 01,
name: 'sohan',
lastName: 'Hossain',
age: 20,
salary: 100000,
District: 'Khulna'
}
// console.log(JSON.stringify(person));

const data = (JSON.stringify(person));
const dataParsed = JSON.parse(data);
// console.log(dataParsed.id);

// LOCAL STORAGE

// const userId = (1233);
// localStorage.setItem('userId', 2000);

// const userId= localStorage.getItem('userId');
// console.log(userId);

localStorage.setItem('person',JSON.stringify( person));

const stored= localStorage.getItem('person', person);
const storedPerson=JSON.parse(stored);
console.log(storedPerson.age); 

const keys= Object.keys(storedPerson);
console.log(keys);


const values = Object.values(storedPerson);
console.log(values);







// API

// fetch ('url')
// .then(res=> res.json())
// .then(data => console.log(data));