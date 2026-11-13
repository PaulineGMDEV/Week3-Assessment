/*Grading System**/
let StudentName= prompt("Enter student's full name:");
let courseName= prompt("Enter course name:");

/*Get Marks**/
let mark1= prompt("Enter first subjects marks:")
let mark2= prompt("Enter second subject marks:")
let mark3=prompt("Enter third subject marks:")

/*Calculate Average**/
function calculateAverage(a,b,c){
    return (a+b+c)/3;
}

function calculateGrade(avg){
    if(avg>=80){
        return "A";
    }else if (avg>=70){
        return "B";
    }else if (avg>=60){
        return "C";
    }else if (avg>=50){
        return "D"
    }else{
        return "E"
    }
}

/*Check empty Information**/
if (!name||!course||!mark1||!mark2||!mark3){
alert("All information required");
}else{
    mark1=Number(mark1);
    mark2=Number(mark2);
    mark3=Number(mark3);
}

/*check marks**/
if(
    isNaN(mark1)||isNaN(mark2)||isNaN(mark3)||
    mark1<0||mark1>100||
    mark2<0||mark2>100||
    mark3<0||mark3>100
){
    alert("Invalid marks!Enter marks between 0 to 100.");
    {else{
        let average=calculateAverage(mark1,mark2,mark3);
        let grade(calculateGrade(average);


        console.log("Student Name:"+name);
        console.log("Course:"+course);
        console.log("Average:"+average.toFixed(2));
            console.log("Grade:"+grade);

        }
}