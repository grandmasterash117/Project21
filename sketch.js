var bullet,weight,wall,speed,thickness;
var damage,damageation;

 function setup() 
 {
    createCanvas(1600,400);
    wall =createSprite(1200,350,thickness,600);
    wall.shapeColor=(80,80,80);
    bullet=createSprite(100,200,80,30);
    bullet.shapeColor="white";
    bullet.velocityX=random(10,60);
    speed=random(225,325);
    bullet.weight=random(30,50);
    weight=round(bullet.weight);
    thickness=round(random(25,85));
   }
    
    function draw()
    {
    background(0,0,0);
    bullet.velocityX=speed;
    damagegeddon();
    collision();
    drawSprites();
    fill(255);
    text('weight='+ weight,600,50);
    text('Damage done='+ damage,600,100);
    }
    
    function damagegeddon()
    {
      damagation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
      damage=round(damagation);

      if(damage>=10)
      {
        bullet.shapeColor="red";
        text('NOT ACCEPTABLE!!',700,75);
      }  
      else
      {
        bullet.shapeColor="green";
        text('ACCEPTABLE',700,75);
      }
    }


    function collision()
    {     
      if(bullet.x-wall.x<wall.width/2+bullet.width/2 && wall.x-bullet.x<wall.width/2+bullet.width/2)
      {
      bullet.velocityX=0;
      }
  }