$(document).ready(function() {
  var chosen;
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
  chosen = $("#autocomplete-input").val();
  alert(chosen.text())
  });
 ;
});