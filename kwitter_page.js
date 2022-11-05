var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey; 
    message_data = childData;
     name = message_data('name');
     like = message_data('like');
     message = message_data('message');
     name_with_tag = "<h4>"+name+"<img src='tick.png'></h4>";
    message_with_tag = "<h3>"+message+"</h3>";
    like_with_tag = "<button class='btn btn-success' onclick = 'updateLikes(this.id);'id="+firebase_message_id+">"+like;
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span></button>";
    row = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
    document.getElementById("output").innerHTML = row;
} }); }); }
getData();

function updateLikes(message_id) {
button_id = message_id;
likes= document.getElementById(button_id).value;
updatedLikes = Number(likes)+ 1;

firebase.database().ref(room_name).child(message_id).update({
    like: updatedLikes
});
}

function logout() {
window.location = "kwitterStuff.html;";
}