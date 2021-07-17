module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      providers: [],  // 提供者的配置
      secret: env('ADMIN_JWT_SECRET', '24507c5044061bf3bb8258934cce69d9'),
    },
  },
  url: env('','http://localhost:1337'),
});
