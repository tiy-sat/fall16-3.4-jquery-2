// Main JS

$(function(){
  // All code relating to the DOM
  var $body = $("body");

  // By using the method `find()` we are saving some memory (faster in browser)
  var $textarea = $body.find("[data-js='postForm__text']");
  var $submitButton = $body.find("[data-js='postForm__submit']");

  $submitButton.on("click", function(e){
    // Inside of here... we know the submit button has been clicked
    // Take the textarea value
    // Create a new article with the value from the text area
    // Prepend new article template to list of articles
  });

});
