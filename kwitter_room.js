user_name = localStorage.getItem("user_name", user_name);
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";