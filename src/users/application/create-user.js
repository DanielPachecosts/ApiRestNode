class CreateUser {
  constructor(UserRepository, HashingService) {
    this.userRepository = UserRepository;
    this.hashsingService = HashingService;
  }

  async run(payload) {
    const hashPassword = await this.hashsingService.hashPassword(
      payload.password
    );
    const payloadWithHashPassword = { ...payload, password: hashPassword };

    const user = this.userRepository.create(payloadWithHashPassword);
    return user;
  }
}

module.exports = CreateUser;
