/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: {
        'translate-1/2_-1/2': 'translate(50%, -50%)',  },
        width: {
          '90': '90%',
        }, fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      spacing: {
        some_key: {
          1.5: '20px', // valid value
        },
      },
      },
    },

  plugins: [],
}
