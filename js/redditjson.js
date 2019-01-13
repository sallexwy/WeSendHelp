var url = 'https://www.reddit.com/r/uwaterloo/new/.json?limit=10'

var products;
var clean_products;
var test = [];



// use fetch to retrieve it, and report any errors that occur in the fetch operation
// once the products have been successfully loaded and formatted as a JSON object
// using response.json(), run the initialize() function
fetch(url).then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  clean_products = products.data.children;
  for (let i=0;i<clean_products.length; i++) {  
    var obj = {
        user: clean_products[i].data.author,
        title: clean_products[i].data.title,
        text: clean_products[i].data.selftext,
        url: clean_products[i].data.url,
        id: i
    };

    test[i] = obj;
}}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});



