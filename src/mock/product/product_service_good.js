const ProductClient = require('./product_client');

//* 클래스간의 의존성을 낮추고, 외부에서 주입 해주는 방식으로 좋은 버전!
class ProductServiceGood {
  constructor(productClient) {
    this.ProductClient = productClient;
  }

  fetchAvailableItems() {
    return this.ProductClient.fetchItems().then((items) =>
      items.filter((item) => item.available)
    );
  }
}

module.exports = ProductServiceGood;
