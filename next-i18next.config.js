const path = require('path')
module.exports = {
  i18n: {
    locales: ['fa'],
    defaultLocale: 'fa',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
}
