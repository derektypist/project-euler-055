// Function to Get Limit (Number) information (including Invalid Input)
function getLimitInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mylimit").value;
    // Check if the input is valid
    if (isNaN(num) || num.length==0 || num<100 || num>10000 || (num.length>1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 100 and 10000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the limit of ${num}. <p>`;
        txt += `There are ${countLychrelNumbers(num)} below ${num}.`;
    }

    // Display Information in the Browser
    document.getElementById("limitinfo").innerHTML = txt;
}