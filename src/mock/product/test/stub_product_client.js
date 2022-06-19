//* Mock이 아닌, Stub을 이용한 방식으로 테스트 하기 위함
//* Stub : 실제 함수의 인터페이스를 모두 충족시키면서 실제를 대체할 수 있는 가짜
class StubProductClient {
  async fetchItems() {
    return [
      { item: 'milk', available: true },
      { item: 'banana', available: false },
    ];
  }
}

module.exports = StubProductClient;
