class Dustbin{
    constructor(x,y,width,height,angle){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(x,y,width,height,angle);
       this.width = width;
       this.height = height;
      Matter.Body.setAngle(this.body, angle);

       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
       // rotate (angle);
        fill(255, 255, 255, 0.5);
        rect(pos.x, pos.y, this.width, this.height);
      }
}