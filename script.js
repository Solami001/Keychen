document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = {
        'index.html': 'home-link',
        'about.html': 'about-link',
        'portfolio.html': 'portfolio-link',
        'contact.html': 'contact-link'
    };

    if (navLinks[currentPage]) {
        document.getElementById(navLinks[currentPage]).classList.add('active');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const navbarIcon = document.getElementById('navbar-icon');
    const menuIcon = document.getElementById('menu-icon');
    const cancelIcon = document.getElementById('cancel-icon');
    const sidebar = document.getElementById('sidebar');

    navbarIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('hidden');
        cancelIcon.classList.toggle('hidden');
        sidebar.classList.toggle('hidden-sidebar');

        if (menuIcon.classList.contains('hidden')) {
            menuIcon.classList.add('animate-spin');
        } else {
            menuIcon.classList.remove('animate-spin');
        }
    });
});

// Countdown Targets
const launchDate = new Date("2024-11-16T00:00:00").getTime(); // Launch date
const websiteDate = new Date("2025-01-05T00:00:00").getTime(); // Main website release

// Function to update countdowns
function updateCountdowns() {
    const now = new Date().getTime();

    // Calculate remaining time for launch countdown
    const launchRemaining = launchDate - now;
    const launchDays = Math.floor(launchRemaining / (1000 * 60 * 60 * 24));
    const launchHours = Math.floor((launchRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const launchMinutes = Math.floor((launchRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const launchSeconds = Math.floor((launchRemaining % (1000 * 60)) / 1000);

    // Update HTML for launch countdown
    document.getElementById("launch-days").textContent = launchDays;
    document.getElementById("launch-hours").textContent = launchHours;
    document.getElementById("launch-minutes").textContent = launchMinutes;
    document.getElementById("launch-seconds").textContent = launchSeconds;

    // Calculate remaining time for website countdown
    const websiteRemaining = websiteDate - now;
    const websiteDays = Math.floor(websiteRemaining / (1000 * 60 * 60 * 24));
    const websiteHours = Math.floor((websiteRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const websiteMinutes = Math.floor((websiteRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const websiteSeconds = Math.floor((websiteRemaining % (1000 * 60)) / 1000);

    // Update HTML for website countdown
    document.getElementById("website-days").textContent = websiteDays;
    document.getElementById("website-hours").textContent = websiteHours;
    document.getElementById("website-minutes").textContent = websiteMinutes;
    document.getElementById("website-seconds").textContent = websiteSeconds;

    // If either countdown is complete
    if (launchRemaining < 0) {
        document.getElementById("launch-timer").textContent = "We're Live!";
    }
    if (websiteRemaining < 0) {
        document.getElementById("website-timer").textContent = "Website Coming Soon!";
    }
}

// Update countdowns every second
setInterval(updateCountdowns, 1000);
