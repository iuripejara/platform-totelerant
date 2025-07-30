// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public', // O diretório onde os arquivos PWA serão gerados
  disable: process.env.NODE_ENV === 'development', // Desabilita PWA no ambiente de desenvolvimento para facilitar o debug
  register: true, // Registra o service worker automaticamente
  skipWaiting: true, // Pula a espera pela ativação do service worker
  // Outras opções de configuração do next-pwa aqui, se necessário
  // Por exemplo, runtimeCaching para estratégias de cache:
  // runtimeCaching: require('next-pwa/cache'),
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ... outras configurações do Next.js aqui
};

module.exports = withPWA(nextConfig);