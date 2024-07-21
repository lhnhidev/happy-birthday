var volumn = document.querySelector("#volumn");
var img = document.querySelector("#newImage"); 
var ma = document.querySelector(".ma");
var box = document.querySelector(".box");
var title = document.querySelector("h2");

box.addEventListener('click', () => {
    box.classList.add('none');  
    title.classList.remove('none');
});

var music = new Audio('./assets/img/audio.mp4');

volumn.addEventListener('input', () => {
    if (volumn.value < 42) { // if you ask myseflt, why fucking man use 42?? Ok my answer: because i like it =))
        music.play();
        setTimeout(() => {
            ma.classList.add('show');
            newImage.classList.add('ma');        
        }, 300);
    }
    img.style.clipPath = "polygon(0 0, " + volumn.value + "% 0, " + volumn.value + "% 100%, 0 100%";
});