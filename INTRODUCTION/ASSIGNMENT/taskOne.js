var person = {
    firstName : "john",
    lastName : "Brook",
    sex : "Male",
    cohort : "c50",
    bestColor : "Blue",
    location : "Abuja"

};

var elements = ["firstName", "lastName", "sex", "cohort", "bestColor", "location"];

for (var index = 0; index < elements.length; index++){
    var element = elements[index] ;
    console.log(person[element]);
}


var numbers = Array.from ({ length:20}, (_, index) => +1);

var evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
});
console.log (evenNumbers);