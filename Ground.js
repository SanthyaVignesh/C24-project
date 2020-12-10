class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution :0.3,
            friction :0.5,
            density : 3

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width  = width;
        this.height  = height;


        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        fill("Brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}