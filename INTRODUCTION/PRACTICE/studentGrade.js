import promptSync from 'prompt-sync';

const studentScore = promptSync("Please enter student Grade from 10 - 100 : ");

switch(studentScore){
    case 1:
        if (studentScore = 90 <= 100){
            console.log("A you have an Excellent grade");
        }
        break;
    case 2:
        if (studentScore = 80 <= 89 ){
            console.log("B you have an outstanding grade");
        }    
        break;
    case 3:
        if (studentScore = 70 <=79) {
            console.log("C you have a good grade , keep up!");
        }  
        break;
    case 4:
        if (studentScore = 60 <= 69){
            console.log("D OOp! you fail, try again.");
        }  
        break; 
    default:     
};