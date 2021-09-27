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

  describe("주가가 하락하면", () => {
    beforeEach(() => {
      stock.sharePrice = 0;
    });

    it("불량 투자다", () => {
      expect(investment).not.toBeAGoodInvestment();
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

describe("toEqual 테스트", () => {
  it("동등한 숫자다", function () {
    expect(1).toEqual(1);
  });
  it("동등한 문자열이다", function () {
    expect("testing").toEqual("testing");
  });
  it("동등한 객체이다", function () {
    expect({ a: "testing" }).toEqual({ a: "testing" });
  });
  it("동등한 배열이다", function () {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
});

describe("toBe 테스트", () => {
  it("동등한 숫자다", function () {
    expect(1).toBe(1);
  });
  it("동등한 문자열이다", function () {
    expect("테스팅").toBe("테스팅");
  });
  it("동등한 불린값이다", function () {
    expect(true).toBe(true);
  });
  it("동등한 객체다", function () {
    const obj = { a: "testing" };
    expect(obj).toBe(obj);
  });
  it("등등한 배열이다", function () {
    const arr = [1, 2, 3];
    expect(arr).toBe(arr);
  });
  it("등등한 객체가 아니다", function () {
    const obj = { a: "testing" };
    expect(obj).not.toBe({ a: "testing" });
  });
  it("동등한 배열이 아니다", function () {
    expect([1, 2, 3]).not.toBe([1, 2, 3]);
  });
});

describe("toBeFalsy테스트", () => {
  it("undefined는 falsy다", function () {
    expect(undefined).toBeFalsy();
  });
  it("null은 falsy다", function () {
    expect(null).toBeFalsy();
  });
  it("NaN은 falsy다", function () {
    expect(NaN).toBeFalsy();
  });
  it("false는 falsy다", function () {
    expect(false).toBeFalsy();
  });
  it("should be 0 is falsy", function () {
    expect(false).toBeFalsy();
  });
  it("should be empty string is falsy", function () {
    expect("").toBeFalsy();
  });
});

// 그러나 정확한 불린값으로 비교하고자 한다면 toEqual 매처를 사용하는 것이 바람직하다
describe("Test truthy", () => {
  it("should be true is truthy", function () {
    expect(true).toBeTruthy();
  });
  it("0이 아닌 숫자는 truthy다", function () {
    expect(1).toBeTruthy();
  });
  it("should be non-empty string is truthy", function () {
    expect("a").toBeTruthy();
  });
  it("should be array and object is truthy", function () {
    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
  });
});

describe("Test toBeNull", () => {
  it("should be null is null", function () {
    expect(null).toBeNull();
  });
});

describe("Test toBeUndefined", function () {
  it("should be undefined is undefined", function () {
    expect(undefined).toBeUndefined(undefined);
  });
});

describe("Test toBeNaN", function () {
  it("should be NaN is NaN", function () {
    expect(NaN).toBeNaN();
  });
});

describe("toMatch 테스트", () => {
  it("문자열이 정규식에 매칭된다", function () {
    expect("My big matched string").toMatch(/My(.+)string/);
  });
});
