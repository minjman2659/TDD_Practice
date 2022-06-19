const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);
    //* onSuccess 목함수가 최소 한번은 호출 되었는지 여부 테스트
    expect(onSuccess).toHaveBeenCalledTimes(1);
    //* onSuccess 목함수에 첫번째로 호출된 첫번째 인자는 'yes'이다 여부 테스트
    expect(onSuccess).toHaveBeenCalledWith('yes');
    //* onFail 목함수는 호출되지 말아야 한다.
    expect(onFail).toHaveBeenCalledTimes(0);
  });
  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
