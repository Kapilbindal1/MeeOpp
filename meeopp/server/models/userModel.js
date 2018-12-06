const mongoose = require('mongoose');

const { Schema } = mongoose;

// user schema fields
const UserSchema = new Schema({
  firstname: { type: String, max: 100 }, // stores user firstname
  lastname: { type: String, max: 100 }, // stores user lastname
  company: { type: String, max: 100 },
  department: { type: String, max: 100 },
  position: { type: String, max: 100 },
  email: { type: String, required: true }, // stores user email
});

// Export the model and  we need to create a model using it
module.exports = mongoose.model('User', UserSchema);
