// Countdown Targets
const launchDate = new Date("2024-11-16T00:00:00").getTime(); // Launch date
const websiteDate = new Date("2024-12-01T00:00:00").getTime(); // Main website release

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
