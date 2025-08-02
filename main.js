const relogio = document.getElementById("relogio");
let tipo = "24h"

function AtualizarRelogio()
{
    let data = new Date();
    
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    
    if (tipo == "12h")
    {
        horas = horas % 12 || 12;
    }

    horasTxt = String(horas).padStart(2, 0);
    minutosTxt = String(minutos).padStart(2, 0);
    segundosTxt = String(segundos).padStart(2, 0);
    
    relogioTxt = `${horasTxt} : ${minutosTxt} : ${segundosTxt}`
    
    if (tipo == "12h")
    {
        relogioTxt += data.getHours() >= 12 ? " pm" : " am"
    }

    relogio.innerText = relogioTxt;
}

relogio.addEventListener("click", () => {
    tipo = tipo == "24h" ? "12h" : "24h"
    AtualizarRelogio()
});

setInterval(AtualizarRelogio, 1000)