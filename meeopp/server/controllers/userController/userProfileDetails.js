/* eslint-disable func-names */
const User = require('../../models/userModel');
const util = require('../../common/utils');
// Function to save user details in user table
exports.saveUserProfileDetails = function(req, res) {
  util.validateRequiredKeys(req.body, [{ key: 'email', name: 'Email' }], res, error => {
    if (!error) {
      const user = new User({
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        company: req.body.company,
        department: req.body.department,
        position: req.body.position,
        email: req.body.email.toLowerCase(),
      });
      // Create and save new user in user table
      user.save(err => {
        if (err) {
          res.statusCode = 400;
          res.send({ err, status: 400, message: 'Error in setting user details' });
          return;
        }
        res.json({
          status: 200,
          // eslint-disable-next-line no-underscore-dangle
          message: `User with id ${user._id} created successfully`,
          user,
        });
        res.end();
      });
    }
  });
};

// Function to get all userDetails if exists ( from user table)
exports.getUserProfileDetails = function(req, res) {
  console.log(req.body.id);
  util.validateRequiredKeys(req.body, [{ key: 'id', name: 'Id' }], res, error => {
    if (!error) {
      console.log('req.body', req.body.id);
      const userFindQuery = User.findOne({
        _id: req.body.id,
      });
      userFindQuery.exec((err, user) => {
        if (user) {
          res.json({
            status: 200,
            user,
          });
          res.end();
        } else {
          console.log(err, 'err');
          res.statusCode = 400;
          res.json({
            status: 404,
            message: 'User does not exists',
          });
          res.end();
        }
      });
    }
  });
};
