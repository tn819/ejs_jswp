function greet(whattosay) {
    //greet() execution context - returns function and execution context disappears
    return function (name) {
        //JS goes up scope chain to find whattosay
        console.log(whattosay + ' ' + name)
    }
}

greet('Hi')('Tony');

var sayHi = greet('Hi');
sayHi('Tony');

function buildFunctions(){
    var arr = [];
    
    for (var i=0; i < 3; i++){
        // function(i) is created systematically and pushed to array
        // i is 3 when for loop ends, all invoked functions reference i
        arr.push(
            function(){
                console.log(i)
            }
        
        )
    }
    return arr;
}

var fs = buildFunctions();

//all are 3
fs[0]();
fs[1]();
fs[2]();