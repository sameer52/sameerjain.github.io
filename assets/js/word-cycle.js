document.addEventListener("DOMContentLoaded", () => {
    const words = [
        "engineering",
        "technology",
        "robotics",
        "Computer Aided Design",
        "linux",
        "embedded systems",
        "intelligent design",
        "Computational Fluid Dynamics",
        "Finite Element Analysis",
        "rapid prototyping",
        "manufacturing",
        "systems integration",
        "human centric design"
    ];

    const el = document.getElementById("cycling-word");
    if (!el) return;

    let index = 1;

    function cycleWord() {
        // Fade out
        el.style.opacity = 0;

        setTimeout(() => {
            // Update word
            el.textContent = words[index].toUpperCase();

            // Fade in
            el.style.opacity = 1;

            index = (index + 1) % words.length;
        }, 300); // timing matches CSS fade
    }

    // Start cycle every 2.2 seconds
    setInterval(cycleWord, 2200);

    // Initialize immediately
    el.textContent = words[0].toUpperCase();
    el.style.transition = "opacity 0.3s ease";
});
