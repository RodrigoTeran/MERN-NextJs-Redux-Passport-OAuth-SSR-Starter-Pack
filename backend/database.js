// NPM modules
const mongoose = require("mongoose"); // MongoDb database

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false 
})
  .then(db => console.log("Database:", process.env.DATABASE))
  .catch(err => console.error(err));
