module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'image.tmdb.org'],
    deviceSizes: [375, 768, 1080, 1200, 1920],
  },
  // M: This envs just works in Server Side. To access this envs in Client Side, you need declare in the next.config.js
  env: {
    API_KEY: process.env.API_KEY,
  },
};
