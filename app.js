let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

words.filter((element, index, thisArg) => {
    console.log(element, index, thisArg);
});

let result = words.filter(function (a) {
    console.log(a);
    return a.length > 6;
});

console.log(result);
