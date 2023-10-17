import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      backgroundColor: {
        'electric-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #075DED 100%)',
      },
      textColor: {
        'electric-orange': '#FF6700',
      },
      
      fontFamily: {
        
        Rubik: ['Rubik, sans-serif']
        
      },
      colors: {
        'primary': "#075DED",
        'primary-1': '#206DEF',
        "primary-2100": "#2C2F34",
        "primary-2101":'#56585C',
        "success": "#52c41a",
        "warning": "#FAAD14",
        "error": "#FF4D4F",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        
        // 'bg-image': "url('assets/images/home/bgworks.png')",
        // 'bg-image': "url('assets/images/home/new-bg-border.png')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
export default config
