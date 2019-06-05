var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

//do not do this !!! setting prototype in browser is not effective
john.__proto__ = person;
console.log(john.getFullName());
