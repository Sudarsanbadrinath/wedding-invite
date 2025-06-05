
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let guestName = document.getElementById('guest-name').value;
    let location = document.getElementById('location').value;
    let arrivingByCar = document.getElementById('arriving-by-car').value;

    alert(`Thank you, ${guestName}!

We have received your RSVP:
- Coming from: ${location}
- Will arrive by car: ${arrivingByCar}`);

    // You can add further functionality here to send data to a server or store it.
});
