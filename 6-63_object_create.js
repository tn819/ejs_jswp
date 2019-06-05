//polyfill
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation' + ' only accepts the first parameter.');
        }
        // creates empty function - sets prototype
        function F() {}
        F.prototype = o;
        // empty object has o as prototype
        return new F();
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

