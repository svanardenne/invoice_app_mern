const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new mongoose.Schema(
  {
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
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Pre-Save Password Hashing
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Methods
userSchema.methods.authenticate = function (password) {
  return bcrypt.compareSync(password, this.password, (err, result) => {
    if (err || !result) {
      return false;
    } else {
      return true;
    }
  });
};

module.exports = mongoose.model("User", userSchema);
