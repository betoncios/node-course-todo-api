const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a0349546fcf306014089699';

if (!ObjectID.isValid(id)) {
	console.log('ID is not valid');
}

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5a04597b40b3f328f5b1de76').then((todo) => {
	console.log(todo);
});