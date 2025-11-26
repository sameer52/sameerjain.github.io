const THEME_KEY = 'portfolioTheme';
const DEFAULT_THEME = 'eng'; 
const linkSections = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'];

const header = document.getElementById('header-nav');
const logoText = document.getElementById('logo-text');
const toggleButton = document.getElementById('theme-toggle');
const introText = document.getElementById('intro-text');
const nameText = document.getElementById('name-text');
const body = document.body;

const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const desktopNav = document.getElementById('desktop-nav');
const mobileNavLinksContainer = document.getElementById('mobile-nav-links');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

const sectionTitles = document.querySelectorAll('.section-title'); // Grab all section titles

let currentTheme = DEFAULT_THEME;

/**
 * Closes the mobile menu and updates the button icon.
 */
const closeMobileMenu = () => {
    mobileMenu.classList.remove('open');
    body.style.overflowY = 'auto'; // Restore scrolling
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

/**
 * Toggles the mobile menu open/closed.
 */
const toggleMobileMenu = () => {
    if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
    } else {
        mobileMenu.classList.add('open');
        body.style.overflowY = 'hidden'; // Prevent scrolling when menu is open
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
}

/**
 * Creates and returns a navigation link element.
 * @param {string} label - The raw label (e.g., 'Home').
 * @param {boolean} isMobile - Whether the link is for the mobile menu.
 */
const createNavLink = (label, isMobile) => {
    const link = document.createElement('a');
    link.href = `#${label.toLowerCase()}`;
    link.className = `nav-link font-medium transition-colors duration-300 rounded-md p-2 block ${isMobile ? 'text-lg text-center' : 'text-base'}`;
    link.dataset.label = label;

    // Close mobile menu on click (only for mobile links)
    if (isMobile) {
        link.addEventListener('click', closeMobileMenu);
    }
    return link;
};

/**
 * Builds the navigation links for both desktop and mobile menus.
 */
const buildNavigation = () => {
    // Clear existing links
    desktopNav.innerHTML = '';
    mobileNavLinksContainer.innerHTML = '';

    linkSections.forEach(label => {
        // 1. Desktop Link
        const desktopLink = createNavLink(label, false);
        desktopNav.appendChild(desktopLink);

        // 2. Mobile Link
        const mobileLink = createNavLink(label, true);
        mobileNavLinksContainer.appendChild(mobileLink);
    });
};

/**
 * Applies the selected theme (Eng or CS).
 * @param {string} theme - 'eng' or 'cs'.
 */
const applyTheme = (theme) => {
    currentTheme = theme;

    // --- 1. Update Body Font & Color Classes (Global Theme) ---
    const allLinks = document.querySelectorAll('.nav-link');

    if (theme === 'cs') {
        // CS Theme: Monospace font, custom dark background, light blue text
        body.className = 'font-mono bg-cs-bg text-cs-accent transition-colors duration-500';
        
        // Set Header to dark/terminal style
        header.className = 'top-0 left-0 right-0 z-50 bg-cs-bg border-b border-cs-gray/50 transition-colors duration-500 fixed';
        mobileMenu.className = 'absolute left-0 right-0 bg-cs-bg/95 backdrop-blur-sm shadow-xl border-t border-cs-gray/50 transition-all duration-300 z-40' + (mobileMenu.classList.contains('open') ? ' open' : '');

        // Update Logo Color
        logoText.classList.remove('text-indigo-600');
        logoText.classList.add('text-cs-primary');

        // Update Intro Screen Text Color
        introText.classList.remove('text-indigo-500', 'text-green-500');
        introText.classList.add('text-cs-gray'); // Muted grey for "my name is..."
        nameText.classList.remove('text-gray-900', 'text-white');
        nameText.classList.add('text-cs-accent'); // Light blue for name

        // Update Mobile Button Icon color
        mobileMenuButton.classList.remove('text-gray-600', 'hover:bg-gray-100', 'text-green-400', 'hover:bg-gray-800');
        mobileMenuButton.classList.add('text-cs-accent', 'hover:bg-gray-800');

        // Update Section Backgrounds and Titles
        sectionTitles.forEach(title => {
            title.classList.remove('text-indigo-700');
            title.classList.add('text-cs-primary');
        });
        document.getElementById('about').classList.remove('bg-gray-100');
        document.getElementById('about').classList.add('bg-gray-900'); // Slightly lighter dark bg for contrast

        document.getElementById('skills').classList.remove('bg-gray-100');
        document.getElementById('skills').classList.add('bg-gray-900');
        
        document.getElementById('contact').classList.remove('bg-gray-100');
        document.getElementById('contact').classList.add('bg-gray-900');

        document.getElementById('experience').classList.remove('bg-white');
        document.getElementById('experience').classList.add('bg-cs-bg');

        document.getElementById('projects').classList.remove('bg-gray-50');
        document.getElementById('projects').classList.add('bg-cs-bg');

        document.getElementById('certifications').classList.remove('bg-gray-50');
        document.getElementById('certifications').classList.add('bg-cs-bg');


    } else {
        // Eng Theme: Inter font, light background, default colors
        body.className = 'font-sans bg-gray-50 text-gray-800 transition-colors duration-500';

        // Set Header to light style
        header.className = 'top-0 left-0 right-0 z-50 bg-white transition-colors duration-500 fixed';
        mobileMenu.className = 'absolute left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-gray-100 transition-all duration-300 z-40' + (mobileMenu.classList.contains('open') ? ' open' : '');

        // Update Logo Color
        logoText.classList.add('text-indigo-600');
        logoText.classList.remove('text-cs-primary');

        // Update Intro Screen Text Color
        introText.classList.add('text-indigo-500');
        introText.classList.remove('text-cs-gray');
        nameText.classList.add('text-gray-900');
        nameText.classList.remove('text-cs-accent');

        // Update Mobile Button Icon color
        mobileMenuButton.classList.add('text-gray-600', 'hover:bg-gray-100');
        mobileMenuButton.classList.remove('text-cs-accent', 'hover:bg-gray-800');

        // Update Section Backgrounds and Titles
        sectionTitles.forEach(title => {
            title.classList.remove('text-cs-primary');
            title.classList.add('text-indigo-700');
        });
        document.getElementById('about').classList.remove('bg-gray-900');
        document.getElementById('about').classList.add('bg-gray-100');

        document.getElementById('skills').classList.remove('bg-gray-900');
        document.getElementById('skills').classList.add('bg-gray-100');
        
        document.getElementById('contact').classList.remove('bg-gray-900');
        document.getElementById('contact').classList.add('bg-gray-100');

        document.getElementById('experience').classList.remove('bg-cs-bg');
        document.getElementById('experience').classList.add('bg-white');

        document.getElementById('projects').classList.remove('bg-cs-bg');
        document.getElementById('projects').classList.add('bg-gray-50');

        document.getElementById('certifications').classList.remove('bg-cs-bg');
        document.getElementById('certifications').classList.add('bg-gray-50');
    }
    
    // Re-run shrink effect to ensure proper classes are applied on theme change
    handleScroll(); 

    // --- 2. Update Navigation Link Text and Colors ---
    allLinks.forEach(link => {
        const label = link.dataset.label;
        const isContact = label === 'Contact';

        // Reset all classes
        link.classList.remove('text-gray-600', 'hover:text-indigo-600', 'text-cs-accent', 'hover:text-cs-primary');
        link.classList.remove('bg-indigo-50', 'hover:bg-indigo-100', 'bg-gray-800', 'hover:bg-gray-700');
        link.classList.remove('text-cs-pink', 'hover:text-cs-yellow');
        
        if (theme === 'cs') {
            // Apply forward slash prefix and CS color scheme
            link.textContent = '/' + label.toLowerCase();
            
            // Default links: Light blue text, hover dark blue
            link.classList.add('text-cs-accent', 'hover:text-cs-primary');
            
            if (isContact) {
                // Contact link: Pink text (keyword), hover yellow, dark button background
                link.classList.remove('text-cs-accent');
                link.classList.add('text-cs-pink', 'hover:text-cs-yellow');
                link.classList.add('bg-gray-800', 'hover:bg-gray-700');
            }
        } else {
            // Restore original label and Eng color scheme
            link.textContent = label;
            link.classList.add('text-gray-600', 'hover:text-indigo-600');
            if (isContact) {
                    link.classList.add('bg-indigo-50', 'hover:bg-indigo-100');
            }
        }
    });

    // --- 3. Update the toggle button text and style ---
    toggleButton.textContent = `Theme: ${theme.toUpperCase()}`;
    if (theme === 'cs') {
        // New style: Border and text in light blue, dark semi-transparent background
        toggleButton.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300', 'bg-green-700/30', 'text-green-400', 'hover:bg-green-700/50', 'border', 'border-green-400/50');
        toggleButton.classList.add('bg-gray-800/50', 'text-cs-accent', 'hover:bg-gray-700/70', 'border', 'border-cs-gray');
    } else {
        toggleButton.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
        toggleButton.classList.remove('bg-gray-800/50', 'text-cs-accent', 'hover:bg-gray-700/70', 'border', 'border-cs-gray');
    }

    // --- 4. Save state ---
    localStorage.setItem(THEME_KEY, theme);
};

/**
 * Switches the theme state.
 */
const toggleTheme = () => {
    const newTheme = currentTheme === 'eng' ? 'cs' : 'eng';
    applyTheme(newTheme);
};

// --- Header Shrink Scroll Logic ---
const handleScroll = () => {
    // Check if the vertical scroll position is more than 50 pixels
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// --- Initialization on Load ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Build Navigation dynamically (so links are created for both menus)
    buildNavigation();
    
    // 2. Initialize Theme from localStorage
    const savedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    applyTheme(savedTheme);
    
    // 3. Attach Event Listeners
    toggleButton.addEventListener('click', toggleTheme);
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check (for page refresh on non-top position)
    handleScroll();
});

// Ensure mobile menu closes on resize from mobile to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 640) { // sm: breakpoint
        closeMobileMenu();
    }
});