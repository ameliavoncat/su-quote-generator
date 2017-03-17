var QuoteGenerator = function(){
  this.quoteObject;
  this.quote;
  this.previousQuote;
}

QuoteGenerator.prototype.loadJSON = function (generator, path) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if(xhr.status == 200 && xhr.readyState == 4) {
      generator.quoteObject = JSON.parse(xhr.responseText)
    }
  }
  xhr.open("GET", path, true);
  xhr.send();
}

QuoteGenerator.prototype.generateQuote = function(){
  this.previousQuote = this.quote;
  while (this.previousQuote == this.quote) {
    this.quote = this.quoteObject.quotes[Math.floor(Math.random() * this.quoteObject.quotes.length)];
  }
}

QuoteGenerator.prototype.displayQuote = function(){
  document.getElementById("quote-body").innerHTML = this.quote.text;
  document.getElementById("quote-attribution").innerHTML = this.quote.character;
  document.getElementById("twitter-button").setAttribute("href", `https://twitter.com/intent/tweet?text=${this.quote.text}%20-${this.quote.character}`);
  document.getElementById("character-image").setAttribute("src", this.quoteObject.portraits[this.quote.character]);
  document.getElementById("quote-box").setAttribute("class", this.quote.character);
}
