class AuthController {
  constructor(LoginUser, AuthFacebook) {
    this.loginUser = LoginUser;
    this.authFacebook = AuthFacebook;
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const access_token = await this.loginUser.run(email, password);
      res.status(200).json({ message: "Login OK", access_token });
    } catch (error) {
      next(error);
    }
  }

  async facebookLogin(req, res, next) {
    try {
      const profile = req.user;
      const access_token = await this.authFacebook.run(profile);
      res.status(200).json({ message: "Login Facebook OK", access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
