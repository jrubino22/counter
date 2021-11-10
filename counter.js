let target = "0";
const dec = document.getElementById("decrease");
const res = document.getElementById("reset");
const inc = document.getElementById("increase");
const scrn = document.getElementById("mainDiv")

dec.addEventListener("click", function(target){ 
    target -= 1
})

res.addEventListener("click", function(target){ 
    target = 0
})

inc.addEventListener("click", function(target){ 
    target += 1
})

function changeColor(target) {
    if (target > 0) {
        scrn.style.color = "green";
    }
    else if (target < 0) {
        scrn.style.color = "red";
    }
    else scrn.style.color = "yellow";
}

function display(target) {
    scrn.textContent = target
}