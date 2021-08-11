const userRoutes = require('./user.routes');
const invitationRoutes = require('./invitation.routes');
const authRoutes = require('./auth.routes');

const routes = (server) => {
  server.use('/user', userRoutes);
  server.use('/invitation', invitationRoutes);
  server.use('/auth', authRoutes);
};

module.exports = routes;
