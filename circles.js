function Circles(x,y,r){

    var options = {

        friction: 0.2,
        restitution : 1 


    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    
    
    World.add(world,this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        //rotate(angle);
        stroke(255);
        strokeWeight(2);
        fill ('grey');

        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0,0,this.r);
        pop();
    }




}