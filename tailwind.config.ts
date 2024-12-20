import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        small: 'small 24s infinite alternate',
        medium: 'medium 22s infinite alternate',
        big: 'big 25s infinite alternate',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        small: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(0, 25px) scale(1.1)' },
          '50%': { transform: 'translate(30px, 25px) scale(1.2)' },
          '75%': { transform: 'translate(20px, 0) scale(1.1)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        medium: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(25px, 0px) scale(1.1)' },
          '50%': { transform: 'translate(25px, 30px) scale(1.15)' },
          '75%': { transform: 'translate(0px, 20px) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        big: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(50px, 0px) scale(1.1)' },
          '50%': { transform: 'translate(0px, 50px) scale(1.3)' },
          '75%': { transform: 'translate(50px, 20px) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
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
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
