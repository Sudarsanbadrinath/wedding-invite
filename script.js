document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let guestName = document.getElementById('guest-name').value;
    let location = document.getElementById('location').value;
    let arrivingByCar = document.getElementById('arriving-by-car').value;
    let side = document.getElementById('side').value;  // Capture the side (Groom's or Bride's side)

    // Create a FormData object and append the form data
    var formData = new FormData();
    formData.append('name', guestName);
    formData.append('location', location);
    formData.append('arriving-by-car', arrivingByCar);
    formData.append('side', side);  // Append the "side" value here

    // Log the FormData to verify it's correct (for debugging)
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]); 
    }

    // Send the data to Google Apps Script Web App URL
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
