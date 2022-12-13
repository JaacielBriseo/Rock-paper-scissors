/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow Semi Condensed'],
			},
			backgroundImage: {
				Triangle: 'url(assets/bg-triangle.svg)',
				Rules: 'url(assets/image-rules.svg)',
			},
			colors: {
				DarkText: 'hsl(229, 25%, 31%)',
				ScoreText: 'hsl(229, 64%, 46%)',
				HeaderOutline: 'hsl(217, 16%, 45%)',
				PaperRing: 'hsl(230, 89%, 62%)',
				ScissorRing: 'hsl(39, 89%, 49%)',
				RockRing: 'hsl(349, 71%, 52%)',
			},
		},
	},
	plugins: [],
};
