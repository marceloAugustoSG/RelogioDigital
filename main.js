let hora = document.getElementById('hora')
let minuto = document.getElementById('minuto')
let segundo = document.getElementById('segundo')

let date = new Date()



function horaAtual() {
    const date = new Date();
    document.getElementById('hora').innerHTML = date.getHours().toLocaleString();
    document.getElementById('minuto').innerHTML = date.getMinutes().toLocaleString();
    document.getElementById('segundo').innerHTML = date.getSeconds().toLocaleString();
}

setInterval(horaAtual, 1000)