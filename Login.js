const loginForm = document.getElementById("login-form");
const submit = document.getElementById("login-form-submit");
const error = document.getElementById("login-error-msg");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "madhu" && password === "madhu123") {
    location.reload();
    window.location.href = "user.html";
  } else {
    error.style.opacity = 1;
  }
});
