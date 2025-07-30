const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
});

const nextConfig = {
  experimental: {
    serverActions: true
  }
};

module.exports = withPWA(nextConfig);
