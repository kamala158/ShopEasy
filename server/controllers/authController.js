exports.register = (req, res) => {
  res.json({
    message: "User Registered Successfully"
  });
};

exports.login = (req, res) => {
  res.json({
    message: "User Logged In Successfully"
  });
};