import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        small: 'small 24s infinite alternate',
        medium: 'medium 22s infinite alternate',
        big: 'big 25s infinite alternate',
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
      },
    },
  },
  plugins: []
} satisfies Config;
