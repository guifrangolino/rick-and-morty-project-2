/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'entrance-center': {
          from: { opacity: 0, transform: 'scale(0.9)' },
          to: { opacity: 1, transform: 'scale(1)' }
        },
        'entrance-left': {
          from: { opacity: 0, transform: 'translateX(-75px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'entrance-center': 'entrance-center 0.5s ease 0s',
        'entrance-left': 'entrance-left 0.5s ease 0s',
      },
      fontFamily: {
        sans: 'var(--font-poppins)',
        handwrite: 'var(--font-shadow-into-light)',
      },
      aspectRatio: {
        'info-note': '0.76',
        'char-note': '0.9',
        'info-note-short': '1.3',
      },
      screens: {
        'md-lg': '884px',
      },
      minHeight: {
        'homeHeight': ['calc(100vh - 74px)', 'calc(100dvh - 74px)', 'calc(100svh - 74px)'],
      },
      gridTemplateColumns: {
        'lg-screen': 'repeat(auto-fit, minmax(240px, 1fr))',
        'mobile': 'repeat(2, minmax(150px, 1fr))'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}