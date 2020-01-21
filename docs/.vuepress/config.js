module.exports = {
  title: 'Shoppre Community Forum',
  description: 'Shoppre Community Forum',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
  },
  dest: 'public',
  plugins: [
    'social-share',
    {
      'sitemap': {
        hostname: 'https://explore.shopprecouriers.com/'
      },
    }
  ],
};
