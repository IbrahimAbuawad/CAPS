const events = require('./events');
const faker = require('faker');
require('./caps');
require('./driver');

let randomName, randomAddress, randomID, store;

let count = 5;

const int = setInterval(function () {
    count--;
    randomName = faker.name.findName();
    randomID = faker.datatype.uuid();
    randomAddress = faker.address.streetAddress();
    store = faker.company.companyName();
    console.log(events.emit('pickup', { store: store, orderID: randomID, customer: randomName, address: randomAddress })
    );
    if(count===0){
        clearInterval(int)
    }
}, 5000);

