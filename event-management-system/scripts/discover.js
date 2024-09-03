document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.book-ticket-button');

    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Extract event ID from button ID
            const eventId = this.id.split('-')[1]; 
            // Redirect to the ticketing page with the event ID as a query parameter
            window.location.href = `ticketing.html?event=${eventId}`;
        });
    });
});
