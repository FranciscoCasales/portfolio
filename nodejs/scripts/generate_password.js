const bcrypt = require('bcrypt');

const generatedPassword = bcrypt.hashSync('jcasales01', 10);

console.log(generatedPassword);

const comparedPassword = bcrypt.compareSync('jcasales01', generatedPassword);

console.log(comparedPassword);
