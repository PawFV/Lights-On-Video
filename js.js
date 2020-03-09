// LUZ PRENDIDA Y APAGADA
var imagen = document.getElementById("foto")
var btnOn = document.getElementById("botonOn")
var btnOff = document.getElementById("botonOff")
var bdy = document.getElementById("cuerpo")
var videoWeehee = document.getElementById("video1")
var openWindows = document.getElementById("windws")
var reproduced, reproducing;


function prende() {
    // ENCIENDE LAMPARA
    imagen.src = 'images/pic_bulbon.gif' 
    btnOn.style.display = 'inline-block'
    btnOff.style.display = 'none'
    bdy.style.backgroundColor = 'rgb(245, 245, 245)'
    
    // REPRODUCE VIDEO
    videoWeehee.play()
    reproducing = "on"

    
    if (!reproduced) // Es igual que hacer -> if(reproduced == undefined)
    {
        setTimeout(shows,2000)
    } else {
        videoWeehee.style.opacity = '1'
    }
    
}

function apaga() {
    // APAGA LAMPARA
    imagen.src = 'images/pic_bulboff.gif' 
    btnOff.style.display = 'inline-block'
    btnOn.style.display = 'none'
    bdy.style.backgroundColor = 'rgb(156, 156, 156)'
    // PAUSA VIDEO
    videoWeehee.style.transition = 'opacity 1s'
    videoWeehee.style.opacity = '0'

    var volumeCount = 1;
    var fade = setInterval(frame, 200)

        function frame() {
            if (volumeCount > 0.1) {
                volumeCount -= 0.1
                videoWeehee.volume = `${volumeCount}`
            } else {
                clearInterval(fade);
                videoWeehee.volume = '1'
                videoWeehee.style.removeProperty('transition')
            }
        }
        setTimeout(function(){videoWeehee.pause()},2000)
  
}


function shows() {
    videoWeehee.style.opacity = '1'
    reproduced = "reproduced once";
    reproducing = undefined;
}

