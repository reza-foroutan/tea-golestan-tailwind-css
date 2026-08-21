/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // اگر از Laravel استفاده می‌کنی:
    // "./resources/**/*.{php,blade.php,js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {},
  },

  // پلاگین‌های مفید
  plugins: [],

  // تنظیمات Dark Mode
  darkMode: 'class', // یا 'media'

  // بهینه‌سازی محتوا (اختیاری اما توصیه می‌شود)
  corePlugins: {
    preflight: true,
  },
};
