function signup() {
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