// Data that will be dynamically loaded
const eventData = {
    headline: "Hello! Sharing world",
    subHeadline: "CREATIVE COMMONS GLOBAL SUMMIT 2015",
    description: "A joyful celebration believing in the value of openness and sharing, creating a positive change with people from over 80 countries is taking place in October, in Korea.",
    date: "2015.10.15(THU) ~ 16(FRI)",
    location: "@ National Museum of Korea, Art Center Nabi and more"
};

// Function to load the content dynamically
function loadContent() {
    document.getElementById('headline').innerText = eventData.headline;
    document.getElementById('sub-headline').innerText = eventData.subHeadline;
    document.getElementById('description').innerText = eventData.description;
    document.getElementById('date').innerText = eventData.date;
    document.getElementById('location').innerText = eventData.location;
}

// Call the function when the window loads
window.onload = loadContent;
