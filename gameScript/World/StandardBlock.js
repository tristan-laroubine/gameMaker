class StandardBlock extends Block{
    constructor(x, y){
        super(x,y,100,100);
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    isACollision(charcter) {
        if (charcter.x < this.x + this.width &&
            charcter.x + charcter.largeur > this.x &&
            charcter.y < this.y + this.height &&
            charcter.hauteur + charcter.y > this.y) {
                return true;
        }
        return false;
    }
}
