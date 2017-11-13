//<script type="text/processing" data-processing-target="processing-canvas">
float theta = 0, amt = 0.0, inc = 0.01;

final color FROMC = color(204, 102, 0);
final color TOC = color(0, 102, 153);
color changingColor;

void setup()
{
  size(800, 800); 
  smooth();
  
  changingColor = lerpColor(FROMC, TOC, amt);
}

void draw()
{
  drawMyShape();
}

// Custom function to draw a custom shape
void drawMyShape() {
  changingColor = lerpColor(FROMC, TOC, amt);
  background(changingColor); 
  stroke(255);

  // Translate to center of window 
  translate(width/2,height/2);
  scale(theta/2);
  

  // Loop from 0 to 360 degrees (2*PI radians)
  for(float i=0; i < TWO_PI; i+=0.8) 
  {
  // Push, rotate and draw a line! 
    pushMatrix(); 
    rotate(theta-i); 
    rect(10,10,10,50);
    // Loop from 0 to 360 degrees (2*PI radians) 
    for(float j=0; j <PI; j+=0.8) 
    {
      // Push, translate, rotate and draw a line! 
      pushMatrix(); 
      translate(50,0); 
      rotate(-theta- j);
      rect(0,0,40,40); 
      
      // We're done with the inside loop, pop!
      popMatrix();
    } 
    // We're done with the outside loop, pop! 
    popMatrix();
  } endShape();
  
// Increment theta 
  theta+=0.01;
  amt = amt +inc;
  
  if(amt == 1.0 || amt == 0.0)
    inc = -inc;
}
//</script>
