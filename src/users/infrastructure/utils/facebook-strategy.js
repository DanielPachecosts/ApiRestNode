const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const config = require("../../../config");

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookClientSecret,
      callbackURL: config.facebookCallback,
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);
