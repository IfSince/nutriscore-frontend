/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/tailwind-datepicker-react/dist/**/*.js',
        './node_modules/flowbite/**/*.js',
        './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
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
//                    200: '#BCF0DA',
                    200: '#9BE4C5',
                    300: '#7dccaa',
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
                error: {
                    DEFAULT: '#e54747',
                    800: '#991B1BFF',
                },
                success: {
                    DEFAULT: '#BBF7D0FF',
                    800: '#166534FF',
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
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3rem',
                '6xl': '3.5rem',
            },
            transitionTimingFunction: {
                'fill-expo': 'cubic-bezier(.93,.41,.53,.87)',
            },
            transitionProperty: {
                'width': 'width',
                'stroke-dashoffset': 'stroke-dashoffset',
                'selection': 'box-shadow, color, border-color',
            },
            screens: {
                'xs': '500px',
                '1.5xl': '1450px',
            },
            zIndex: {
                '9000': '9000',
                '9999': '9999',
            },
            keyframes: {
                'fadeout': {
                    '0%': { opacity: 100 },
                    '100%': { opacity: 0 },
                },
            },
            animation: {
                'fade-out': 'fadeout 0.75s cubic-bezier(0.4, 0, 0.6, 1) 1s forwards'
            }
        },
    },
    plugins: [
        require('flowbite/plugin'),
        plugin(function ({ addVariant }) {
            addVariant('group-form-loading', ':merge(.form-group).loading &') // custom CSS
            addVariant('group-form-enabled', ':merge(.form-group):not(.loading) &')
        }),
    ],
}

