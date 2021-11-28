const images = [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpeg",
    "img/5.jpeg",
    "img/6.jpeg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = "url('"+ chosenImage +"')";

document.body.style.backgroundImage = backgroundImage;
document.body.style.backgroundSize = "cover";
