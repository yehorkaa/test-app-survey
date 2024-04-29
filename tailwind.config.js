const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			white: {
				500: '#eaeef7',
				400: '#e0e0e0',
				300: '#fbfbff',
			},
			purple: {
				400: '#6a3aa2',
			},
			pink: {
				500: '#F3CFC6',
			},
			black: {
				500: '#333',
			},
		},

	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(({ addComponents, theme, addUtilities }) => {
			addUtilities({
				'.screen-section-base': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					minHeight: '100vh',
					padding: '20px 0px',
				},
				'.header-base': {
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					justifyContent: 'space-between',
					padding: '0px 8px 3px 8px'
				},
				'.primary-hover-transition': {
					transition: 'all 300 ease-in-out',
				},
				'.bolted-h': {
					fontWeight: '700',
					fontSize: '24px',
					lineHeight: '117%',
					color: theme('colors.black.500')
				},
				'.bolted-p': {
					fontWeight: '700',
					fontSize: '18px',
					lineHeight: '156%',
					color: theme('colors.black.500')
				}
			})
		}),
	],
}
