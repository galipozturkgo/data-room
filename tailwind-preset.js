const defaultTheme = require('tailwindcss/defaultTheme');

const color = (variableName) => `rgb(var(${variableName})  / <alpha-value>)`;

module.exports = {
  theme: {
    extend: {
      scrollbar: {
        width: 'thin',
      },
      fontSize: {
        '4xs': '0.5625rem',
        '3xs': '0.625rem',
        '2xs': '0.6875rem',
      },
      spacing: {
        3.5: '14px',
        4.5: '18px',
        5.5: '22px',
        6.5: '26px',
        7.5: '30px',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        skin: {
          base: color('--color-background-base'),
          primary: color('--color-background-primary'),
          muted: color('--color-background-muted'),

          white: color('--color-background-white'),
          black: color('--color-background-black'),
          accent: color('--color-background-accent'),
          red: color('--color-background-red'),
          green: color('--color-background-green'),
          blue: color('--color-background-blue'),
          orange: color('--color-background-orange'),
          yellow: color('--color-background-yellow'),
        },
      },
      textColor: {
        skin: {
          inverted: color('--color-text-inverted'),
          primary: color('--color-text-primary'),
          muted: color('--color-text-muted'),
          silent: color('--color-text-silent'),

          white: color('--color-text-white'),
          black: color('--color-text-black'),
          accent: color('--color-text-accent'),
          red: color('--color-text-red'),
          green: color('--color-text-green'),
          blue: color('--color-text-blue'),
          orange: color('--color-text-orange'),
          yellow: color('--color-text-yellow'),
        },
      },
      borderColor: {
        skin: {
          primary: color('--color-border-primary'),
          muted: color('--color-border-muted'),

          accent: color('--color-border-accent'),
          green: color('--color-border-green'),
          red: color('--color-border-red'),
          blue: color('--color-border-blue'),
          orange: color('--color-border-orange'),
          yellow: color('--color-border-yellow'),
        },
      },

      fill: {
        skin: {
          blue: color('--color-blue'),
          green: color('--color-green'),
          red: color('--color-red'),
          orange: color('--color-orange'),
          pink: color('--color-pink'),
          purple: color('--color-purple'),
          yellow: color('--color-yellow'),
          primary: color('--color-text-primary'),
          muted: color('--color-text-muted'),
        },
      },
      textDecorationColor: {
        skin: {
          accent: color('--color-accent'),
          silent: color('--color-text-silent'),
        },
      },
      outlineColor: {
        skin: {
          accent: color('--color-accent'),
          red: color('--color-red'),
        },
      },
      ringColor: {
        skin: {
          accent: color('--color-accent'),
        },
      },
      placeholderColor: {
        skin: {
          silent: color('--color-text-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          accent: color('--color-accent'),
          pink: color('--color-pink'),
          mauve: color('--color-mauve'),
        },
      },
      keyframes: {
        spinnerKeyframes: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        ringShrinkKeyframes: {
          '0%': { boxShadow: '0 0 0 6px rgb(var(--color-accent) / 0.2)' },
          '100%': { boxShadow: '0 0 0 3px rgb(var(--color-accent) / 0.6)' },
        },
      },
      animation: {
        spinner: 'spinnerKeyframes 2s linear infinite',
        'ring-shrink': 'ringShrinkKeyframes 0.2s ease-out forwards',
      },
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }) {
      const scrollbarStyles = {
        '@media (min-width: 640px)': {
          '.scrollbar-thin': {
            '::-webkit-scrollbar': {
              width: '8px',
              height: '10px',
            },
            '::-webkit-scrollbar-thumb': {
              background: 'rgb(var(--color-background-muted))',
              borderRadius: '4px',
            },
            '::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '::-webkit-scrollbar-corner': {
              background: 'transparent',
            },
          },
        },
      };

      addUtilities(scrollbarStyles, ['responsive', 'dark']);
    },
  ],
  darkMode: 'class',
};
