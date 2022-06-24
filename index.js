function calculator(){
    var firstNumber = parseFloat(prompt('Enter first Number:'));
    var operation= prompt('Enter Operation: +, -, *, /, %');
    var secondNumber = parseFloat(prompt('Enter Second Number'));
    let answer;
    if(operation == '+'){
        answer= firstNumber + secondNumber;
        if (isNaN(answer)){
        alert("Enter numbers only!\nTry again")
    }
    else{
        alert(answer);
    }
    }
    else if(operation == '-'){
    answer= firstNumber - secondNumber;
    if (isNaN(answer)){
        alert("Enter numbers only!\nTry again")
    }
    else{
        alert(answer)
    };
    }
    else if(operation == '*'){
    answer= firstNumber * secondNumber;
    if (isNaN(answer)){
        alert("Enter numbers only!\nTry again")
    }
    else{
        alert(answer);
    }
    }
    else if(operation == '/'){
        answer= firstNumber + secondNumber;
        if (isNaN(answer)){
        alert("Enter numbers only!\nTry again")
    }
    else{
        alert(answer);
    }
    }
    else if(operation == '%'){
        answer= firstNumber % secondNumber;
        if (isNaN(answer)){
        alert("Enter numbers only!\nTry again")
    }
    else{
        alert(answer);
    }
    }
    else{
        alert('Seems you\'ve selected an Invalid operation\nRetry with a valid operation')
    };
}
calculator()