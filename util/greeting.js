// Pure functions which can be composed for proper greetings.

exports.formalGreeting = (name) => `Hello ${name}`;
exports.casualGreeting = (name) => `Sup ${name}`;

exports.male = (name) => `Mr. ${name}`;
exports.female = (name) => `Mrs. ${name}`;
exports.doctor = (name) => `Dr. ${name}`;
exports.phd = (name) => `${name} PhD`;
