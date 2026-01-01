// LOGIN
if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify({
    name: "Test User",
    username: "admin",
    password: "1234"
  }));
}
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && user === savedUser.username && pass === savedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    } else {
      document.getElementById("loginError").textContent = "Invalid login";
    }
  });
}

// SIGN UP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
      name: document.getElementById("suName").value,
      username: document.getElementById("suUser").value,
      password: document.getElementById("suPass").value
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Account created successfully!");
    window.location.href = "login.html";
  });
}
