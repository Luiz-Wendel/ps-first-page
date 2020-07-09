const passport = require('passport');
const { Strategy } = require('passport-local');
const debug = require('debug')('app:local.strategy');
const bcrypt = require('bcrypt');

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

          if (user && bcrypt.compareSync(password, user.password)) {
            done(null, user);
          } else done(null, false);
        } catch (error) {
          debug(error);
        }
      }
    )
  );
};
