document.querySelector(".submit-button").addEventListener("click", function (event) {
    event.preventDefault(); 

    const gif = document.querySelector(".gif-click");
    const body = document.querySelector(".body");
    const leftGif = document.querySelector(".cute-img");

    gif.style.display = "block";

    setTimeout(() => {
        gif.style.display = "none";
        leftGif.src = "/midia/anime-love-menhera-chan-4z2cllt8ku36nj7r.gif";
        body.style.backgroundImage = "url('/midia/heart-sparcke.gif')";
        body.style.backgroundSize = "auto 100%"; 
        body.style.backgroundRepeat = "repeat-x"; 
        body.style.backgroundPosition = "top center"; 
    }, 1400);
});