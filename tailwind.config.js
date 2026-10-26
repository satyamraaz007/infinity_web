/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                navy: 'var(--navy)',
                blue: 'var(--blue)',
                gold: 'var(--gold)',
                red: 'var(--red)',
                paper: 'var(--paper)',
                muted: 'var(--muted)',
            },
        },
    },
    plugins: [],
};
