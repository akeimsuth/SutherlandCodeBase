$(document).ready(function() {
   var chosen = "";
   var words = "";
   // Set the configuration for your app
  // TODO: Replace with your project's config object
   var config = {
    apiKey: "AIzaSyBoR59zzr2puuphhOJHh6elhg61d8InGnU",
    authDomain: "api-project-121750468263.firebaseapp.com",
    databaseURL: "https://api-project-121750468263.firebaseio.com",
    storageBucket: "api-project-121750468263.appspot.com",
    messagingSenderId: "121750468263"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  words = database.ref("Items");
  database.ref("Items/flour/price").on("value",function(snapshot){
      console.log(snapshot.val());
      words = snapshot.val();
  },function(err){
    console.log("Failed "+ err.code);
  });
  
 
 
  $("#item").change(function(){
      chosen = $('#item').val();
      console.log(chosen);
  });

  $('#shop').click(function(){
    $('p').text("Flour is "+words);
  });
  $('.modal-trigger').leanModal({
      starting_top: '10%', // Starting top style attribute
      ending_top: '20%'
  });
});