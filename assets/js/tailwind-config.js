tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                // Standard Inter for Eng theme (using 'sans' fallback)
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
                // Monospace for CS theme
                mono: ['ui-monospace', '"Liberation Mono"', '"Courier New"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
            colors: {
                // Custom VSCode-like colors for the CS Theme
                'cs-bg': '#1e1e1e', // Very dark background
                'cs-primary': '#569cd6', // Dark Blue (Keywords/main elements)
                'cs-accent': '#9cdcfe', // Light Blue (Name/general text)
                'cs-green': '#609955', // Success/Variables
                'cs-pink': '#da70cb', // Special Keywords
                'cs-yellow': '#f1d70b', // Constants
                'cs-gray': '#738080', // Muted text/borders
                'cs-orange': '#ce9178', // Strings/Literals
            },
        },
    },
}