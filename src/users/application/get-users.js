class GetAllUsers {
  constructor(UserRepository) {
    this.userRepository = UserRepository;
  }

  run() {
    return this.userRepository.getAll();
  }
}

module.exports = GetAllUsers;
