function signup() {
  const notif = document.createElement("div");
  notif.textContent = "✔ Registration success!";
  notif.classList = "msg";
  document.body.append(notif);
  const msg = document.querySelector(".msg");
  msg.style.animation = "fadeInDown 1s";
  msg.style.opacity = "1";
  msg.style.display = "flex";
  setInterval(() => {
    msg.style.animation = "fadeOutUp 1s";
    msg.style.opacity = "0";
  }, 5000);
  setInterval(() => {
    document.body.removeChild(notif);
  }, 6000);
}
function login() {
  const notif = document.createElement("div");
  notif.textContent = "✖ Invalid username or password.";
  notif.classList = "msg";
  document.body.append(notif);
  const msg = document.querySelector(".msg");
  msg.style.animation = "fadeInDown 1s";
  msg.style.opacity = "1";
  msg.style.display = "flex";
  setInterval(() => {
    msg.style.animation = "fadeOutUp 1s";
    msg.style.opacity = "0";
  }, 5000);
  setInterval(() => {
    document.body.removeChild(notif);
  }, 6000);
}