var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + lang2);
    console.log('----------------');
}
// this will be undefined, unless you attach .bind (person) to the end }

var logPersonName = logName.bind(person);
// this will now be the bind parameter
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

//function currying
function multiply(a, b) {
    return a*b;
}
//permanently sets a to two
var multipleByTwo = multiply.bind(this, 2);
multipleByTwo(2); // multiples 2 by 2... leaves an open parameters