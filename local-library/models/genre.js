var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema(
  {
    name: {type: String, required: true, minLength: 3, maxLength: 100},
  }
);

// Virtual for genre's URL
genreSchema
.virtual('url')
.get(function () {
  return this._id;
});

//Export model
module.exports = mongoose.model('Genre', genreSchema);