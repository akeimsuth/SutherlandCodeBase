$(document).ready(function() {
  var chosen = "";
 
  $("#item").change(function(){
      chosen = $('#item').val();
      console.log(chosen);
  });

 /* $('#shop').click(function(){
    alert(chosen);
  });*/
  $('.modal-trigger').leanModal({
      starting_top: '10%', // Starting top style attribute
      ending_top: '20%'
  });
});