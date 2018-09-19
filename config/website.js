const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Michael Marlow - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Michael Marlow', // Alternative Site title for SEO
  siteUrl: 'https://portfolio-cara.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Personal website for Denver based developer Michael Marlow',

  userTwitter: '@notmarlow', // Twitter Username

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
