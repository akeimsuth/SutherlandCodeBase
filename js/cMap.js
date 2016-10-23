$(document).ready(function() {
   var chosen = "";
   var data;
   var key;
   var store =  new Object();
  //configuration for firebase app
   var config = {
    apiKey: "AIzaSyBoR59zzr2puuphhOJHh6elhg61d8InGnU",
    authDomain: "api-project-121750468263.firebaseapp.com",
    databaseURL: "https://api-project-121750468263.firebaseio.com",
    storageBucket: "api-project-121750468263.appspot.com",
    messagingSenderId: "121750468263"
  };
  //initializes app configuration
  firebase.initializeApp(config);

  // Get a reference to the database service
   var database = firebase.database();
   //check if user enters input
  $('#item').change(function(){
    chosen = $('#item').val();
    console.log(chosen);
  });
  //loop through database and gets info based on what is entered by user
  var choice = function(){
    data = database.ref("/stores");
    data.on("value",function(snapshot){
      console.log(snapshot.val());
      snapshot.forEach(function(keys){
        if(chosen in keys.val()){
           keys.forEach(function(value){
            if(chosen == value.key){
              //console.log(value.val().brand);
              //console.log(keys.key+" has "+value.key+" for "+value.val().price+" it's also a "+value.val().brand+" product");
              store.key = keys.key;
              store.item = value.key;
              store.price = value.val().price;
              store.brand = value.val().brand;
              
              //$('.info').clone().appendTo('.duplicate');
            }

           });
        $.each(store,function(){
            $("p").text(store.key+" has "+store.item+" for "+store.price+" it's also a "+store.brand+" product");
        });
        }else{
          console.log("Not Found!");
        }
      });
    },function(err){ //error message if unable to access data
        console.log("Failed "+ err.code)
      });
  }
  
  //when button is clicked shows info based on text that inputted.
  $('#shop').click(function(){
     choice();

     
  });
  //shows info on the text entered input field
  $('.modal-trigger').leanModal({
      starting_top: '10%', // Starting top style attribute
      ending_top: '20%'
  });
});
//Use a foreach loop to get info for multiple occurrences of the text entered.