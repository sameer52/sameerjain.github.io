document.addEventListener("DOMContentLoaded", () => {
    const indicator = document.getElementById("scroll-indicator");

    if (!indicator) return;

    // Simple bouncing animation
    let direction = 1;
    let position = 0;

    function bounce() {
        position += 0.4 * direction;

        if (position > 10) direction = -1;
        if (position < 0) direction = 1;

        indicator.style.transform = `translateY(${position}px)`;

        requestAnimationFrame(bounce);
    }

    bounce();
});
