var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
var integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var firstLetter = function(splitWords) {
  var first = splitWords[0];
  for(var i = 0; i < vowels.length; i += 1){
    if (vowels[i] === first) {
      return true;
    }
  }
}


var test = firstLetter(["b", "a", "b"]);
console.log(test);

var pigLatin = function(word) {

  var splitWords = word.toString().split("");
  var number = false;

  splitWords.forEach(function(element) {
    var intquery = integers.indexOf(element);
    if (intquery != -1) {
      number = true;
    }
  });

  if (number) {
    return word + " is not a word";
  }

  return word + "ay";
}

  //
  // var vowel = false;


  //
  // for(var i = 0; i < 1; i++) {
  //   var vowquery = vowels.indexOf(i=0);
  //   if (vowquery != -1) {
  //     vowel = true;
  //   }
  // })

var consonantMove = function(splitWords) {
  splitWords.push(splitWords[0]);
  splitWords.splice(0,1)
  var newWord = splitWords.join("");
  return newWord;
}

//   if(vowel)
// };
//

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
