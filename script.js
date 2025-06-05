document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let guestName = document.getElementById('guest-name').value;
    let location = document.getElementById('location').value;
    let arrivingByCar = document.getElementById('arriving-by-car').value;

    // Create a FormData object
    var formData = new FormData();
    formData.append('name', guestName);
    formData.append('location', location);
    formData.append('arriving-by-car', arrivingByCar);

    // Send the data to Google Apps Script
    fetch('<https://script.google.com/macros/library/d/16F6JBd_n8-x6qj-FdUxdfrBbbLcunRLmzeuGZpuiMPyxj6aIKjDBz8BG/2>', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your RSVP, ' + guestName + '!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    });
});
