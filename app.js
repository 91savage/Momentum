let person = { fname: 'JOHN', lname: 'Doe', age: 25 };

for (const key in person) {
    console.log(person[key]);
}

let brands = ['Apple', 'Google', 'facebook', 'amazon', 'Samsung'];

for (const brand of brands) {
    console.log(brand);
}

let language = 'JavaScript';
for (const x of language) {
    console.log(x);
}
