// Bring Mongoose into the app
const mongoose = require('mongoose');
// Building the connection string
const devDbUrl = 'mongodb://admin:admin123@ds117829.mlab.com:17829/meeopp';
const mongoDB = process.env.MONGODB_URI || devDbUrl;
// Created the database connection
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
db.on('connected', () => {
  console.log(`Mongoose default connection open to ${devDbUrl}`);
});

// If any error occured in database connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
