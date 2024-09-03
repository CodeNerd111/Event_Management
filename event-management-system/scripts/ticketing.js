document.getElementById('ticketing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const ticketQuantity = document.getElementById('ticket-quantity').value;

    // Simulate form submission
    alert(`Thank you, ${name}! Your registration for ${ticketQuantity} ticket(s) is complete.`);

    // Redirect to a confirmation page or another relevant page
    window.location.href = 'confirmation.html';
});
