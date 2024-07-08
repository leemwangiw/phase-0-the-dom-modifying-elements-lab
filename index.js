// Write your code here!
// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to the variable 'newHeader'
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.innerHTML = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append the newHeader to the body or any other part of the DOM if needed
document.body.appendChild(newHeader);
