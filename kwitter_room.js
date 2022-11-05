
//ADD YOUR FIREBASE LINKS HERE

/*function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
*/
var bro = new Audio("dreams.mp3");
bro.play();

var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebaseConfig.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot){document.getElementById("ouput").innerHTML = ""; snapshot.forEach(function(childSnapshot) {

childKey = childSnapshot.key;
Room_names = childKey;
row = "<div id="+Room_names+ " onclick = 'redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name) {
localStorage.setItem("room_name", name);
window.location = "index.html";
}
var yes = ["https://tse2.mm.bing.net/th?id=OIP.h9BX4ry1FewlFFMR5hv9TAHaE8&pid=Api&P=0", "https://tse1.mm.bing.net/th?id=OIP.bGHc6Ws59hOWRzoJz-Z8FQHaFD&pid=Api&P=0", "https://tse1.mm.bing.net/th?id=OIP.tG42kXQb6XsaAqwj-ADafgHaFS&pid=Api&P=0"];

for(i=0; i<4; i++) {
      console.log("1");
      document.getElementById("imageMan").src =  yes[i];
      console.log("2");
      setTimeout(donothing, 3000);
      if(i==3) {
            i=1;
      }
}

function donothing(){
      //
}
