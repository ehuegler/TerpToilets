import passport from 'passport'
import LocalStrategy from 'passport-local'
import { findUserByUsername, validatePassword } from './db'
import CasStrategy from 'passport-cas2';

passport.serializeUser(function (user, done) {
  // serialize the username into session
  done(null, user.username)
})

passport.deserializeUser(function (req, id, done) {
  // deserialize the username back into user object
  const user = findUserByUsername(req, id)
  done(null, user)
})

passport.use(
  new CasStrategy(
    { casURL: 'https://shib.idm.umd.edu/shibboleth-idp/profile/cas/' },
    (req, username, profile, done) => {
      // Here you lookup the user in your DB and compare the password/hashed password
      done(null, {})
    }
  )
)

export default passport
