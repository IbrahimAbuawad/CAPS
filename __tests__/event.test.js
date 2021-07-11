'use strict';
const events = require('../events');
require('../vendor');
require('../driver');
require('../caps');
describe('logger middleware', () => {
    let consoleSpy;
    const payload = {
        store: '1-206-flowers',
        orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
        customer: 'Jamal Braun',
        address: 'Schmittfort, LA'
    }
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        jest.useFakeTimers();
    });
    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('pickup', () => {
        events.emit('pickup', payload);
        jest.runAllTimers();
        expect(consoleSpy).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderID}`);
    });

    it('in-transit', () => {
        events.emit('in-transit', payload);
        jest.runAllTimers();
        expect(consoleSpy).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: delivered up  ${payload.orderID}`);
    });

    it('delivered', () => {
        events.emit('delivered', payload);
        jest.runAllTimers();
        expect(consoleSpy).toHaveBeenCalled();
    });
});