const Stack = require('../stack');

describe('Stack Test', () => {
  let stack = null;
  beforeEach(() => {
    stack = new Stack(2);
  });

  it('1st Stack size is 0 and head is null', () => {
    expect(stack.head).toBe(null);
    expect(stack.size).toBe(0);
  });
  describe('Push test', () => {
    it('[Success] Push method increase stack size', () => {
      stack.push('test1');
      expect(stack.head).toEqual({
        index: 0,
        value: 'test1',
        beforeNode: null,
      });
      expect(stack.size).toBe(1);
      stack.push('test2');
      expect(stack.head.beforeNode).toEqual({
        index: 0,
        value: 'test1',
        beforeNode: null,
      });
      expect(stack.size).toBe(2);
    });
    it('[Failure] Push method throw "Stack is Full!" error', () => {
      stack.push('test1');
      stack.push('test2');
      expect(stack.size).toBe(2);
      expect(() => stack.push('test3')).toThrow('Stack is Full!');
    });
  });
  describe('Pop test', () => {
    it('[Success] Pop method decrease stack size and return deletedValue', () => {
      stack.push('test1');
      stack.push('test2');
      expect(stack.size).toBe(2);
      const deletedValue = stack.pop();
      expect(deletedValue).toBe('test2');
      expect(stack.head).toEqual({
        index: 0,
        value: 'test1',
        beforeNode: null,
      });
      expect(stack.size).toBe(1);
    });
    it('[Failure] Pop method throw "Stack is Empty!" error', () => {
      expect(() => stack.pop()).toThrow('Stack is Empty!');
    });
  });
  describe('Find test', () => {
    it('[Success] Find method return value of index param (1)', () => {
      stack.push('test1');
      stack.push('test2');
      expect(stack.size).toBe(2);
      expect(stack.find(0)).toBe('test1');
    });
    it('[Success] Find method return value of index param (2)', () => {
      stack.push('test1');
      stack.push('test2');
      expect(stack.size).toBe(2);
      expect(stack.find(1)).toBe('test2');
    });
    it('[Failure] Find method throw "Stack is Empty!" error', () => {
      expect(() => stack.find(1)).toThrow('Stack is Empty!');
    });
    it('[Failure] Find method throw "Index is Over the Size of Stack!" error', () => {
      stack.push('test1');
      stack.push('test2');
      expect(stack.size).toBe(2);
      expect(() => stack.find(100)).toThrow('Index is Over the Size of Stack!');
    });
    it('[Failure] Find method throw "Index must Over the Zero!" error', () => {
      stack.push('test1');
      stack.push('test2');
      expect(stack.size).toBe(2);
      expect(() => stack.find(-1)).toThrow('Index must Over the Zero!');
    });
  });
});
