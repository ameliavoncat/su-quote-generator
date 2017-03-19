var QuoteGenerator = function(path){
  this.quoteObject;
  this.quote;
  this.previousQuote;
  QuoteGenerator.loadJSONForInstance(this, path);
}

QuoteGenerator.loadJSONForInstance = function (instance, path) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(xhr.status == 200 && xhr.readyState == 4) {
      instance.quoteObject = JSON.parse(xhr.responseText)
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
  document.querySelector("h4.quote-box__body__content").innerHTML = this.quote.text;
  document.querySelector("h3.quote-box__body__attribution").innerHTML = this.quote.character;
  document.querySelector("img.quote-box__image").setAttribute("src", this.quoteObject.portraits[this.quote.character]);
  document.querySelector("div.quote-box").setAttribute("class", `quote-box quote-box--${this.quote.character}`);
}
