var volumn = document.querySelector("#volumn");
var img = document.querySelector("#newImage"); 
var ma = document.querySelector(".ma");

var music = new Audio('./assets/img/audio.mp4');

volumn.addEventListener('input', () => {
    if (volumn.value < 30) {
        music.play();
        setTimeout(() => {
            ma.classList.add('show');
            newImage.classList.add('ma');        
        }, 300);
    }
    img.style.clipPath = "polygon(0 0, " + volumn.value + "% 0, " + volumn.value + "% 100%, 0 100%";
});