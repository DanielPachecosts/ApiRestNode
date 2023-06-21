class UpdateUser {
  constructor(UserRepository) {
    this.userRepository = UserRepository;
  }

  run(userId, changes) {
    const user = this.userRepository.update(userId, changes);
    return user;
  }
}

module.exports = UpdateUser;
