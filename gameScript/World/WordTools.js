function drawAll(listes) {
    listes.forEach(function(item){
        item.draw();
    });
}

function isCollision(listes, charcter){
    let returnValue = null;
    listes.forEach(function(item){

        if(item.isACollision(charcter)){
            returnValue = item;
            return returnValue;
        }

    });
    return returnValue;
}

