$(document).ready(function() {
  var chosen = "";
  var word = "";
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
  });
  $("#autocomplete-input").change(function(){
       chosen = $("#autocomplete-input").val();
    
  });
 console.log(word.text(chosen));
  //chosen = $("#autocomplete-input").val()
  });