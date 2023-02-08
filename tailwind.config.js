/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        onlycids: '#f3b04e',
        'skin-bg': 'var(--bg-color)',
        'skin-text': 'var(--text-color)',
        'skin-link': 'var(--link-color)',
        'skin-heading': 'var(--heading-color)',
        'skin-border': 'var(--border-color)',
        'skin-header-bg': 'var(--header-bg)',
        'skin-shadow': 'var(--shadow-color)'
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}
