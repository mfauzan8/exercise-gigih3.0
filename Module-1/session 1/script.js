function validateForm(event) {
    event.preventDefault();
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (email.trim() === "" || password.trim() === "") {
      alert("Email dan password harus diisi.");
      return false;
    }
  
    if (!isValidEmail(email)) {
      alert("Email tidak valid.");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password harus lebih dari 6 karakter.");
      return false;
    }
    alert("Form berhasil di submit!");
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  var form = document.querySelector("form");
  form.addEventListener("submit", validateForm);
  