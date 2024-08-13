function checkArmstrong() {
    const number = parseInt(document.getElementById("number").value);
    let temp = number;
    let sum = 0;
    let numDigits = 0;
    
    while (temp > 0) {
        numDigits++;
        temp = Math.floor(temp / 10);
    }
    
    temp = number;
    
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }
    
    const resultText = (sum === number) 
        ? `${number} is an Armstrong number.` 
        : `${number} is not an Armstrong number.`;
        
    document.getElementById("result").innerHTML = resultText;
}
