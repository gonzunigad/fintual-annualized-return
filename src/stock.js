class Stock {
    constructor(ticker, values = []) {
        this.values = values;
    }
    price(date) {
        return typeof this.values[date] !== 'undefined' ? this.values[date] : 0;
    }
}

module.exports = Stock;
