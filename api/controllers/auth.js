const User = require("../models/User");

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
    res.status(200).json({
      message: "Logged in successfully!",
    });
  });
};
