import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        nunito: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize : {
        Headline1 : "60px" ,
        Headline2 : "46px" ,
        Headline3 : "32px" ,
        Headline4 : "24px" ,
        Body1 : "16px" ,
        Body2 : "14px" ,
        Body3 : "12px" ,
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
        red: {
          100 : '#FFE1EA',
          200 : '#FFB1C8',
          300 : '#FF6390',
          400 : '#FF1659',
          500 : '#C70039',
          600 : '#95002B',
          700 : '#64001D',
          800 : '#32000E',
          900 : '#200009'
        },
        purple: {
          100 : '#F4EBF2',
          200 : '#EFC4E2',
          300 : '#DF89C6',
          400 : '#CF4FA9',
          500 : '#A62D82',
          600 : '#7D2262',
          700 : '#531741',
          800 : '#411032',
          900 : '#2A0B21'
        },
        beige: {
          100 : '#FAF1ED',
          200 : '#F3E4DD',
          300 : '#E8CABB',
          400 : '#DCAF99',
          500 : '#D19477',
          600 : '#B8653E',
          700 : '#7B4429',
          800 : '#612F16',
          900 : '#3D2215'
        },
        gray: {
          100 : '#F6F7FC',
          200 : '#F1F2F6',
          300 : '#E4E6ED',
          400 : '#D6D9E4',
          500 : '#C8CCDB',
          600 : '#9AA1B9',
          700 : '#646D89',
          800 : '#424C6B',
          900 : '#2A2E3F'
        },
        yellow: {
          100 : '#FFF6D4',
          500 : '#393735',
        },
        green: {
          100 : '#E7FFE7',
          500 : '#197418',
        },
        utils: {
          white : '#FFFFFF',
          black : '#000000',
          red : '#AF2758',
          BG : '#160404',
          main : '#FCFCFE',
          linear : 'linear-gradient(to right, #742138, #A878BF)',
        }

      },
      backgroundImage: {
        'linear': 'linear-gradient(to right, #742138, #A878BF)',
        'linear0': 'linear-gradient(to bottom, #07094100, #390741)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config