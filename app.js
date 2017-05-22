'use strict';

const debug = require('debug')('egg-passport-facebook');
const assert = require('assert');
const Strategy = require('passport-facebook').Strategy;

module.exports = app => {
  const config = app.config.passportFacebook;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-facebook] config.passportFacebook.key required');
  assert(config.secret, '[egg-passport-facebook] config.passportFacebook.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;
  config.callbackURL = config.callbackURL;
  config.profileFields = config.profileFields || [
    'id', 'displayName', 'photos', 'email', 'birthday', 
    'first_name', 'last_name', 'gender',
  ]

  // must require `req` params
  app.passport.use('facebook', new Strategy(config, (req, token, tokenSecret, params, profile, done) => {
    // format user
    const user = {
      provider: 'facebook',
      id: profile.id,
      email: profile.email,
      name: profile.displayName,
      displayName: profile.displayName,
      photo: profile.photos && profile.photos[0] && profile.photos[0].value,
      token,
      tokenSecret,
      params,
      profile,
    };
    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
