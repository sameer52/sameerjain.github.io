tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system',
                       'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"',
                       'Arial', '"Noto Sans"', 'sans-serif'],
                mono: ['ui-monospace', '"Liberation Mono"', '"Courier New"',
                       'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
            colors: {
                'cs-bg': '#1e1e1e',
                'cs-primary': '#569cd6',
                'cs-accent': '#9cdcfe',
                'cs-green': '#609955',
                'cs-pink': '#da70cb',
                'cs-yellow': '#f1d70b',
                'cs-gray': '#738080',
                'cs-orange': '#ce9178',
            },
        },
    },
};
