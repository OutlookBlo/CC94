
const firebaseConfig = {
    apiKey: "AIzaSyAHhRY3GaU5u8fHEqvsv7_cQync7vGXOoY",
    authDomain: "kwitter-53829.firebaseapp.com",
    databaseURL: "https://kwitter-53829-default-rtdb.firebaseio.com",
    projectId: "kwitter-53829",
    storageBucket: "kwitter-53829.appspot.com",
    messagingSenderId: "660527006991",
    appId: "1:660527006991:web:6424f630d5477d15f96a7a",
    measurementId: "G-7WBCEMS6MX"
  };
 firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
}