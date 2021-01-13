const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "Fo14CusNtB453";

exports.createAccessToken = function (user) {
  const payload = {
    id: user._id,
    user: user.name,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    createToken: moment().unix(),
    exp: moment().add(3, "hours").unix(),
  };

  return jwt.encode(payload, SECRET_KEY);
};

exports.createRefreshToken = function (user) {
  const payload = {
    id: user.id,
    exp: moment().add(30, "days").unix(),
  };
  return jwt.encode(payload, SECRET_KEY);
};

exports.decodeToken = function (token) {
  return jwt.encode(token, SECRET_KEY, true);
};