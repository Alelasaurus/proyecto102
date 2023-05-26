// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
    apiKey: "AIzaSyA_vD3SHlhQupPLb3Zaz3Kb226enfZiL8Y",
    authDomain: "comida2-92d1f.firebaseapp.com",
    databaseURL: "https://comida2-92d1f-default-rtdb.firebaseio.com",
    projectId: "comida2-92d1f",
    storageBucket: "comida2-92d1f.appspot.com",
    messagingSenderId: "294495586205",
    appId: "1:294495586205:web:586382b42a7975c9419174"
  };
  
  
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



