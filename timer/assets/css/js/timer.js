$(document).ready(function() {
    const endDate = new Date("2024-09-30T23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            $('#countdown').html("Sale has ended!");
            clearInterval(timer);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#countdown').html(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }

    // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);

    // Initial call to display the countdown immediately
    updateCountdown();
});
