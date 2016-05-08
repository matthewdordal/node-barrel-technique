var util = require('./util');

console.log(util.stringFormat('{0} - {1}', 'Hello', 'World'));

console.log(util.greeting.formalGreeting(util.greeting.male('Marcus')) );
console.log(util.greeting.casualGreeting(util.greeting.male(util.greeting.phd('Marcus'))) );
