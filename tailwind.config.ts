import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8792B',
          'orange-dark': '#D16820',
          green: '#1B7340',
          'green-dark': '#145C32',
        },
      },
    },
  },
  plugins: [],
};

export default config;
