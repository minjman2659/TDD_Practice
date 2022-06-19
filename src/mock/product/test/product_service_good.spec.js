const ProductServiceGood = require('../product_service_good');
const StubProductClient = require('./stub_product_client');

describe('ProductServiceGood_Stub Test', () => {
  let productService = null;
  let items = null;
  beforeEach(async () => {
    productService = new ProductServiceGood(new StubProductClient());
    items = await productService.fetchAvailableItems();
  });

  it('should filter out only available item', async () => {
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'milk', available: true }]);
  });
});
