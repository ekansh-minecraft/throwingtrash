class Ground
{
  constructor(x,y,width,height,world){
     this.ground = Bodies.rectangle(x,y,width,height,{isStatic:true})
     World.add(world, this.ground)
     this.w = width
     this.h = height
  }

    display()
    {
      fill("yellow")
      rect(this.ground.position.x,this.ground.position.y,this.w,this.h)
    }
}

