document.addEventListener('DOMContentLoaded', function() {

  
    function validateform() {
      console.log('Validating form');
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      if (name === '' || email === '') {
        alert('Please fill out all required fields.');
        return false;
      }
      return true;
    }
  
    function logformvalues() {
      console.log('Logging form values');
      const A = document.getElementById('name').value;
      console.log('name:' + A);
  
      const B = document.getElementById('email').value;
      console.log('email:' + B);
  
      const C = document.querySelector('input[name="gender"]:checked').value;
      console.log('Gender:' + C);
  
      const D = document.getElementById('dob').value;
      console.log('Date of Birth:' + D);
  
      const E = document.getElementById('nationality').value;
      console.log('nationality:' + E);
  
      const F = document.querySelector('input[name="status"]:checked').value;
      console.log('Current status:' + F);
    }
  
    const registrationform = document.getElementById('registrationForm');
    if (registrationform) {

      registrationform.addEventListener('submit', function(event) {
        console.log('Form submitted');
        event.preventDefault();
  
        if (!validateform()) {
          return;
        }
  
        logformvalues();
        console.log('Form values logged');
  
        // wait for 3 seconds before redirecting
        setTimeout(function() {
          console.log('Redirecting to confirmation.html');
          window.location.href = "confirmation.html";
        }, 3000);
      });
    } else {
      console.log('Form not found');
    }
  });