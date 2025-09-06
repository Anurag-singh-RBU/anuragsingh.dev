const withTM = require('next-transpile-modules')(['react-tweet']);

module.exports = withTM({
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "pbs.twimg.com", // Twitter Profile Picture
      "api.microlink.io", // Microlink Image Preview
      "avatars.githubusercontent.com", // GitHub avatars
    ],
  },
  async redirects() {
    return [
      {
        source: "/boxshadows",
        destination: "https://ui.aceternity.com/tools/box-shadows",
        permanent: true,
      },
    ];
  },
});
