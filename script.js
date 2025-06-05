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

    // Send the form data to Google Apps Script Web App URL
    fetch('https://script.google.com/macros/s/AKfycbzu4w9Qb-912XIS9U279YHIHacAam4Rl53nr3x-gKjrklY5XR7K2Y3pSi_eisSY9SJF5g/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert(`Thank you, ${guestName}! Your RSVP has been submitted.`);
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an issue with your submission. Please try again.');
    });
});
