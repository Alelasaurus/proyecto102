//TUS ENLACES DE FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyA_vD3SHlhQupPLb3Zaz3Kb226enfZiL8Y",
    authDomain: "comida2-92d1f.firebaseapp.com",
    databaseURL: "https://comida2-92d1f-default-rtdb.firebaseio.com",
    projectId: "comida2-92d1f",
    storageBucket: "comida2-92d1f.appspot.com",
    messagingSenderId: "294495586205",
    appId: "1:294495586205:web:586382b42a7975c9419174"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send (){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,mesage:msg,like:0
    });
    document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Inicia código
console.log(firebase_message_id);
console.log(message_data);
nombre = message_data['name'];
 message = message_data['message'];
  like=message_data['like'];
   name_with_tag = "<h4>" + nombre +"<img class='user_tick' src='tick.png'>";
    message_with_tag ="<h4 class='message_h4'>"+message+"</h4>";
     like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+ like+ "onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
       row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML +=row;
//Termina código
    } });  }); }
getData();

function updateLike(message_id){
console.log("hizo clic en me gusta"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
like:update_likes
});
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}