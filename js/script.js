// Function to Get Limit (Number) information (including Invalid Input)
function getLimitInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mylimit").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num < 100 || num > 10000 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 100 and 10000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the limit of ${num}. <p>`;
        txt += `There are ${countLychrelNumbers(num)} Lychrel Numbers below ${num}.`;
    }

    // Display Information in the Browser
    document.getElementById("limitinfo").innerHTML = txt;
}

/*
    Function to return the count of all Lychrel Numbers below the limit num
    countLychrelNumbers(1000)  returns 13
    countLychrelNumbers(3243)  returns 39
    countLychrelNumbers(5000)  returns 76
    countLychrelNumbers(7654)  returns 140
    countLychrelNumbers(10000) returns 249
*/
function countLychrelNumbers(num) {
    const numReverse = (n) => Number(n.toString().split('').reverse().join(''));

    const isPalindrome = (n) => numReverse(n) === n;

    let total = 0;
    for (let i = 1; i < num; i++) {
        let loopCount = 1;
        let sum = i;
        while (loopCount < 50) {
            sum = sum + numReverse(sum);
            if (isPalindrome(sum)) {
                break;
            } else {
                loopCount++;
            }
        }
        if (loopCount === 50) total++;
    }
    return total;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("limitinfo").innerHTML = txt;
}