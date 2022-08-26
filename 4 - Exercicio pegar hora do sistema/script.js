function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
        if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'pngmanha.png'
    document.body.style.background ='#e8cd4f'
        } else if (hora >= 12 && hora <18) {
    //BOA TARDE!
    document.body.style.background = '#b9846f'
    img.src = 'pngtarde.png'
     } else { 
    //BOA NOITE
    img.src = 'pngnoite.png'
    document.body.style.background = '#515154'
    }
}
