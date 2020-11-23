const mainBox = document.querySelector(".main-box");
const oakBox = document.querySelector(".oak");
const coronaBox = document.querySelector(".corona");
const smirnoffBox = document.querySelector(".smirnoff");
const stellaBox = document.querySelector(".stella");
const image = document.querySelector("#img");
const Main = document.querySelector("#main");

oakBox.addEventListener("click", (event)=>{
    console.log(event.target.src);
    const ImageSrc = event.target.src;
    Main.src = ImageSrc;
   event.preventDefault();
});

coronaBox.addEventListener("click", (event)=>{
    console.log(event.target.src);
    const ImageSrc = event.target.src;
    Main.src = ImageSrc;
    event.preventDefault();
});

smirnoffBox.addEventListener("click", (event)=>{
    console.log(event.target.src);
    const ImageSrc = event.target.src;
    Main.src = ImageSrc;
    event.preventDefault();
});

stellaBox.addEventListener("click", (event)=>{
    console.log(event.target.src);
    const ImageSrc = event.target.src;
    Main.src = ImageSrc;
    event.preventDefault();
});

