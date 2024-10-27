function OperationFunction() {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    const operation = document.getElementById("Selection").value.toLowerCase();
    
    // Check if inputs are empty
    if (Number1 === '' || Number2 === '' || operation === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Parse the numbers
    let num1 = parseFloat(Number1);
    let num2 = parseFloat(Number2);
    let result;

    // Perform the selected operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation. Please use add, subtract, multiply, or divide.");
            return;
    }

    // Display the result in the <h2> element
    document.getElementById("result").innerText = "Result: " + result;
}