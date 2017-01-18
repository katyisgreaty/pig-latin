var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
var integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

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
    return false;
  } else {
    return startsWithQU(word);
  }
}

var startsWithVowel = function(word) {
  if (vowels.indexOf(word[0]) != -1) {
    return word + "ay";
  } else {
    return false;
  }
}

var startsWithCon = function(word) {
  if (vowels.indexOf(word[0]) === -1) {
    return word.slice(1, (word.length)) + word.slice(0,1) + "ay";
  } else {
    return startsWithVowel(word);
  }
}

var startsWithDoubCon = function(word) {
  if ((vowels.indexOf(word[0]) === -1) && (vowels.indexOf(word[1]) === -1))  {
    return word.slice(2, (word.length)) + word.slice(0,2) + "ay";
  } else {
    return startsWithCon(word);
  }
}

var startsWithQU = function(word) {
  if (word[0,1] === "q", "u") {
    return word.slice(2, (word.length)) + word.slice(0,2) + "ay";
  } else {
    return startsWithDoubCon(word);
  }
}

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
