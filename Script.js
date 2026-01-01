const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    btn.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    music.pause();
    btn.innerHTML = '<i class="fa fa-music"></i>';
  }
  isPlaying = !isPlaying;
});

function bookRoom(roomName) {
  if (!localStorage.getItem("isLoggedIn")) {
    alert("Please login to book a room");
    document
      .getElementById("login-section")
      .scrollIntoView({ behavior: "smooth" });
    return;
  }

  alert("Room booked successfully: " + roomName);
}


function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
if (localStorage.getItem("isLoggedIn")) {
  document.getElementById("profileLink").style.display = "block";
}
