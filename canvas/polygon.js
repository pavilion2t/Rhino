<!DOCTYPE>
<html>
 <body>
  <canvas id="circle" width=1000 height=1000></canvas>

  <script type="text/javascript"> 
  var canvas = document.getElementByID("circle");
  var c = canvas.getContext('2d');
    function(c,n,x,y,r,angle,counterclockwise){
    	angle = angle||0;
    	counterclockwise = cpunterclockwise||false;
    	c.moveTo(x+r*Math.sin(angle),
    		    y-r*Math.cos(angle));
    	var delta = 2*Math.PI/n;

    	for(var i=0;i<n;i++){
    		angle += counterclockwise?-delta:delta;
    		c.lineTo(x+r*Math.sin(angle),
    			y-r*Math.cos(angle));
    	}
    	c.closePath();
    }

    c.beginPath();
    polygon(c,3,50,70,50);
    polygon(c,4,150,60,50,Math.PI/4);
    polygon(c,5,255,55,50);
    polygon(c,6,365,53,50,Math.PI/6);

    c.fillStyle="#ccc";
    c.strokeStyle"#008";
    c.lineWidth=5;

    c.fill();
    c.strike();

  </script>
 </body>
</html>
