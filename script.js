function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var ref = window.document.getElementById('linkref')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var pluralh = 'hora'
    var pluralm = 'minuto'
    if(hora >= 10) {
        var pluralh = 'horas'
    }
    if(min >= 10) {
        var pluralm = 'minutos'
    }

    msg.innerHTML = `Agora são:<strong> ${hora} ${pluralh} e ${min} ${pluralm}. </strong>`
    if(hora >= 5 && hora < 12 ){
        //BOM DIA 
        img.src = 'imagens/morning-r.gif'
        document.body.style.backgroundImage = "linear-gradient(to top, #A64732, #F2DF7E)"
        linkref.href = 'https://tenor.com/view/pixel-8bit-retro-memes-doge-gif-18395195'

    }else if (hora >= 12 && hora < 18){
        //BOA TARDE 
        img.src = 'imagens/tarde-r.gif'
        document.body.style.backgroundImage = "linear-gradient(to top, #F26052, #8C586B)"
        linkref.href = 'https://aminoapps.com/c/loonaverse/page/blog/good-morning/5Mox_zGCVuPKrvZZ0w6vPw4N64Wom3P2lk'


    }else{
        //BOA NOITE
        img.src = 'imagens/noite-r.gif'
        document.body.style.backgroundImage = "linear-gradient(to top, #021E73, #042159)"
        linkref.href = 'https://www.yachtclubgames.com/games/shovel-knight-treasure-trove'

    }
}
