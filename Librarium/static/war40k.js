const images = [
    'Assets/Images/CRbg1.jpg', 'Assets/Images/CRbg2.jpg', 'Assets/Images/CRbg3.jpg',
    'Assets/Images/CRbg4.jpg', 'Assets/Images/CRbg5.jpg', 'Assets/Images/CRbg6.jpg',
    'Assets/Images/CRbg7.png', 'Assets/Images/CRbg8.jpg', 'Assets/Images/CRbg9.jpg'
];
shuffle(images);
function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}
window.onload = () => {
    document.body.style.backgroundImage = `url(${images[0]})`;
    document.querySelector('.hidden').src = images[1];
    // document.querySelector('.hidden').src = `static/${images[1]}`;
    // document.querySelector('.hidden').src = `{{ url_for('static', filename='${images[1]}') }}`;
    let i = 1;
    setInterval(() => {
        document.body.style.backgroundImage = `url(${images[i++]})`;
        if(i === images.length) i = 0;
        else {
            document.querySelector('.hidden').src = images[i];
            // document.querySelector('.hidden').src = `static/${images[i]}`;
            // document.querySelector('.hidden').src = `{{ url_for('static', filename='${images[i]}') }}`;
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