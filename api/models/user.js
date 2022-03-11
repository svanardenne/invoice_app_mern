const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: 32,
  },
  hashed_password: {
    type: String,
    required: true,
  },
});

// Virtual Field
userSchema.virtual("password").set((password) => {
  this.hashed_password = this.encryptPassword(password);
});

// Methods
userSchema.methods = {
  authenticate: (password) => {
    return this.encryptPassword(password) === this.hashed_password;
  },
  encryptPassword: (password) => {
    if (!password) return "";
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        return hash;
      });
    });
  },
};

module.exports = mongoose.model("User", UserSchema);
