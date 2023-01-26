//First User Input and if it is invalid
let input1 = prompt("Kindly enter your first number: ");
input1 = parseInt(input1);

if (isNaN(input1)) {
    alert("Kindly enter a numeric value");
}



//Second User Input and if it is invalid
let input2 = prompt("Kindly enter your second number: ");
input2 = parseInt(input2);


if (isNaN(input2)) {
    alert("Kindly enter a numeric value");
}

//Third User Input
let input3 = prompt("Kindly enter a operator ( + , - , * or / ): ");


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

else if (input3 !== '+' || input3 !== '-' || input3 !== '*' || input3 !== '/') {
    alert("Kindly enter a operator ( + , - , * or / ): ")
}





