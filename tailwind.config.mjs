/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */

export default {
  daisyui: {
    themes: [
      {
        techslate: {
          primary: '#0077B6',
          secondary: '#228176',
          accent: '#9381FF',
          neutral: '#3D5A80',
          'base-100': '#293241',
          info: '#40d7f6',
          success: '#00cd87',
          warning: '#FFBF00',
          error: '#EA481F'
        }
      }
    ]
  },
  theme: {
    fontFamily: {
      sans: [
        'Roboto Flex',
        'Roboto',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    extend: {
      screens: {
        max_2xl: { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        max_xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        max_lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        max_md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        max_sm: { max: '639px' }
        // => @media (max-width: 639px) { ... }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  safelist: [
    'btn-xs',
    'btn-sm',
    'btn-lg',
    'btn-primary',
    'btn-secondary',
    'btn-accent',
    'btn-neutral',
    'btn-info',
    'btn-success',
    'btn-warning',
    'btn-error',
    'btn-ghost',
    'btn-link',
    'btn-outline',
    'btn-square',
    'btn-wide',
    'btn-block',
    'btn-active'
  ]
};
