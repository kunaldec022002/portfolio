const form = document.getElementById('contact-form');
const storedDataDiv = document.getElementById('stored-data');

// Get the stored data from local storage
const storedData = localStorage.getItem('contact-form-data');

if (storedData) {
  const parsedData = JSON.parse(storedData);
  storedDataDiv.innerHTML = console.log (`Recently Contacting:  Name: ${parsedData.name}  Email: ${parsedData.email}  Message: ${parsedData.message}`
  );


}


// Add an event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Store the data in local storage
  const formData = { name, email, message };
  localStorage.setItem('contact-form-data', JSON.stringify(formData));

});