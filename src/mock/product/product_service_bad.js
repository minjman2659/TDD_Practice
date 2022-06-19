const ProductClient = require('./product_client');

//* 나쁜버전 => 다른 클래스에 의존하는 클래스라 단위 테스트하기가 어려워짐
//* => jest의 mock을 잘 활용해야 한다!
//* 현재 버전은 클래스 안에서 또다른 클래스를 호출하기 때문에 나쁜 버전
class ProductServiceBad {
  constructor() {
    this.ProductClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.ProductClient.fetchItems().then((items) =>
      items.filter((item) => item.available)
    );
  }
}

module.exports = ProductServiceBad;
