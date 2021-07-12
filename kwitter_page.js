var firebaseConfig = {
  apiKey: "AIzaSyBnZSoE_yokDvBKoIv60b8E9n2GZZiOXMM",
  authDomain: "lets-web-chat-app.firebaseapp.com",
  databaseURL: "https://lets-web-chat-app-default-rtdb.firebaseio.com",
  projectId: "lets-web-chat-app",
  storageBucket: "lets-web-chat-app.appspot.com",
  messagingSenderId: "437390431468",
  appId: "1:437390431468:web:c8596095e74c2ebae241c9"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  console.log(user_name);
  document.getElementById("user_name").innerHTML = "Welcome : " + user_name + "!";

  function addroom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "add user"});
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_room.html";
  }