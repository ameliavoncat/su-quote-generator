window.onload = function(){
  var quoteGenerator = new QuoteGenerator()

  quoteGenerator.loadJSON(quoteGenerator, './browser/data/quotes.json')

  document.getElementById('quote-button').addEventListener('click', function(){
    quoteGenerator.generateQuote();
    quoteGenerator.displayQuote();
  });
}
