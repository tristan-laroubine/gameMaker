
class Player extends Drawable{
    constructor() {
        super();
        this.hauteur = 100;
        this.largeur = 30;
        this.x = 500;
        this.y = 50;
        this.velocityX = 0;
        this.velocityY = 0;

        this.wantMooveRight = false;
        this.wantMooveLeft = false;

        this.isJumping = false;
        this.isWalk = false;


        this.sprites = new Image();
        this.sprites.src = '../'
    }


    draw(){
        if(this.wantMooveLeft)
            this.mooveLeft();
        else if(this.wantMooveRight)
            this.mooveRight();

        this.y += this.velocityY;
        this.x += this.velocityX;

        let objectCollision = isCollision(wordBlock, this);

        if (objectCollision == null){
            this.velocityY += 4; //gravity
        }else{
            if (this.velocityY !== 0){
                this.y = objectCollision.y - objectCollision.height;
                this.isWalk = true;
            }

            this.velocityX = 0;
            this.velocityY = 0;


        }

        this.velocityX *= 0.7; //friction
        this.velocityY *= 0.9; //friction

        this.drawSprite();
        ctx.fillRect(this.x, this.y, this.largeur, this.hauteur);
    }

    jump(){
        if (this.isJumping && this.velocityY >= 0 && this.isWalk)
            this.isJumping = false;
        if (!this.isJumping){
            this.isJumping = true;
            this.isWalk = false;
            this.velocityY -= 50;
        }


    }
    mooveRight(){

        this.velocityX += 4;
    }

    mooveLeft(){
        this.velocityX -= 4;
    }

    drawSprite(){
        var image = document.getElementById("sprite");

        ctx.drawImage(image, 0, 71, 104, 124, 21, 20, 87, 104);
    }

}