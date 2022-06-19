const check = require('../check');

describe('check', () => {
  const mockPredicateTrue = jest.fn(() => true);
  const mockPredicateFalse = jest.fn(() => false);
  const mockOnSuccess = jest.fn((el) => el);
  const mockOnFail = jest.fn((el) => el);

  it('Yes', () => {
    expect(check(mockPredicateTrue, mockOnSuccess, mockOnFail)).toBe('yes');
  });
  it('No', () => {
    expect(check(mockPredicateFalse, mockOnSuccess, mockOnFail)).toBe('no');
  });
});
