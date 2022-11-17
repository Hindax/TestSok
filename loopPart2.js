
// console.log("Lifting weights repetition 1");

// for(let rep= 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

const jonas = [
    'Jonas',
    'Schmidt',
    2030 - 1991,
    'teacher',
    ['Michel', 'Peter', 'Steven'],
    true
];
const types = [];
for(let i = 0; i < jonas.length;i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 -years[i]);
}
console.log(ages);

// continue and break
console.log('--only strings__');
for(let i = 0; i < jonas.length;i++) {
if(typeof jonas[i] !== 'string') continue;

   console.log(jonas[i], typeof jonas[i]);
}

console.log('--Break with number__');
for(let i = 0; i < jonas.length;i++) {
if(typeof jonas[i] == 'number') break;

   console.log(jonas[i], typeof jonas[i]);
}
