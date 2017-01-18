var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
var integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var pigLatin = function(word) {

  var splitWords = word.toString().split("");
  var number = false;

  splitWords.forEach(function(element) {
    var intquery = integers.indexOf(element);
    // console.log(intquery);
    if (intquery != -1) {
      // console.log(word);
      number = true;
    }
  })

  if (number) {
    return word + " is not a word";
  }

  return word + "ay";


  // var vowel = false;
  // splitWords.forEach(function(element) {
  //   var vowquery = vowels.indexOf(element);
  //   if (vowquery != -1) {
  //     vowel = true;
  //   }
  // })
  //
  // if(vowel)
};


//User Interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){

    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);

    $(".word").text(result);
      $("#result").show();
  });
});
