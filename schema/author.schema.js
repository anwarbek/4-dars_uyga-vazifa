const { Schema, model } = require("mongoose")

const Author = new Schema({
  full_name: {
    type: String,
    allowNull: false
  },
  date_of_birth: {
    type: String,
    allowNull: false
  },
  date_of_death: {
    type: String,
    allowNull: true,
    default: null
  },
  period: {
    type: String,
    allowNull: false
  },
  creativity: {
    type: String,
    allowNull: false
  },
  boi: {
    type: String,
    allowNull: false
  },
  photo: {
    type: String,
    allowNull: false
  }
}, {
  versionKey: false,
  timestamps: true
})

const AuthorSchema = model("Author", Author)
module.exports = AuthorSchema