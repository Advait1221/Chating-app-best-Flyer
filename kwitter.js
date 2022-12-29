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

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

