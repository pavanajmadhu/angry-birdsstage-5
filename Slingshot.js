class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        imageMode("CENTER");
        image(this.sling1,250,73,30,150);
        image(this.sling2,230,85,30,75)

        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#301608")
            strokeWeight(10);
        
            if(pointA.x<250){
            image(this.sling3,pointA.x-25,pointA.y-10,10,20)
            line(pointA.x-10, pointA.y, pointB.x+10, pointB.y+5);
            line(pointA.x-10, pointA.y, pointB.x+35, pointB.y-5);
        }
        else {
            image(this.sling3,pointA.x+20,pointA.y,10,20)
            line(pointA.x+10, pointA.y, pointB.x+10, pointB.y+5);
            line(pointA.x+10, pointA.y, pointB.x+35, pointB.y-5);
        }
        
        }
    }
    
}