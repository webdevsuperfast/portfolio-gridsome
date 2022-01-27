module.exports = {
  content: [
    './src/**/*.{vue,js,md,html}',
    './src/components/*.vue',
    './src/layouts/*.vue',
    './src/pages/*.vue'
  ],
  theme: {
    extend: {
      backgroundImage: {
        body: 'url(../static/images/background.jpg)',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
      },
      fontSize: {
        '14xl': ['14rem', {
          lineHeight: '1'
        }],
        '16xl': ['16rem', {
          lineHeight: '1'
        }]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
