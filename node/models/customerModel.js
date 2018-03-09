var mongoose = require('mongoose');
var schema = mongoose.Schema;


var CustomerSchema = new schema({
	name: {
		firstName: {
            type: String,
            required: 'What is the customer\'s first name?'
        },
		lastName: {
            type: String,
            required: 'What is the customer\'s last name?'
        }
	},
	address: {
		street: {
            type: String
        },
		city: {
            type: String
        },
		state: {
            type: String
        },
		country: {
            type: String
        }
	},
    shippable: {
        type: Boolean
    }
});

module.exports = mongoose.model('Customer', CustomerSchema)
