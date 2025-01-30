/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
    	extend: {
    		colors: {
    			green: {
    				'50': '#30AF5B',
    				'90': '#292C27'
    			},
    			gray: {
    				'10': '#EEEEEE',
    				'20': '#A2A2A2',
    				'30': '#7B7B7B',
    				'50': '#585858',
    				'90': '#141414'
    			},
    			orange: {
    				'50': '#FF814C'
    			},
    			blue: {
    				'70': '#021639'
    			},
    			yellow: {
    				'50': '#FEC601'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		backgroundImage: {
				'bg-img-1': "url('/img-1.png')",
				'bg-img-2': "url('/img-2.png')",
				'feature-bg': "url('/feature-bg.png')",
				pattern: "url('/pattern.png')",
				'pattern-2': "url('/pattern-bg.png')",
    		},
    		screens: {
    			xs: '400px',
    			'3xl': '1680px',
    			'4xl': '2200px'
    		},
    		maxWidth: {
    			'10xl': '1512px'
    		},
    		borderRadius: {
    			'5xl': '40px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
  };