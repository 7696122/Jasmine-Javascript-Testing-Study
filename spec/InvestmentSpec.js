describe("주식 투자는", () => {
  let stock, investment;

  beforeEach(() => {
    stock = new Stock();
    investment = new Investment({
      stock: stock,
      shares: 100,
      sharePrice: 20,
    });
  });

  describe("주가가 상승하면", () => {
    beforeEach(() => {
      stock.sharePrice = 40;
    });

    it("투자 수익률은 양(+)의 값을 가진다", () => {
      expect(investment.roi()).toEqual(1);
    });

    it("우량 투자다", () => {
      // should be a good investment
      // expect(investment.isGood()).toBeTruthy();

      // to be a good investment
      expect(investment).toBeAGoodInvestment();
    });
  });

  it("대상이 주식이어야 한다", () => {
    expect(investment.stock).toBe(stock);
  });

  it("매수 수량이 있어야 한다", () => {
    expect(investment.shares).toEqual(100);
  });

  it("매수 단가가 있어야 한다", () => {
    expect(investment.sharePrice).toEqual(20);
  });

  it("비용이 수반된다", () => {
    expect(investment.cost).toEqual(2000);
  });
});
