


document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('user-type').value;

    // Simulated authentication (replace with actual API call)
    if (email === "pallaiashutosh2000@gmail.com" && password === "ashutosh123" && userType === "event-manager") {
        window.location.href = "dashboard.html";
    } 
    else if (email === 'pallaiashu2000@gmail.com' && password === 'ashu123' && userType === 'attendee') {
        window.location.href = 'discover.html';
    }
    else {
        alert("Invalid login credentials or user type. Please try again.");
    }
});
