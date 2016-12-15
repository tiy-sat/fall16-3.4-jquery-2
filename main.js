// Main JS

$(function(){
  var stompyRobotURL = "http://img.cinemablend.com/cb/8/e/7/e/3/5/8e7e35cf9777f94ab1f5e51bcdec49214e4ffb2c33f4c575ba4bbb5ff425271c.jpg";
  // All code relating to the DOM
  var $body = $("body");

  // By using the method `find()` we are saving some memory (faster in browser)
  var $textarea = $body.find("[data-js='postForm__text']");
  var $submitButton = $body.find("[data-js='postForm__submit']");
  var $postsElement = $body.find("[data-js='posts']");

  $submitButton.on("click", function(e){
    // Inside of here... we know the submit button has been clicked
    // Prevent the default behavior of the form
    e.preventDefault();
    // Take the textarea value
    // http://api.jquery.com/val/
    var textAreaValue = $textarea.val();
    // Create a new article with the value from the text area

    // THE OLD WAY
    // var imageHTML = `
    //   <article>
    //     img src="${varToSrc}" class="post__profilePhoto" alt="stompyRobot">
    //     <a> Stompy Robot </a>
    //     <p> ${valueFromTextArea} </p>
    //   </article>
    // `;
    // refToElement.innerHTML += imageHTML;

    // http://api.jquery.com/attr/#attr2
    var $imgElement = $("<img>")
      .attr({
        alt: "stompy robot",
        class: "post__profilePhoto",
        src: stompyRobotURL
      })
    ;

    var $anchorElement = $("<a>")
      .attr({
        href: "#",
        class: "post__link"
      })
      .text("Stompy Robot");

    var $paragraphElement = $("<p>")
      .text(textAreaValue)
    ;

    var $articleHTML = $("<article>")
      .append($imgElement)
      .append($anchorElement)
      .append($paragraphElement)
    ;

    // Prepend new article template to list of articles
    $postsElement.prepend($articleHTML)
  });

});
