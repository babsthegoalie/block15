//create a function to return the object keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}

//create an object labeled customer and add key:value pairs
const customer = {
    firstName: 'Jake',
    lastName: 'Smith',
    email: 'jaekSmith!@aol.com',
    phone: undefined,
    zipCode: '631',
    favoriteFlavors: 32,
    cupSize: 'medium',
    favoriteStore: 'Target',
    firstVisit: false,

}

//modify key values
customer['email'] = 'Jak3Smith1992@email.com';
customer['phone'] = 3195551234;
customer['zipCode'] = '63132';
customer['favoriteFlavors'] = ['coffee', 'strawberry', 'matcha'];

//delete properties
delete customer['zipCode'];
delete customer['favoriteStore'];

//add key values
customer.toppings = ['chocolate sprinkles', 'wafer straws', 'gummy bears'];
customer.futureFlavors = 'mango';
customer.todaysPurchaseCost = 5.32;

console.table(customer)

//In an array, print the keys in the survey by calling the getObjectKeys function
const keysArray = getObjectKeys(customer);


console.log('Survey Keys: ' + keysArray);