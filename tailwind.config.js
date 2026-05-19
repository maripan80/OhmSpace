/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0a0e17',
          800: '#0f1628',
          700: '#151d35',
        },
        neon: {
          cyan: '#00f0ff',
          magenta: '#ff00aa',
          green: '#39ff14',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 12px rgba(0, 240, 255, 0.45), 0 0 24px rgba(0, 240, 255, 0.15)',
        'neon-magenta': '0 0 12px rgba(255, 0, 170, 0.45)',
        'neon-green': '0 0 12px rgba(57, 255, 20, 0.35)',
      },
    },
  },
  plugins: [],
}
