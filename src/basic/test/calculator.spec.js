const Calculator = require('../calculator');

//* describe는 테스트를 그룹으로 묶고 싶을 때 사용!
describe('calculator test', () => {
  let calculator = null;
  beforeAll(() => {
    calculator = new Calculator();
  });
  beforeEach(() => {
    calculator.clear();
  });

  it('init with 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('set', () => {
    calculator.set(2);
    expect(calculator.value).toBe(2);
  });

  it('clear', () => {
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  describe('add', () => {
    it('[Success] add', () => {
      calculator.add(5);
      expect(calculator.value).toBe(5);
    });
    it('[Failure] add', () => {
      expect(() => calculator.add(101)).toThrow(
        'Value can not be greater than 100'
      );
    });
  });

  it('subtract', () => {
    calculator.subtract(2);
    expect(calculator.value).toBe(-2);
  });

  it('multiply', () => {
    calculator.multiply(2);
    expect(calculator.value).toBe(0);
  });

  describe('divide', () => {
    it('0 / 0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });
    it('0 / 1 === 0', () => {
      calculator.divide(1);
      expect(calculator.value).toBe(0);
    });
    it('1 / 1 === 1', () => {
      calculator.set(1);
      calculator.divide(1);
      expect(calculator.value).toBe(1);
    });
  });
});
