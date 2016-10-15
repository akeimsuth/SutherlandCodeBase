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
       chosen = documentGetElementById('autocomplete-input').value 
       //$("#autocomplete-input").val();
    
  });
 console.log(chosen);
  //chosen = $("#autocomplete-input").val()
  });