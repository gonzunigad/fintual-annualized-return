# Fintual Task 

👋 Este proyecto busca resolver el siguiente desafío:

    Build a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 dates and returns the profit of the Portfolio between those dates. Assume each Stock has a "Price" method that receives a date and returns its price.
    Bonus Track: make the Profit method return the "annualized return" of the portfolio between the given dates.

El archivo interesante está en `src/portfolio.js`;

Hay un método `profit(from, to)` que devuelve las ganancias entre dos fechas.

También hay un método `annualizedReturn(from, to)` que devuelve el retorno anualizado según [esta definición](https://www.investopedia.com/terms/a/annualized-total-return.asp). 


Si quieren probar: 
```bash
npm install
npm test
```
