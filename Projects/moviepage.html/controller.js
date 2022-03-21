
//Controller
function randomBg(){

    const images= [
        'url("/Projects/moviepage.html/bilder/zz.jpg")',
        'url("/Projects/moviepage.html/bilder/img1.jpg")',
        'url("Projects/moviepage.html/bilder/wallpaperflare.com_wallpaper.jpg")',
        'url("/Projects/moviepage.html/bilder/img4.jpg")',
        'url("/Projects/moviepage.html/bilder/img5.jpg")'
    ]

    const container = document.getElementById('swapBg');
    const bg = images[Math.floor(Math.random() * images.length)];

    container.style.backgroundImage = bg; 
    container.style.backgroundSize = "contain"; // contain	Resize the background image to make sure the image is fully visible
}
setInterval(randomBg, 1500);


