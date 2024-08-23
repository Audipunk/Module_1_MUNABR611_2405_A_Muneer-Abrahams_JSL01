function validateSyntax() {
    let input = document.getElementById('petInput').value;
  
    let result = ''; 
    const regex = /^pet_\d{4}[^\d_]+$/; 

  const resultElement = document.getElementById("result");

  // Validation logic
  result = regex.test(input) ? "Valid Syntax" : "Invalid Syntax";

  document.getElementById("result").innerText = result;
}



