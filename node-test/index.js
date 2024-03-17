/* const passwordHash = require("password-hash");
const hashedpassword = passwordHash.generate("Areeba123");
console.log("password is" + hashedpassword);
*/

/*
const passwordHash = require('password-hash');
const hashedpassword = 'issha1$4dd84d04$1$10d3e3f1af070473cbbe8a70a35aab8d4dd6f3dc';
console.log(passwordHash.verify('Areeba123', hashedpassword));
*/

const passwordHash = require('password-hash');
const hashedPassword = 'issha1$4dd84d04$1$10d3e3f1af070473cbbe8a70a35aab8d4dd6f3dc';
console.log(passwordHash.isHashed('Areeba123', hashedPassword));

/*
var passwordHash = require('D:\workspace\sandbox\node-test\index.js/password-hash');

    var hashedPassword = 'sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97';
    
    console.log(passwordHash.verify('password123', hashedPassword)); // true
    */
