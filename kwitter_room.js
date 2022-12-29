const firebaseConfig = {
  apiKey: "AIzaSyDu4ERGw80VnXGHwWGpURn-yAlYOT6nK-4",
  authDomain: "flyer-fd375.firebaseapp.com",
  databaseURL: "https://flyer-fd375-default-rtdb.firebaseio.com",
  projectId: "flyer-fd375",
  storageBucket: "flyer-fd375.appspot.com",
  messagingSenderId: "899162046294",
  appId: "1:899162046294:web:d86cd061f573a97d7060f7",
  measurementId: "G-Z2F1G8NEZM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
