// script.js
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Hide the form and show the loading message
  document.getElementById('subscriptionForm').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  setTimeout(() => {
    // After 2.5 seconds, hide the loading and show the thank you message
    document.getElementById('loading').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
  }, 2500); // 2500 milliseconds == 2.5 seconds
});
