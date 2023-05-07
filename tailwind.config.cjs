const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				dominant: '#ffffff',
				inverted: '#000000',
				accent: '#1FA391',
				muted: '#F5F5F7',
				'light-muted': 'rgba(0, 0, 0, 0.1)',
				error: '#d74c4c',
				okay: '#2DB00C'
			},
			textColor: {
				skin: {
					base: '#212427',
					inverted: '#efefef',
					muted: '#7A7A7C',
					error: '#d74c4c',
					okay: '#2DB00C'
				}
			},
			screens: {
				'-2xl': { max: '1535px' },
				'-xl': { max: '1279px' },
				'-lg': { max: '1023px' },
				'-md': { max: '767px' },
				'-sm': { max: '639px' },
				'@md': { min: '640px', max: '767px' },
				'@lg': { min: '768px', max: '1023px' },
				'@xl': { min: '1024px', max: '1279px' },
				'@2xl': { min: '1280px', max: '1535px' }
			},
			animation: {
				scale: 'scale 250ms cubic-bezier(0.64, 0.57, 0.67, 1.53)',
				fade: 'fade 700ms ease-in-out'
			},
			borderColor: {
				base: '#D8D8DA'
			}
		}
	},

	plugins: []
};

module.exports = config;
