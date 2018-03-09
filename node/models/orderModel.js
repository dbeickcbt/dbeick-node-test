var mongoose = require('mongoose');
var schema = mongoose.Schema;


var OrderSchema = new schema({
	make: {
		type: String,
		required: 'What is the make of the car?'
	},
	model: {
		type: String,
		required: 'What is the model of the car?'
	},
	carPackage: {
		type: String,
		required: 'What is the trim package of the car?'
	},
	customerId: {
		type: Schema.ObjectId,
		required: 'What is the customer id?'
	},
	supplierId: {
		type: Schema.ObjectId
	}
});

module.exports = mongoose.model('Order', OrderSchema)
