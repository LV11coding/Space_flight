// 1. Suzdavame promenlivi
let myX = 0
    myY = 0
    posoka=1
plavno=1
leti=false
gorivo=200
x1=300
x2=500
x3=700
pr1_vis=randomInteger(200)
pr2_vis=randomInteger(200)
pr3_vis=randomInteger(200)
dupka1=randomInteger(200)+100
dupka2=randomInteger(200)+100
dupka3=randomInteger(200)+100
izp=0


function update () {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    //myX = myX + (mouseX - myX) / 10;
    //myY = myY + (mouseY - myY) / 10;

    if(myY>550)
        {myY=550
        if(gorivo<200)
            {gorivo=gorivo+5}
         }
    
    if(myY<0)
        {myY=0}
    
if((leti==true)&&(gorivo>0))
    {myY=myY-2
     if(gorivo>0) {gorivo=gorivo-1}
    }
else{myY=myY+2
    if(gorivo<200) {gorivo=gorivo+1}}
    
    
    myX=myX+1
if(myX>800)
    {myX=0
     pr1_vis=randomInteger(200)
pr2_vis=randomInteger(200)
pr3_vis=randomInteger(200)
dupka1=randomInteger(200)+100
dupka2=randomInteger(200)+100
dupka3=randomInteger(200)+100
    }
     
    
  if(areColliding(myX,myY,50,50,x1,0,20,pr1_vis)||
     areColliding(myX,myY,50,50,x1,pr1_vis+dupka1,20,500)||
     areColliding(myX,myY,50,50,x2,0,20,pr2_vis)||
     areColliding(myX,myY,50,50,x2,pr2_vis+dupka2,20,500)||
     areColliding(myX,myY,50,50,x3,0,20,pr3_vis)||
     areColliding(myX,myY,50,50,x3,pr3_vis+dupka3,20,500))  
     
     {myX=0}
    
    
    
    
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600)
    //drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(box,myX,myY,50,50)
    
    drawImage(paddle,x1,0,20,pr1_vis)
    drawImage(paddle,x1,pr1_vis+dupka1,20,500)
    
    drawImage(paddle,x2,0,20,pr2_vis)
    drawImage(paddle,x2,pr2_vis+dupka2,20,500)
    
    drawImage(paddle,x3,0,20,pr3_vis)
    drawImage(paddle,x3,pr3_vis+dupka3,20,500)
    
    
    
    drawImage(paddleGhost,0,0,gorivo,20)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key)
    
  for(izp=5; izp<=100; izp=izp+5)
        {console.log(izp)}
    
    if(key==32)
        {leti=false}

    
    

}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}


function keydown (key){
   
   if(key==32)
        {leti=true} 
    
    
    
}

