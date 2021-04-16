const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Joyas Lulú',
    siteDescription: 'Los pequeños detalles guardan grandes recuerdos!',
    siteKeywords: 'joyas, regalos, anillo, aretes, cadena, pulsera, collar, oro, plata',
    siteUrl: 'https://joyaslulu10.vercel.app/',
    siteImagePreviewUrl: '/images/main.jpg',
    twitterHandle: '@AliMoralesMo1'
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
})
