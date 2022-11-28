/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'project-one-bg': "url('./assets/backgrounds/project-one-bg.jpg')",
        'project-two-bg': "url('./assets/backgrounds/bg2.jpeg')",
        'project-three-bg': "url('./assets/backgrounds/project-one-bg.jpg')",
        'project-four-bg': "url('./assets/backgrounds/project-one-bg.jpg')",
        'project-five-bg': "url('./assets/backgrounds/project-one-bg.jpg')",
      }
    },
  },
  plugins: [],
}
