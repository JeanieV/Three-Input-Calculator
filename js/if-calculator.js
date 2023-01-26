//While loops to re-enter the correct input
let firstCheck = false;
let secondCheck = false;
let thirdCheck = false;

let input1;
let input2;
let input3;

//First while loop to check if it is true or false
while (firstCheck == false) {

    //First User Input and if it is invalid
    input1 = prompt("Kindly enter your first number: ");


    if (isNaN(input1)) {
        alert("Kindly enter a numeric value");
    }
    else {
        input1 = parseInt(input1);
        firstCheck = true;
    }
}

//Second while loop to check if it is true or false
while (secondCheck == false) {

    //Second User Input and if it is invalid
    input2 = prompt("Kindly enter your second number: ");



    if (isNaN(input2)) {
        alert("Kindly enter a numeric value");
    }
    else {
        input2 = parseInt(input2);
        secondCheck = true;
    }
}

//Third while loop to check if it is true or false
while (thirdCheck == false) {
    
        //Third User Input
        input3 = prompt("Kindly enter a operator ( + , - , * or / ): ");


        if (input3 == '+' || input3 == '-' || input3 == '*' || input3 == '/') {
            //Conditional
            if (input3 == '+') {
                document.getElementById("value").innerHTML = input1 + input2;
            }
            else if (input3 == '-') {
                document.getElementById("value").innerHTML = input1 - input2;
            }
            else if (input3 == '*') {
                document.getElementById("value").innerHTML = input1 * input2;
            }
            else if (input3 == '/') {
                document.getElementById("value").innerHTML = input1 / input2;
            }
            thirdCheck = true;
            console.log(input1);
            console.log(input2);
            console.log(input3);
        }
        else {
            alert("Kindly enter a operator ( + , - , * or / ): ")
        }
    }

































