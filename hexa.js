class Hexa{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.height = height;
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x, pos.y, this.radius);
        
        pop();
      }
  }