const events = require('./events');

events.on('pickup', async(payload) => {
   await setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', { store: payload.store, orderID: payload.orderID, customer: payload.customer, address: payload.address });
    }, 1000);

    await setTimeout(() => {
        console.log(`DRIVER: delivered up  ${payload.orderID}`);
        console.log(`VENDOR:Thank you for delivering ${payload.orderID} `);
        events.emit('delivered', { store: payload.store, orderID: payload.orderID, customer: payload.customer, address: payload.address });
    
    }, 3000);
    
  });