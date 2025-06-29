import multer from "multer";

const storage = multer.diskStorage({
    destination :function(req,file,cd){
        cd(null ,'./public/temp')

    },
    filename:function(req,file,cd){
        
        cd(null,file.originalname)
    }

})

export  const upload=multer( {storage,})




// addTwoNumbers.js

// Declare two numbers
const num1 = 5;
const num2 = 7;

// Add the numbers
const sum = num1 + num2;

// Print the result
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
