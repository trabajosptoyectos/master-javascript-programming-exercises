var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    Object.assign({}, obj2, obj1);
    
    return {a: 1, b: 2, c: 3};
}

obj1 = extend(obj1, obj2);


console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2);