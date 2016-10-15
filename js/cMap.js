$(document).ready(function() {
  var chosen;
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
  });
  console.log($("#autocomplete-input").val());
});