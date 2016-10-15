$(document).ready(function() {
  var chosen;
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
  });
  var inter = setInterval(function(){
    chosen = chosen + 1;//$("#autocomplete-input").val();
    console.log(chosen);

  },1000);
  //chosen = $("#autocomplete-input").val()
  });