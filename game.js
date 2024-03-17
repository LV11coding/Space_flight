// currently code works only for one level and with a set postition for barrel(not random)
// from line 38 to line 67 and from line 93 to line 97 is newly added code and the one that needs to be reworked for more than 1 level 


// 1. Suzdavame promenlivi
let myX = 0
myY = 0
barx = 200
bary = 200
posoka = 1
plavno = 1
leti = false
gorivo = 200
x1 = 300
x2 = 500
x3 = 700
pr1_vis = randomInteger(200)
pr2_vis = randomInteger(200)
pr3_vis = randomInteger(200)
dupka1 = randomInteger(200) + 100
dupka2 = randomInteger(200) + 100
dupka3 = randomInteger(200) + 100
izp = 0
gor = false

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    //myX = myX + (mouseX - myX) / 10;
    //myY = myY + (mouseY - myY) / 10;

    if (myY > 550) {
        myY = 550
        if (gorivo < 200) { gorivo = gorivo + 5 }
    }

    if (myY < 0) { myY = 0 }

    if (myX < 149) {
        if ((leti == true) && (gorivo > 0)) {
            myY = myY - 2
            if (gorivo > 0) { gorivo = gorivo - 1 }
        }
        else {
            myY = myY + 2
            if (gorivo < 200) { gorivo = gorivo + 1 }
        }
    }
    else if (myX > 149 && gor == true) {
        if ((leti == true) && (gorivo > 0)) {
            myY = myY - 2
            if (gorivo > 0) { gorivo = gorivo - 1 }
        }
        else {
            myY = myY + 2
            if (gorivo < 300) { gorivo = gorivo + 1 }
        }
    }
    else if (myX > 149) {
        if ((leti == true) && (gorivo > 0)) {
            myY = myY - 2
            if (gorivo > 0) { gorivo = gorivo - 1 }
        }
        else {
            myY = myY + 2
            if (gorivo < 200) { gorivo = gorivo + 1 }
        }
    }






    myX = myX + 1
    if (myX > 800) {
        myX = 0
        pr1_vis = randomInteger(200)
        pr2_vis = randomInteger(200)
        pr3_vis = randomInteger(200)
        dupka1 = randomInteger(200) + 100
        dupka2 = randomInteger(200) + 100
        dupka3 = randomInteger(200) + 100
    }


    if (areColliding(myX, myY, 50, 50, x1, 0, 20, pr1_vis) ||
        areColliding(myX, myY, 50, 50, x1, pr1_vis + dupka1, 20, 500) ||
        areColliding(myX, myY, 50, 50, x2, 0, 20, pr2_vis) ||
        areColliding(myX, myY, 50, 50, x2, pr2_vis + dupka2, 20, 500) ||
        areColliding(myX, myY, 50, 50, x3, 0, 20, pr3_vis) ||
        areColliding(myX, myY, 50, 50, x3, pr3_vis + dupka3, 20, 500)) { myX = 0 }

    if (areColliding(myX, myY, 50, 50, 200, 200, 40, 60) && myX <= 150) {
        gor = true
        gorivo = gorivo + 100
    }
    console.log(gorivo)

}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600)
    //drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(box, myX, myY, 50, 50)

    drawImage(paddle, x1, 0, 20, pr1_vis)
    drawImage(paddle, x1, pr1_vis + dupka1, 20, 500)

    drawImage(paddle, x2, 0, 20, pr2_vis)
    drawImage(paddle, x2, pr2_vis + dupka2, 20, 500)

    drawImage(paddle, x3, 0, 20, pr3_vis)
    drawImage(paddle, x3, pr3_vis + dupka3, 20, 500)
    drawImage(paddleGhost, 0, 0, gorivo, 20)

    drawImage(barrelGreen, barx, bary, 40, 60)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key)

    for (izp = 5; izp <= 100; izp = izp + 5) { console.log(izp) }

    if (key == 32) { leti = false }




}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}


function keydown(key) {

    if (key == 32) { leti = true }



}

