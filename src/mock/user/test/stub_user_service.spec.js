const UserService = require('../user_service');
const UserClient = require('./stub_user_client');

describe('User_Stub Test', () => {
  let userService = null;
  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('before login', () => {
    expect(userService.isLogedIn).toBe(false);
  });
  it('after login', async () => {
    await userService.login('minjman', '1234@!');
    expect(userService.isLogedIn).toBe(true);
  });
});
