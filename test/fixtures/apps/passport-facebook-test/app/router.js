'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportFacebook.name;
  });

  app.passport.mount('facebook');
};
