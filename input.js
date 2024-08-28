document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = L.map('map').setView([40.730610, -73.935242], 13); // Center the map on New York City

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add interactive markers
    const events = [
        {
            name: 'Local Festival',
            description: 'Enjoy local music and food.',
            coordinates: [40.730610, -73.935242],
            date: 'August 30, 2024'
        },
        {
            name: 'Cultural Workshop',
            description: 'Learn traditional crafts.',
            coordinates: [40.740610, -73.945242],
            date: 'September 5, 2024'
        }
        // Add more events here
    ];

    events.forEach(event => {
        L.marker(event.coordinates).addTo(map)
            .bindPopup(`<strong>${event.name}</strong><br>${event.description}<br><em>Date:</em> ${event.date}`)
            .openPopup();
    });
});
document.getElementById('event-preferences-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get user inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interests = Array.from(document.getElementById('interests').selectedOptions).map(option => option.value);

    // Display the personalized event calendar
    let calendarHTML = `<h3 style="text-align: center; color: #007BFF; font-family: 'Georgia', serif;">${name}'s Personalized Event Calendar</h3>`;
    calendarHTML += '<ul style="list-style-type: none; padding: 0;">';

    if (interests.includes('music')) {
        calendarHTML += '<li style="background-color: #FFB6C1; padding: 10px; border-radius: 4px; margin-bottom: 10px;">Upcoming Music Festivals</li>';
    }
    if (interests.includes('art')) {
        calendarHTML += '<li style="background-color: #B0E57C; padding: 10px; border-radius: 4px; margin-bottom: 10px;">Upcoming Art Exhibitions</li>';
    }
    if (interests.includes('theatre')) {
        calendarHTML += '<li style="background-color: #FFD700; padding: 10px; border-radius: 4px; margin-bottom: 10px;">Upcoming Theatre Performances</li>';
    }
    if (interests.includes('dance')) {
        calendarHTML += '<li style="background-color: #ADD8E6; padding: 10px; border-radius: 4px; margin-bottom: 10px;">Upcoming Dance Shows</li>';
    }
    if (interests.includes('food')) {
        calendarHTML += '<li style="background-color: #FF6347; padding: 10px; border-radius: 4px; margin-bottom: 10px;">Upcoming Food Festivals</li>';
    }

    calendarHTML += '</ul>';

    // Append the generated calendar to the section
    const calendarSection = document.getElementById('personalized-calendar');
    calendarSection.innerHTML += calendarHTML;
});
