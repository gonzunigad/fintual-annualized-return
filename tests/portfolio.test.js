const Portfolio = require('../src/portfolio');
const Stock = require('../src/stock');
test('it can calculates profit', () => {
    const portfolio = new Portfolio;
    const from = '2020/11/29';
    const to = '2021/11/29';
    portfolio.addStock(new Stock('AAPL', {[from]: 10, [to]: 100}))
    expect(portfolio.profit(from, to)).toBe(90);
});

test('it can calculates annualized return', () => {
    const portfolio = new Portfolio;
    const from = '2020/11/29';
    const to = '2022/06/26';
    portfolio.addStock(new Stock('AAPL', {[from]: 100, [to]: 123.74}))

    //As this example, 23.74% if 575 days would be 14.5 annualized return.
    // https://www.investopedia.com/terms/a/annualized-total-return.asp
    expect(parseFloat(portfolio.annualizedReturn(from, to).toFixed(1))).toBe(14.5);
});
