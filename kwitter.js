    function yep() {
    var randoom = Math.floor(Math.random() * 3.4);
    console.log(randoom);
    if(randoom == 1) {
        console.log("in 1");
        document.getElementById("bruh").innerHTML = "wassup - Kwitter Dev";
    }
    if(randoom == 2) {
        console.log("in 2");
        document.getElementById("bruh").innerHTML = "Hi! Welcome to Kwitter - Kwitter Dev";
    }
    if(randoom == 3) {
        console.log("in 3");
        document.getElementById("bruh").innerHTML = "HEY WHAT IS UP MY FRIEND - Kwitter Dev";
    }

    }


var yessir = new Audio("allthat.mp3");
yessir.play();
function login() {
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}


