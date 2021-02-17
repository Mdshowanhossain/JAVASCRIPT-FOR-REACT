const numbers = [2,3,4,5,6,7,8,9];
const friendsName = ['SOHAN', 'OSMAN', 'HERO', 'ABDUR', 'RAHIM'];

const products = [
    {id:1, name: 'Mobile', price:300, features: 'Durabality Battery'},
    {id:2, name: 'WATCH', price:200, features: 'Durabality'},
    {id:3, name: 'LAPTOP', price:150, features: 'GOOD'},
    {id:4, name: 'SMART', price:100, features: 'AWESOME'},
];

// MAP: RELATED-----PROBLEM..

// const names = products.map(product=> product.name);

const name2 = products.map(product=> product.price);
// console.log(name2);


// FOR-EACH: RELATED PROBLEM......

// const names = products.forEach(product => console.log(product.name));


// FILTER: RELATED------PROBLEM..

const cheaper = products.filter(cheaperProducts=> cheaperProducts.price < 200)
// console.log(cheaper);

// Deleted-an-item-using-filter:

const remaining = products.filter(pd=> pd.id != 3);
// console.log(remaining);


// FIND:

const isHere = products.find(pd=> pd.name ==='WATCH');
console.log(isHere);



