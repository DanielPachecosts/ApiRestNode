class LoginUser {
  constructor(UserRepository, TokenService, HashingService) {
    this.userRepository = UserRepository;
    this.tokenService = TokenService;
    this.hashingService = HashingService;
  }

  async run(email, password) {
    const user = await this.userRepository.getByEmail(email);
    await this.hashingService.comparePassword(password, user.password);

    const payload = {
      sub: user._id,
      role: "USER",
    };
    const { name } = user;

    const access_token = this.tokenService.signToken(payload);
    return { access_token, user: { name, email } };
  }
}

module.exports = LoginUser;
