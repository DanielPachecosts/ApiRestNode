class AuthController {
  constructor(LoginUser) {
    this.loginUser = LoginUser;
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const { access_token, user } = await this.loginUser.run(email, password);
      res.status(200).json({ message: "Login OK", user, access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
