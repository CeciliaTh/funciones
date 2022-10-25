let colorFondo = '';
    document.addEventListener('keydown', function (tecla) {
        if (tecla.key === 'a' || tecla.key === 'A') {
           colorFondo = 'red' 
        } else if (tecla.key === 's'|| tecla.key === 'S') {
            colorFondo = 'purple' 
        } else if (tecla.key === 'd' || tecla.key === 'D') {
            colorFondo = 'teal'
        } else if (tecla.key === 'f' || tecla.key === 'F') {
             colorFondo = 'greenyellow'
        } else{
            colorFondo = ''
        }
    })


    let color1 = document.querySelector('#div1')
    let color2 = document.querySelector('#div2')
    let color3 = document.querySelector('#div3')
    let color4 = document.querySelector('#div4')

    color1.addEventListener("click", function () { color1.style.backgroundColor = colorFondo });
    color2.addEventListener("click", function () { color2.style.backgroundColor = colorFondo });
    color3.addEventListener("click", function () { color3.style.backgroundColor = colorFondo });
    color4.addEventListener("click", function () { color4.style.backgroundColor = colorFondo });