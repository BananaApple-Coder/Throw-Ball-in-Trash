class paper{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		}

		this.image = loadImage("paper.png")
		this.body=Bodies.circle(x, y, (r-30)/2	, options)
		
		World.add(world, this.body)
		this.x = x;
		this.y = y;
		this.r = r
	}
	display(){
			var pos = this.body.position;

			push()

			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill(0)

			imageMode(CENTER)
			image(this.image, 0, 0, this.r, this.r)
			
			pop()
	}
}