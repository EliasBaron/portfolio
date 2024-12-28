import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))',
      },
    },
  },
  plugins: [tailwindcssAnimated],
};