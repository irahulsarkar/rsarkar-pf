document.addEventListener('DOMContentLoaded', function() {
    const timeContainer = document.querySelector('.time-container');
    const realtimeTimeDisplay = document.querySelector('.realtime-time');
    let isShowingDate = false;

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        realtimeTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    function showDate() {
        const now = new Date();
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        realtimeTimeDisplay.textContent = now.toLocaleDateString(undefined, dateOptions);
        isShowingDate = true;
    }

    function showTime() {
        updateTime();
        isShowingDate = false;
    }

    // Initial time update and set interval for continuous updates
    updateTime();
    setInterval(updateTime, 1000);

    // Event listeners for hover effect
    timeContainer.addEventListener('mouseover', showDate);
    timeContainer.addEventListener('mouseout', showTime);
});