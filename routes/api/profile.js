const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load validation
const validateProfileInput = require('../../validation/profile');
// const validateExperienceInput = require('../../validation/experience');

// load profile model
const Profile = require('../../models/Profile');
// load user profile
const User = require('../../models/User');

// @route - GET api/profile/test
// @desc - tests profile route
// @access - public
router.get('/test', (req, res) => res.json({msg: "profile works"}));

// @route - GET api/profile
// @desc - get current users profile
// @access - private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const errors = {};

    Profile.find({ createdBy: req.user.id })
      .populate('createdBy', ['name', 'email'])
      .then(profile => {
        if(!profile[0]) {
          errors.noprofile = 'This user has not created any profiles';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route - GET api/profile/all
// @desc - get all profiles
// @access - public
router.get('/all', (req, res) => {
  const errors = {};

  Profile.find()
  .populate('createdBy', ['name'])
  .then(profiles => {
    if(!profiles) {
      errors.noprofiles = 'there are no profiles';
      return res.status(404).json(errors);
    }

    res.json(profiles);
  })
  .catch(err =>
    res.status(404).json({ profiles: 'there are no profiles'}));
})

// @route - GET api/profile/id/:id
// @desc - get profile by id
// @access - public
router.get('/id/:id', (req, res) => {
  const errors = {};

  Profile.findOne({ _id: req.params.id })
    .populate('createdBy', ['name'])
    .then(profile => {
      if(!profile) {
        errors.noprofile = 'profile does not exist';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
      .catch(err => res.status(404).json(err));
});

// @route - GET api/profile/user/:user_id
// @desc - get profiles by user id
// @access - public
router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Profile.find({ createdBy: req.params.user_id })
    .populate('createdBy', ['name'])
    .then(profile => {
      if(!profile) {
        errors.noprofile = `profile doesn't exist`;
        res.status(404).json(errors);
      }

      res.json(profile);
    })
      .catch(err => res.status(404).json({ profile: 'there are no profiles created by this user' }));
});

// @route - GET api/profile/search/:name
// @desc - get profiles by name
// @access - public
router.get('/search/:name', (req, res) => {
  console.log("SEARCH");
  const errors = {};

  Profile.find({ name: req.params.name })
    .populate('createdBy', ['name'])
    .then(profile => {
      if(!profile) {
        errors.noprofile = `profile doesn't exist`;
        res.status(404).json(errors);
      }

      res.json(profile);
    })
      .catch(err => res.status(404).json({ profile: 'there are no profiles with this name' }));
});


// @route - POST api/profile
// @desc - create or edit tribute profile
// @access - private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  // check validation
  if (!isValid) {
    // return errors with 400 status
    return res.status(400).json(errors);
  }

  // get fields
  const profileFields = {};
  profileFields.createdBy = req.user.id;
  if (req.body.name) profileFields.name = req.body.name;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.DOB) profileFields.DOB = req.body.DOB;
  if (req.body.img) profileFields.img = req.body.img;
  // // skills - split into array
  // if(typeof req.body.skills !== 'undefined') {
  //   profileFields.skills = req.body.skills.split(',');
  // }
  // social
  profileFields.social = {};
  if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

  Profile.findOne({ createdBy: req.user.id, _id: req.body.id })
    .then(profile => {
      if(profile) {
        // UPDATE PROFILE
        Profile.findOneAndUpdate(

          { createdBy: req.user.id, _id: req.body.id },
          { $set: profileFields },
          { new: true }
        )
        .then(profile => res.json(profile));
      } else {
        // CREATE PROFILE

        // check to see if handle exists
        // Profile.findOne({ handle: profileFields.handle }).then(profile => {
        //   if(profile) {
        //     errors.handle = 'that handle already exists';
        //     res.status(400).json(errors);
        //   }
          // save profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        // })
      }
    });
  }
);

// DOESNT WORK, I THINK I NEED EXPERIENCE SET IN MODEL
// @route POST api/profile/experience
// // @desc - add experience to profile
// // @access - private
// router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { errors, isValid } = validateExperienceInput(req.body);

//   // check validation
//   if (!isValid) {
//     // return errors with 400 status
//     return res.status(400).json(errors);
//   }

//   Profile.findOne({ createdBy: req.user.id, _id: req.body._id })
//     .then(profile => {
//       res.json(profile);
//     })
//   .then(profile => {
//     const newExp = {
//       title: req.body.title,
//       company: req.body.company,
//       from: req.body.from,
//       to: req.body.to,
//       current: req.body.current,
//       description: req.body.description
//     }

//     // add to experience array
//     profile.experience = newExp;

//     profile.save().then(profile => res.json(profile));
//   })
// });

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.deleteMany({ createdBy: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);



module.exports = router;