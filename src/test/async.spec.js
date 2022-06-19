const fetchProduct = require('../async');

describe('Async Test', () => {
  it('[Success] fetch return product', async () => {
    await expect(fetchProduct(null)).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });
  it('[Failure] fetch return network error', async () => {
    await expect(fetchProduct('error')).rejects.toMatch('network error');
  });
});
