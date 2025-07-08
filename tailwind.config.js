/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Motion Labs brand colors
        'motion-blue': {
          DEFAULT: 'hsl(var(--motion-blue))',
          dark: 'hsl(var(--motion-blue-dark))',
          light: 'hsl(var(--motion-blue-light))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'physics-float': 'float 6s ease-in-out infinite',
        'physics-orbit': 'orbit 20s linear infinite',
        'physics-pulse': 'pulse-glow 3s ease-in-out infinite',
        'physics-drift': 'drift 12s ease-in-out infinite',
        'motion-spin': 'motion-spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(180deg)',
          },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(100px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: 0.4,
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(33, 95, 246, 0.4)',
          },
          '50%': {
            opacity: 0.8,
            transform: 'scale(1.1)',
            boxShadow: '0 0 20px 5px rgba(33, 95, 246, 0.2)',
          },
        },
        drift: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(10px, -10px) rotate(90deg)',
          },
          '50%': {
            transform: 'translate(-5px, -20px) rotate(180deg)',
          },
          '75%': {
            transform: 'translate(-10px, -5px) rotate(270deg)',
          },
        },
        'motion-spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
