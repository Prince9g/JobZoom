/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  options: {
    safelist: ['hover:scale-125', 'transform', 'duration-500'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

