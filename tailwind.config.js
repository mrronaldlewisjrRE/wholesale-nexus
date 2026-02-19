/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                investor: {
                    dark: '#0f172a',
                    light: '#f1f5f9',
                    accent: '#0ea5e9',
                }
            },
            borderRadius: {
                '3xl': '1.5rem',
            },
        },
    },
    plugins: [],
}
