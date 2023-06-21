class DeleteUser {
  constructor(UserRepository) {
    this.userRepository = UserRepository;
  }

  run(userId) {
    return this.userRepository.delete(userId);
  }
}

module.exports = DeleteUser;
