/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/tailwind-datepicker-react/dist/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                cyan: {
                    50: '#F2FCF8',
                    100: '#DEF7EC',
                    200: '#BCF0DA',
                    300: '#9BE4C5',
                    400: '#79d2b0',
                },
                green: '#CCDEC0',
                yellow: '#FCC984',
                blue: '#B2F4FC',
                red: {
                    DEFAULT: '#F6AB95',
                    600: '#e39680',
                },
                gray: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#EAEBEE',
                    300: '#d8d8e0',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#1F2937',
                },
            },
            height: {
                '18': '4.5rem',
            },
            maxWidth: {
                'sm': '20rem',
                'xs': '12rem',
                'xxs': '8rem',
                'screen-3xl': '1680px',
            },
            flexGrow: {
                9999: '9999',
            },
            transitionTimingFunction: {
                'fill-expo': 'cubic-bezier(.93,.41,.53,.87)',
            },
            transitionProperty: {
                'width': 'width',
                'stroke-dashoffset': 'stroke-dashoffset',
                'selection': 'box-shadow, color, border-color'
            },
            screens: {
                '1.5xl': '1450px'
            }
        },
    },
    plugins: [require('flowbite/plugin')],
}

