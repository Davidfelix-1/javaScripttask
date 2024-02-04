let birthdYears = [2000, 1972, 1999, 2001];
let currentYear = 2024;

const getResultArray = (arr, func) =>{
    const result =[];

    for(let birthdYears of arr){
        let value = func(birthdYears);
    }
}

const calculateAge = (birthdYears) =>{
    let age = currentYear - birthdYears;
    return age  ;
}

getResultArray(birthdYears,calculateAge);