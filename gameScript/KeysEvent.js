const SPACE_KEY = 32;
const D_KEY = 100;
const Q_KEY = 113;
const Z_KEY = 122;
const S_KEY = 115;

$("html").keypress(function(){
    switch(event.keyCode){
        case SPACE_KEY :
            player.jump();
            break;
        default :
            break;
    }
});

$("html").keydown(function(){
    switch(event.keyCode){
        case 68 : //D KEY
            player.wantMooveLeft = false;
            player.wantMooveRight = true;
            break;
        case 81 : //Q KEY
            player.wantMooveLeft = true;
            player.wantMooveRight = false;
            break;
        default :
            break;
    }
});

$("html").keyup(function(){
    switch(event.keyCode){
        case 68 : //D KEY
            player.wantMooveRight = false;
            break;
        case 81 : //Q KEY
            player.wantMooveLeft = false;
            break;
        default :
            break;
    }
});
