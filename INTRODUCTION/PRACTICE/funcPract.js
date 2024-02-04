
var lenght = 3;
var width = 3;
var obj = [
    [{ row : 0, col : 0, value: "x"},
    { row : 0, col : 0, value: "x"},
    { row : 0, col : 0, value: "o"}],
    { row : 0, col : 0, value: "o"},
    { row : 0, col : 0, value: "x"},
    [{ row : 0, col : 0, value: "x"},
    { row : 0, col : 0, value: "o"},
    { row : 0, col : 0, value: "o"}],
];
let result = [[],[],[]]

for (const key in obj ){
    for (const newKey in obj[key] ){
        result[key].push(obj[key[newKey]['value']])
    }
};

console.log(result)