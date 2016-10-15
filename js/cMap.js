$(document).ready(function() {
  var chosen = "";
 
  $("#item").change(function(){
      chosen = $('#item').val();
      console.log(chosen);
  });


  });