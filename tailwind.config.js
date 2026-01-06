/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          pink: '#ff007f',
          blue: '#00ffff',
          purple: '#8000ff',
          green: '#00ff00',
          orange: '#ff8000'
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', '"Orbitron"', 'monospace', 'system-ui'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px theme(colors.retro.pink), 0 0 20px theme(colors.retro.pink), 0 0 35px theme(colors.retro.pink)' },
          '100%': { 'box-shadow': '0 0 20px theme(colors.retro.pink), 0 0 35px theme(colors.retro.pink), 0 0 50px theme(colors.retro.pink)' },
        }
      }
    },
  },
  plugins: [],
}