// Passport Modules
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// User model
const { User } = require("../models/index");

// Important IDs
const keys = require("../config/index.js");

// Strategies Methods
passport.serializeUser((user, cb) => {
	cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
	User.findById(id).then((user) => {
		cb(null, user);
	});
});

// Facebook Strategy
passport.use(new FacebookStrategy({
	clientID: keys.FACEBOOK.clientID,
	clientSecret: keys.FACEBOOK.clientSecret,
	callbackURL: "/auth/facebook/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				new User({
					providerId: profile.id,
					providerName: "Facebook",
					username: "Rodrigo"

				}).save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));

// Google Strategy
passport.use(new GoogleStrategy({
	clientID: keys.GOOGLE.clientID,
	clientSecret: keys.GOOGLE.clientSecret,
	callbackURL: "/auth/google/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				const user = new User({
					providerId: profile.id,
					providerName: "Google",
					username: profile.displayName,
					email: profile._json.email
				});
				user.profileImg.push({
					imgId: profile._json.picture
				});
				user.save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));
