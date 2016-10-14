$(document).ready(function() {
  var chosen;
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
  });
  if($(".autocomplete").val() != null){

      alert($(".autocomplete").val());
  }
});