const userService = require("../service/user.service");

module.exports.register = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    const userData = await userService.userRegistrationService(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

module.exports.login = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

module.exports.logout = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

module.exports.activate = async (req, res, next) => {
  try {
    const activationLink = req.params.link;
    await userService.activate(activationLink);
    return res.redirect(process.env.CLIENT_URL)
  } catch (e) {
    next(e);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    res.json(["123", "456"]);
  } catch (e) {
    next(e);
  }
};
