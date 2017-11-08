const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a0349546fcf306014089699';

if (!ObjectID.isValid(id)) {
	console.log('ID is not valid');
}

Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todos', todo);
});

Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log('Id not found');
	}
	console.log('Todos', todo);
}).catch((e) => console.log(e));

User.findById('5a02319db7a7ff09a1e3b934').then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log('Users: ', user);
}).catch((e) => console.log(e));

