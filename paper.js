class paperBall
{
    constructor(x,y,radius,world){

        this.paper = Bodies.circle(x,y,2*radius,{isStatic:false})
        World.add(world, this.paper)

        this.r = radius
        

  }


    display()
    {
      fill("purple")
      circle(this.paper.position.x, this.paper.position.y, this.r)

    }
}