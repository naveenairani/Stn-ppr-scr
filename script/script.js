function mycanvas(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    return ctx;
}


function stoneselect(){
    var canvas = mycanvas();
    var img = document.getElementById("stone");
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.drawImage(img,50,50,img.width,img.height);
    canvas.font = "20px Arial"
    canvas.fillStyle = "#7D7C7C";
    canvas.fillText("Stone",70,195);
    var computecanvas = computercanvas();
    var stone = "stone"
    var winer = winner();
    if(computecanvas.computercanvas == "stone"){
        winer.win.innerText = 'Tie';
        var scoreasString = winer.tieScore.innerText;
        var scoreasInt = parseInt(scoreasString);
        scoreasInt += 1;
        winer.tieScore.innerText = scoreasInt.toString();
    }
    else if(computecanvas.computercanvas ==  "paper"){
        winer.win.innerText = "Lose";
        var scoreasloseString = winer.comScore.innerText;
        var scoreasloseInt = parseInt(scoreasloseString);
        scoreasloseInt += 1;
        winer.comScore.innerText = scoreasloseInt.toString();
    }
    else if(computecanvas.computercanvas == "scissor"){
        winer.win.innerText = "Win";
        var scoreaswinString = winer.myScore.innerText;
        var scoreaswinInt = parseInt(scoreaswinString);
        scoreaswinInt += 1;
        winer.myScore.innerText = scoreaswinInt.toString();
    }
    return {stone:stone, cresult:computecanvas.computercanvas};
}


function paperselect(){
    var canvas = mycanvas();
    var img = document.getElementById("paper");
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.drawImage(img,50,50,img.width,img.height);
    canvas.font = "20px Arial"
    canvas.fillStyle = "#7D7C7C";
    canvas.fillText("Paper",70,195);
    var computecanvas = computercanvas();
    var paper = "paper"
    var winer = winner();
    if(computecanvas.computercanvas == "paper"){
        winer.win.innerText = 'Tie';
        var scoreasString = winer.tieScore.innerText;
        var scoreasInt = parseInt(scoreasString);
        scoreasInt += 1;
        winer.tieScore.innerText = scoreasInt.toString();
    }
    else if(computecanvas.computercanvas ==  "scissor"){
        winer.win.innerText = "Lose";
        var scoreasloseString = winer.comScore.innerText;
        var scoreasloseInt = parseInt(scoreasloseString);
        scoreasloseInt += 1;
        winer.comScore.innerText = scoreasloseInt.toString();
    }
    else if(computecanvas.computercanvas == "stone"){
        winer.win.innerText = "Win";
        var scoreaswinString = winer.myScore.innerText;
        var scoreaswinInt = parseInt(scoreaswinString);
        scoreaswinInt += 1;
        winer.myScore.innerText = scoreaswinInt.toString();
    }
    return {paper:paper, cresult:computecanvas.computercanvas};
}


function scissorselect(){
    var canvas = mycanvas();
    var img = document.getElementById("scissor");
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.drawImage(img,50,50,img.width,img.height);
    canvas.font = "20px Arial"
    canvas.fillStyle = "#7D7C7C";
    canvas.fillText("Scissor",70,195);
    var computecanvas = computercanvas();
    var scissor = "scissor"
    var winer = winner();
    if(computecanvas.computercanvas == "scissor"){
        winer.win.innerText = 'Tie';
        var scoreasString = winer.tieScore.innerText;
        var scoreasInt = parseInt(scoreasString);
        scoreasInt += 1;
        winer.tieScore.innerText = scoreasInt.toString();
    }
    else if(computecanvas.computercanvas ==  "stone"){
        winer.win.innerText = "Lose";
        var scoreasloseString = winer.comScore.innerText;
        var scoreasloseInt = parseInt(scoreasloseString);
        scoreasloseInt += 1;
        winer.comScore.innerText = scoreasloseInt.toString();
        
    }
    else if(computecanvas.computercanvas == "paper"){
        winer.win.innerText = "Win";
        var scoreaswinString = winer.myScore.innerText;
        var scoreaswinInt = parseInt(scoreaswinString);
        scoreaswinInt += 1;
        winer.myScore.innerText = scoreaswinInt.toString(); 
    }
    return {scissor:scissor, cresult:computecanvas.computercanvas};
}


function computercanvas(){
    var canvas = document.getElementById("comCanvas");
    var ctx = canvas.getContext("2d");
    computerchoice = randomchoice();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = "20px Arial"
    ctx.fillStyle = "#7D7C7C";
    ctx.fillText(computerchoice.charAt(0).toUpperCase()+ computerchoice.slice(1),70,195);
    var img = document.getElementById(computerchoice);
    ctx.drawImage(img,50,50,img.width,img.height);
    return {ctx:ctx,computercanvas: computerchoice};
}


function randomchoice(){
    var comchoices = ['stone','paper','scissor'];
    var randomIndex = Math.floor(Math.random() * comchoices.length);
    return comchoices[randomIndex];
}


function winner(){
    var win = document.getElementById("winner");
    var myScore = document.getElementById("my-score");
    var comScore = document.getElementById("com-score")
    var tieScore = document.getElementById("tie-score");
    return {win:win, myScore:myScore, comScore:comScore, tieScore:tieScore};
}

function tieresult(){
        var scoreasString = winer.tieScore.innerText;
        var scoreasInt = parseInt(scoreasString);
        scoreasInt += 1;
        winer.tieScore.innerText = scoreasInt.toString();
}