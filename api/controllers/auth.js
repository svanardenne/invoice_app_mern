const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    user.hashed_password = undefined;
    res.json({
      user,
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Wrong email or password.",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Wrong email or password.",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { _id, name, email } = user;
    return res
      .cookie("token", token, { expire: new Date() + 9999 })
      .status(200)
      .json({
        message: "Logged in successfully!",
        token,
        user: { _id, name, email },
      });
  });
};
