class GetById {
  constructor(UserRepository) {
    this.userRepository = UserRepository;
  }

  run(userId) {
    const user = this.userRepository.getById(userId);
    return user;
  }
}

module.exports = GetById;
