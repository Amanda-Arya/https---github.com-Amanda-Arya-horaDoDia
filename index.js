function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`;

    if(hora >= 0 && hora <= 12){
        document.body.style.background = "#FFE4E1"
        img.src = "img/morning.jpg"
       
    }
    else if(hora >= 12 && hora <= 18){
        document.body.style.background = "#FFA500"
        img.src = "img/afternoon.jpg"

    }
    else{
        document.body.style.background = "#9370DB"
        img.src = "img/nigth.jpg"
    }
}
