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
// studentData.js

// Define a function to display student details
function displayStudentData(student) {
  console.log("----- Student Details -----");
  console.log(`Name       : ${student.name}`);
  console.log(`Roll No.   : ${student.rollNo}`);
  console.log(`Course     : ${student.course}`);
  console.log(`Marks      : ${student.marks}`);
  console.log("----------------------------\n");
}

// Create multiple student objects
const student1 = {
  name: "Devesh Kumar",
  rollNo: "101",
  course: "MCA",
  marks: 89
};

const student2 = {
  name: "Anjali Singh",
  rollNo: "102",
  course: "MCA",
  marks: 92
};

// Call the function with each student object
displayStudentData(student1);
displayStudentData(student2);
