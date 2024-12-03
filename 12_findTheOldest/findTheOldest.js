const findTheOldest = function(people) {
    let maxAge = 0, age = 0;
    let oldest = '';
    for (person of people) {
        if (person.yearOfDeath == undefined){
            let currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        console.log(`age: ${age}`);
        if (age > maxAge) {
            maxAge = age;
            console.log(`max age: ${maxAge}`);
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
