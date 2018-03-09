module.exports = function(app){
    var ccasCont = require('./controllers/ccasControllers');

    app.route('/')
            .get(ccasCont.websiteWelcome);

    app.route('/order');
            .post(ccasCont.createOrder)
            .put(ccasCont.updateOrder);

    app.route('/orders')
            .get(ccasCont.retrieveOrders);

    app.route('/customer')
            .post(ccasCont.createCustomer)
            .get(ccasCont.retrieveCustomerHistory)
            .put(ccasCont.updateCustomer)
            .delete(=ccasCont.deleteCustomer);
