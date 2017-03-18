window.onload = function(){
  var quoteGenerator = new QuoteGenerator('./browser/data/quotes.json')

  document.querySelector("button.quote-button").addEventListener('click', function(){
    quoteGenerator.generateQuote();
    quoteGenerator.displayQuote();
  });
}
