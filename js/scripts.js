var pigLatin = function(word) {
  if (isNaN(word)) {
    alert("word yes");




  } else {
    return(word);
  }
};


//User Interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){

    event.preventDefault();
    var word = parseInt($("input#word").val());
    var result = pigLatin(word);
    $(".word").text(word);
      $("#result").show();
  });
});
