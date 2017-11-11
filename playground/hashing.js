const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123654';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// });

var hashedPassword = '$2a$10$Ty3/AnScl6wCY4GX3zpuSuplltbL2Rj2hzBV2yqyjiQPcQkvbzgAy';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});

// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');

// console.log(decoded);

// // console.log(SHA256("this is a test").toString());