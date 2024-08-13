
function factorial() {
    var n1 = parseInt(document.f1.n1.value);

    if (isNaN(n1) || n1 < 0) {
        document.getElementById("result").innerHTML = "Please enter a valid non-negative number.";
        return; 
    }

    var result = calculateFactorial(n1);

    document.getElementById("result").innerHTML = "The factorial of " + n1 + " is: " + result;
}

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}