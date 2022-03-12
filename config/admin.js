module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2f7e48b9cf8d6c11728e8597232935e0'),
  },
});
