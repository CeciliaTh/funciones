// ORIGINAL 
function pintar(ele) {
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
}

ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

// PARTE MODIFICFADO 
// ele2 = document.getElementById("ele2")
// ele2.addEventListener("click", function () { ele2.style.backgroundColor = 'yellow' });


// PARTE MODIFICFADO 
ele2 = document.getElementById("ele2")
function pintar2(elec='green') {
    ele2.style.backgroundColor = elec
}
ele2.addEventListener("click", function () { ele2.style.backgroundColor = 'yellow' });

