let dataAtual = new Date();
let hora = dataAtual.getHours();
let horaAtual = hora
let funcaoNumero = () => {
    var sub = document.querySelector('.main-subtitle')
    var img = document.querySelector('.imgDaHora')
    var body = document.querySelector('.main-body')
    sub.innerText = `Agora são ${horaAtual} horas`
    if (horaAtual >= 6 && horaAtual <= 12) {
        img.src = 'dia.png'
    }
    else if (horaAtual > 12 && horaAtual < 18) {
        img.src = 'tarde.png'
        body.style.backgroundColor = '#A97863'
    }
    else {
        img.src = 'noite.png'
        body.style.backgroundColor = '#4A4B4C'
    }
}
funcaoNumero()
