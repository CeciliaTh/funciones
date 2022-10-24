
    document.addEventListener('keydown', function (event) {
        if (event.key === 'a' || event.key === 'A') {
            var colorA = document.querySelector('#div1')
            colorA.style.backgroundColor = "deeppink"
        } else if (event.key === 's'|| event.key === 'S') {
            var colorS = document.querySelector('#div2')
            colorS.style.backgroundColor = "purple"
        } else if (event.key === 'd' || event.key === 'D') {
            var colorD = document.querySelector('#div3')
            colorD.style.backgroundColor = "teal"
        }
    })