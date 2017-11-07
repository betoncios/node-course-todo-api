// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	
	db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a01e17eefb8b348592c672c')}).then((res) => {
		console.log(res);
	}, (err) => {
		console.log('Unable to delete');
	});

	// db.close();
});