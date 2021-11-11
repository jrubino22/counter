let target = 0;
const dec = document.getElementById("decrease");
const res = document.getElementById("reset");
const inc = document.getElementById("increase");
const scrn = document.getElementById("screenDiv")

dec.addEventListener("click", function(){ 
    target -= 1;
    if (target > 0) {
        scrn.style.color = "green";
    }
    else if (target < 0) {
        scrn.style.color = "red";
    }
    else scrn.style.color = null;
    scrn.textContent = target
})

res.addEventListener("click", function(){ 
    target = 0;
    if (target > 0) {
        scrn.style.color = "green";
    }
    else if (target < 0) {
        scrn.style.color = "red";
    }
    else scrn.style.color = null;
    scrn.textContent = target
})

inc.addEventListener("click", function(){ 
    target += 1;
    if (target > 0) {
        scrn.style.color = "green";
    }
    else if (target < 0) {
        scrn.style.color = "red";
    }
    else scrn.style.color = null;
    scrn.textContent = target
})

function changeColor(target) {


    scrn.textContent = target
}