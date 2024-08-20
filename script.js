function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    const regex = /^pet_\d{4}[^\d_]+$/; // RegEx to validate the input

  const resultElement = document.getElementById("result");

  // Validation logic
  result = regex.test(input) ? "Valid Syntax" : "Invalid Syntax";

  document.getElementById("result").innerText = result;
}



