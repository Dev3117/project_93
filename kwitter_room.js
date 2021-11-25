const firebaseConfig = {
    apiKey: "AIzaSyCy_QN69la-ddJFxIWI1lUP79blMLtEdVQ",
    authDomain: "project-44-248df.firebaseapp.com",
    databaseURL: "https://project-44-248df-default-rtdb.firebaseio.com",
    projectId: "project-44-248df",
    storageBucket: "project-44-248df.appspot.com",
    messagingSenderId: "539357454762",
    appId: "1:539357454762:web:6c12ad91d673f543d94bd3",
    measurementId: "G-EVD9P1P4NP"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
