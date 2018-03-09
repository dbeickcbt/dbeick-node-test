module.exports = function(app){
    var extCont = require('./controllers/extControllers');

    app.route('/acme/api/v45.1/order')
            .post(extCont.createACMEOrder);

    app.route('/rainier/v10.0/nonce_token')
            .get(extCont.createRTSToken);

    app.route('/rainier/v10.0/request_customized_model')
            .post(extCont.createRTSOrder);
