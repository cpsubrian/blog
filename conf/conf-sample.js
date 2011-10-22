/**
 * Application Configuration.
 */
module.exports = {
  port: 3001,
  hostname: 'localhost:3001',
  title: "Blog",
  session: {
    secret: 'your session secret'
  },
  cluster: {
    workers: 1
  }
};
