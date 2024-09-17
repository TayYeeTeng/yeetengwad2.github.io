function calculate() {

    // YOUR CODE GOES HERE
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);

    if (validate_numbers(num1, num2) === false){
        const teacher_name = "Supreme Leader";
        document.getElementById('result').innerHTML = `
            <span style='color:red;'>
                ${teacher_name} says... Invalid Input!
                Try again!
            </span>`;

        // in the above code, even if we bring the 'try again!' to the next line, it WONT show on next line

        document.getElementById('result').innerText = `
            ${teacher_name} says... Invalid Input!
            Try again!`;
        // however, in the above code, if we bring the 'try again!' to the next line, it WILL show on next line

    }else{
        var totalSum = 0;
        for (let i = num1; i < num2+1; i++) {
            totalSum += i;
        }
    
        document.getElementById('result').innerText = "The sum is: " + totalSum;
    }
}

// check if number is blank or not a number
function validate_numbers(num1, num2){
    if (num1 == "" || num2 == ""){
        return false;
    }else if(isNaN(num1) == true || isNaN(num2) == true){
        return false;
    }else{
        return true;
    }
}