document.addEventListener('DOMContentLoaded', function() {
    const upcomingEventsTable = document.getElementById('upcoming-events').querySelector('tbody');
    const pastEventsTable = document.getElementById('past-events').querySelector('tbody');

    // Dummy data for events
    const events = [
        {
            title: "Tech Conference 2024",
            startDate: "2024-10-15",
            startTime: "10:00 AM",
            totalTickets: 500,
            soldTickets: 300,
            location: "San Francisco, CA"
        },
        {
            title: "Music Fest",
            startDate: "2024-11-01",
            startTime: "02:00 PM",
            totalTickets: 1000,
            soldTickets: 800,
            location: "Los Angeles, CA"
        },
        {
            title: "Art Expo",
            startDate: "2024-05-10",
            startTime: "09:00 AM",
            totalTickets: 200,
            soldTickets: 150,
            location: "New York, NY"
        },
        {
            title: "Developer Meetup",
            startDate: "2023-12-20",
            startTime: "03:00 PM",
            totalTickets: 300,
            soldTickets: 300,
            location: "Austin, TX"
        }
    ];

    // Function to determine if an event is upcoming or past
    function isUpcomingEvent(eventDate) {
        const today = new Date();
        const eventDateObj = new Date(eventDate);
        return eventDateObj >= today;
    }

    // Function to render events into tables
    function renderEvents(events) {
        events.forEach(event => {
            const remainingTickets = event.totalTickets - event.soldTickets;
            const eventRow = `
                <tr>
                    <td>${event.title}</td>
                    <td>${event.startDate}</td>
                    <td>${event.startTime}</td>
                    <td>${event.totalTickets}</td>
                    <td>${event.soldTickets}</td>
                    <td>${remainingTickets}</td>
                    <td>${event.location}</td>
                </tr>
            `;

            if (isUpcomingEvent(event.startDate)) {
                upcomingEventsTable.insertAdjacentHTML('beforeend', eventRow);
            } else {
                pastEventsTable.insertAdjacentHTML('beforeend', eventRow);
            }
        });
    }

    // Render the events on page load
    renderEvents(events);
});
