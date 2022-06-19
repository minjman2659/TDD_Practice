class StubUserClient {
  async login(id, password) {
    return {
      id,
      email: 'test@gmail.com',
      name: 'kim',
    };
  }
}

module.exports = StubUserClient;
