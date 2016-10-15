$(document).ready(function() {
  var chosen;
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
  });
  $("#autocomplete-input").change(function(){
       chosen = $("#autocomplete-input").text();
    
  });
 console.log(chosen);
  //chosen = $("#autocomplete-input").val()
  });