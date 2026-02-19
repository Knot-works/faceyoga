/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d4a3c',
        secondary: '#8b7355',
        accent: {
          DEFAULT: '#c4a77d',
          warm: '#d4a574',
        },
        background: '#faf8f5',
        surface: {
          DEFAULT: '#ffffff',
          warm: '#f5f1eb',
        },
        text: {
          DEFAULT: '#3d3530',
          muted: '#6b6057',
          light: '#9a8f83',
        },
        border: {
          DEFAULT: '#e8e2d9',
          light: '#f0ebe3',
        },
      },
      fontFamily: {
        heading: ['Zen Old Mincho', 'serif'],
        body: ['Noto Sans JP', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(93, 74, 60, 0.08)',
        medium: '0 8px 30px rgba(93, 74, 60, 0.12)',
        large: '0 16px 50px rgba(93, 74, 60, 0.15)',
      },
      borderRadius: {
        organic: '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
