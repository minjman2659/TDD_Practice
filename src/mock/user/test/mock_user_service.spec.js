const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../user_client');

//* UserService 클래스(8번째 줄)처럼 로그인 상태 여부에 따라 userClient.login 메소드를 호출했는지 안했는지 행동에 대한 테스트는
//* Mock 함수를 만들어 테스트를 진행해야 한다!
//* => toHaveBeenCalledTimes와 같은 jest 메소드는 mock 함수만 테스트 가능하기 때문!
describe('User_Mock Test', () => {
  const login = jest.fn(async (id, password) => {
    return { id, email: 'test@gmail.com', name: 'kim' };
  });
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

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
    //* mock 함수만 가능한 테스트
    expect(login).toHaveBeenCalledTimes(1);
  });
  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('minjman', '1234@!');
    await userService.login('minjman', '1234@!');
    expect(login).toHaveBeenCalledTimes(1);
  });
});
