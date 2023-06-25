class AuthFacebook {
  constructor(UserRepository, TokenService) {
    this.userRepository = UserRepository;
    this.tokenService = TokenService;
  }

  run(profile) {
    const user = this.userRepository.facebookFindOrCreate(profile);

    const payload = {
      sub: user._id,
      role: "USER",
    };

    const access_token = this.tokenService.signToken(payload);
    return access_token;
  }
}

module.exports = AuthFacebook;
