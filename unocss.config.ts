import { defineConfig } from '@unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  rules: [
    [
      'bg-frontend',
      { background: 'linear-gradient(91.79deg, #7698F0 8.66%, #37D0BE 51.52%)' }
    ],
    [
      'bg-python',
      {
        background:
          'linear-gradient(96.28deg, #508DD6 0%, #7AABC5 27.96%, #C5D89D 61.32%, #D2CD44 94.18%)'
      }
    ],
    [
      'bg-swift',
      {
        background: 'linear-gradient(101.42deg, #E68E27 0%, #D29F1A 93.03%)'
      }
    ]
  ],
  theme: {
    colors: {
      base: '#F5F2ED'
    }
  },
  preflights: [
    {
      getCSS: () => `
      html {
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
      }
      `
    },
    {
      getCSS: ({ theme }) => `
      body {
        background-color: ${
          (theme.colors?.base as string | undefined) ?? '#F5F2ED'
        };
        margin: 0;
        padding: 0;
      }
      `
    },
    {
      getCSS: () => `
      * {
        font-family: 'Inter', sans-serif;
      }
      `
    },
    {
      getCSS: () => `
      a {
        text-decoration: none;
      }
      `
    }
  ]
})
