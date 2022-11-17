const jonas = {
    firstName: "Jonas",
    familyName: "Schmidtman",
    birthYear: 1999,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,


// option 1
    // calcAge: function (birthYear) {
    //     return 2031 - birthYear;
        
    // }
// // Option 2
//     calcAge: function () {
//         // console.log(this);
//         return 2031 - this.birthYear; 
//     }


// Option 3
    calcAge: function () {
        this.age = 2031 - this.birthYear;
        return this.age; 
    },

    getSummary : function () {
                return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, 
        and he has ${this.hasDriversLicense? 'a' : 'no'} driver's licence.`
        
    }
};


console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());


//Challenge
//"Jonas is a 46 year old teacher, and he has a/no drivers's licence"



