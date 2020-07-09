const passport = require('passport');
const { Strategy } = require('passport-local');
const debug = require('debug')('app:local.strategy');

const { User } = require('../../models');

module.exports = () => {
  passport.use(
    new Strategy(
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      async (username, password, done) => {
        // User validation
        try {
          const user = await User.findOne({
            where: {
              username,
            },
          });

          if (!user || user.password !== password) done(null, false);
          else done(null, user);
        } catch (error) {
          debug(error);
        }
      }
    )
  );
};
