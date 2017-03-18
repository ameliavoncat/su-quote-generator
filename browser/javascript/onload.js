window.onload = function(){
  var quoteGenerator = new QuoteGenerator()
  QuoteGenerator.loadJSONForInstance(quoteGenerator, './browser/data/quotes.json')

  document.querySelector("button.quote-button").addEventListener('click', function(){
    quoteGenerator.generateQuote();
    quoteGenerator.displayQuote();
  });
}
