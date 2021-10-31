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
user_name = localStorage.getItem("input_username");
document.getElementById("name").innerHTML = "Welcome "+user_name + "!";
function add_room(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "Adding Room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "game_page.html";
}

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -" + Room_names);
   row = "<div class='room_name' id=" + Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML = row;
   //End code
   });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "game_page.html";
}