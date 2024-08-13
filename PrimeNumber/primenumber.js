function checkPrime() {
    const number = parseInt(document.getElementById("number").value);
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    const resultText = isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`;
    document.getElementById("result").innerHTML = resultText;
}