/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        body: '#000000',
        titles: "#A67D15",
        texts: "#FFFFFF",
        


        
        
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

