const images = [
  'Assets/Images/LHbg1.jpg', 'Assets/Images/LHbg2.jpg', 'Assets/Images/LHbg3.jpg',
  'Assets/Images/LHbg4.jpg', 'Assets/Images/LHbg5.jpg',
];
shuffle(images);
function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}
window.onload = () => {
  // preloading.
  document.body.style.backgroundImage = `url(${images[0]})`;
  document.querySelector('.hidden').src = images[1];
  let i = 1;
  setInterval(() => {
      document.body.style.backgroundImage = `url(${images[i++]})`;
      if(i === images.length) i = 0;
      else {
          //preload the next image, so it transitions smoothly
          document.querySelector('.hidden').src = images[i];
      }
  }, 7000);
}
const scrollBtn = document.querySelector("#scrollBtn");
window.onscroll = () => {
  if(document.body.scrollTop > (window.innerHeight / 2) || document.documentElement.scrollTop > (window.innerHeight / 2)) {
      scrollBtn.style.animation = "fadeInDown 1s";
      scrollBtn.style.opacity = "1";
      scrollBtn.style.display = "block";
    }
  else {
      scrollBtn.style.animation = "fadeOutUp 1s";
      scrollBtn.style.opacity = "0";
  }
};
scrollBtn.addEventListener("click", event => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});