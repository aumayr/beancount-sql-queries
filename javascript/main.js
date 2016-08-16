var baseURL = "http://fava.pythonanywhere.com/example-3/query/?bql=";

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};


var codeBlocks = document.getElementsByClassName("highlight");

forEach(codeBlocks, function (index, codeBlock) {
    console.log(index, encodeURI(codeBlock.textContent)); // passes index + value back!
    var createA = document.createElement('a');
    var createAText = document.createTextNode("Run in bean-query in fava");
    createA.setAttribute('href', baseURL + encodeURI(codeBlock.textContent));
    createA.appendChild(createAText);
    codeBlock.appendChild(createA);
});
