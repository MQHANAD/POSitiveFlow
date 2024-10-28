
let imgs = document.getElementById("imgContainer");
let intrologo = document.getElementById("intrologo");
let introText = document.getElementById("introtext");
let whiteBox2 = document.getElementById("whiteBox2");
let whiteBox = document.getElementById("whiteBox")
let logo1 = document.getElementById("logo");
let logoT = document.getElementById("logoText");
let white = document.getElementById("white");
let intrro = document.getElementById("intro");
let tmp = 0;
const logoPos = logo1.style.left;
const Tpos = logoT.style.left;
const firstPos = imgs.style.right;
const whiteP = white.style.left;
let counter = 0;

console.log(counter)

setInterval(moveImg, 5000)
setTimeout(intro, 2000)
setInterval(logo, 10000)
logo()
function logo() {
    if (tmp === 0) {
        logo1.style.left = "100px";
        logoT.style.left = "-300px";
        white.style.left = whiteP
        tmp = 1;
    }
    else {
        logo1.style.left = logoPos;
        logoT.style.left = Tpos;
        white.style.left = "-100px";
        tmp = 0;
    }

}
function intro() {
    intrologo.style.left = "-600px";
    introText.style.left = "350px"
    whiteBox2.style.left = "-1000px"
    setTimeout(hide, 4000)

}
function hide() {
    intrro.style.pointerEvents = "none";
    intrologo.style.pointerEvents = "none";
    introText.style.pointerEvents = "none";
    whiteBox2.style.pointerEvents = "none";
    whiteBox.style.pointerEvents = "none";
    intrologo.style.display = "none";
    introText.style.display = "none";
    whiteBox2.style.display = "none";
    whiteBox.style.display = "none";
}



function moveImg() {
    let img1 = document.getElementById("img1")
    let img2 = document.getElementById("img2")
    let img3 = document.getElementById("img3")
    let img4 = document.getElementById("img4")
    if (counter < 4) {
        let right = parseInt(imgs.style.right);
        imgs.style.right = right + 2050;
        if (counter === 0) {
            img1.style.display = 'block'
            img2.style.display = 'none'
            img3.style.display = 'none'
            img4.style.display = 'none'
        }
        else if (counter === 1) {


            img1.style.display = 'none'
            img2.style.display = 'block'
            img3.style.display = 'none'
            img4.style.display = 'none'

        }
        else if (counter === 2) {
            img1.style.display = 'none'
            img2.style.display = 'none'
            img3.style.display = 'block'
            img4.style.display = 'none'
        }
        else if (counter === 3) {
            img1.style.display = 'none'
            img2.style.display = 'none'
            img3.style.display = 'none'
            img4.style.display = 'block'
        }
        counter++;
    } else {
        imgs.style.right = firstPos
        counter = 0;
    }
}
