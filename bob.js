class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:1.8

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var BOBpos=this.body.position;		

			push()
			translate(BOBpos.x, BOBpos.y);
			rectMode(CENTER);
			//strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			//imageMode(CENTER)
			pop()
			
	}}