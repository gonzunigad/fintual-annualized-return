const DAYS_IN_YEAR = 365;
class Portfolio {

    constructor(stocks = []) {
        this.stocks = stocks;
    }

    addStock(stock) {
        this.stocks.push(stock);
    }

    profit(from, to) {
        return this.stocks.reduce((carry, stock) => {
            const differenceInPrice = stock.price(to) - stock.price(from);
            return carry + differenceInPrice;
        }, 0);
    }

    annualizedReturn(from, to) {
        // source: https://www.investopedia.com/terms/a/annualized-total-return.asp
        const durationOfInvestmentInDays = this.diffInDays(from, to);
        const fromMoney = this.stocks.reduce((carry, stock) => carry + stock.price(from), 0);
        const toMoney = this.stocks.reduce((carry, stock) => carry + stock.price(to), 0);
        const cumulativeReturn = (toMoney - fromMoney) / fromMoney;

        // Annualized return: (1 + cummulative_return) to the power of (365/days_held) minus 1
        return (Math.pow(1 + cumulativeReturn, DAYS_IN_YEAR / durationOfInvestmentInDays) - 1) * 100;
    }

    diffInDays(from, to) {
        // 😬 gimme sauce:  https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
        const date1 = new Date(from);
        const date2 = new Date(to);
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
}

module.exports = Portfolio;
