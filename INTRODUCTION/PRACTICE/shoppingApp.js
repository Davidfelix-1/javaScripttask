
const  shoppingList =[
    {name: 'Apples', category:'Fruits', isHealthy: true},
    {name: 'Potato Chips', category: 'Snacks', isHealthy: false},
    {name: 'Carrots', category: 'Vegetbles', isHealthy: true},
    {name: 'Chocolate Bars', category:'Sweets', isHealthy: false},
    {name: 'Greek Yogurt', category:'Dairy', isHealthy: true},
    {name: 'Soda', category:'Beverages', isHealthy: false}
];

const result = shoppingList.filter((category) => category.isHealthy === true);
console.log(result);

const items = shoppingList.forEach((category) => category.isHealthy === true);
console.log(items);