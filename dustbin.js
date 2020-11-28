class dustbin
{
  constructor(x,y,width,height,world)
  {
      this.x = x
      this.y = y
      this.w = width
      this.h = height

      this.bottomLine = Bodies.rectangle(this.x,y + height/2 + 5,this.w,10,{isStatic:true})
      World.add(world,this.bottomLine)

      this.leftLine = Bodies.rectangle(x-width/2 - 5, this.y, 10, this.h,{isStatic:true})
      World.add(world,this.leftLine)

      this.rightLine = Bodies.rectangle(x+width/2 + 5,this.y, 10, this.h,{isStatic:true})
      World.add(world,this.rightLine)
  }
     display()
     {
        //rect(this.x,this.y,this.w,this.h)
        rect(this.rightLine.position.x,this.rightLine.position.y,10,this.h)
        rect(this.leftLine.position.x,this.leftLine.position.y,10,this.h)
        rect(this.bottomLine.position.x,this.bottomLine.position.y,this.w,10)

     }
}
