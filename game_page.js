var firebaseConfig = {
    apiKey: "AIzaSyCJ_EK6_Jyw9yDLnayPnu_uKUyuW-IMNUE",
    authDomain: "classtest-f3c1e.firebaseapp.com",
    databaseURL: "https://classtest-f3c1e-default-rtdb.firebaseio.com",
    projectId: "classtest-f3c1e",
    storageBucket: "classtest-f3c1e.appspot.com",
    messagingSenderId: "833910509797",
    appId: "1:833910509797:web:c3e55e1939a68f9254040c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  room_name = localStorage.getItem("room_name");
  username = localStorage.getItem("input_username");
  function send(){
msg = document.getElementById("message").value;
firebase.database().ref(room_name).push({
    name : username,
    message : msg,
    like : 0
});
document.getElementById("message").value;
}
  function getData() { firebase.database().ref("/"+ room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name']
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name + "</h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id=" + firebase_message_id+"value="+like+"onclick= 'updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes: "+ like +"</span></button>"; 
  row = name_with_tag + message_with_tag +like_button + span_with_tag;
  document.getElementById("output").innerHTML+= row;
 } });  }); }
getData();

function updateLike(message_id) 
{ console.log("clicked on like button - " + message_id); 
button_id = message_id; 
likes = document.getElementById(button_id).value; 
updated_likes = Number(likes) + 1; 
console.log(updated_likes); 
firebase.database().ref(room_name).child(message_id).update({ 
      like : updated_likes 
}); 
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}