function Boundary(x,y,w,h,a){

    var option = {


        friction:0,
        restitution:0.6,
        angle: a,
        isStatic : true



    }
    this.body = Bodies.rectangle(x,y,w,h,option);
    this.w = w;
    this.h = h;
    
    World.add(world,this.body);
    console.log(this.body);

    this.show = function(){
        rectMode(CENTER);
        var pos = this.body.position;
        var angle = this.body.angle;
        

        push();

        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        //strokeWeight(1)
        noStroke(255);
        fill ("black");
        rect(0,0,this.w,this.h);
        pop();
    }




}