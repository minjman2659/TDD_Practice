const ProductServiceBad = require('../product_service_bad');
const ProductClient = require('../product_client');

//* ProductClient 클래스를 mock 함수로 변환
jest.mock('../product_client');

describe('ProductServiceBad Test', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'milk', available: true },
    { item: 'banana', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService = null;
  let items = null;
  beforeEach(async () => {
    productService = new ProductServiceBad();
    items = await productService.fetchAvailableItems();
  });

  it('should filter out only available item', async () => {
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'milk', available: true }]);
  });
  it('fetchItems method called once', () => {
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
