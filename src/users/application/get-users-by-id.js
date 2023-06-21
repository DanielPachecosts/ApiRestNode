class GetById {
  constructor(UserRepository) {
    this.userRepository = UserRepository;
  }

  run(userId) {
    const user = this.userRepository.get(userId);
    return user;
  }
}

module.exports = GetById;
