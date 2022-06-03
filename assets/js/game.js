console.log("Game Loaded");
function Credits()
{
    
    var modal = document.getElementById("myModal2");
    modal.style.display = "block";
}

function CloseCredits()
{
   
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";
}

function Score()
{
    
    var modal = document.getElementById("myModal");
    UpdateScoreBoard2();
    modal.style.display = "block";
}

function CloseScore()
{
   
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
var chance =0;

const ARRAY_LENGTH = 19;
var PLAYER =0;
var playsong=true;
var area=0;

var scores =[0,0,0,0,0,0];
var name1 ="A";
var name2 ="B";
var name3 = "c";
var name4 = "D";

var nameI =["A","A","B","C","D"];


var arr = [ARRAY_LENGTH];
for( a=0;a<ARRAY_LENGTH;a++)
arr[a] = new Array(ARRAY_LENGTH);
for(a=0;a<ARRAY_LENGTH;a++)
    for(b=0;b<ARRAY_LENGTH;b++)
    arr[a][b]=0;


document.addEventListener('DOMContentLoaded',init);
function init()
{
    UpdateKing();
    document.getElementById("mainGame").style.display="none";
    document.getElementById("winFlex").style.display="none";
}

function quit()
{
    let text="Are you Sure you want to quit ?";
    if(confirm(text))
    {
        window.location.replace("index.html");
    }
   
}
function reload()
{
    if(confirm("Are you Sure you want to Reload ?"))
    {
        location.reload();
    }
}
function playTheme()
{

    if(playsong)
    {
        document.getElementById("theme").pause();
        playsong=false;

    }
    else
    {
        document.getElementById("theme").play();
        playsong=true;
    }
    
}

function startGame()
{
    
    document.getElementById("Card1").style.display="none";
    document.getElementById("Card2").style.display="none";
    document.getElementById("Card3").style.display="none";
    document.getElementById("Card4").style.display="none";
    document.getElementById("Cardb1").style.display="none";
    document.getElementById("Cardb2").style.display="none";
    document.getElementById("Cardb3").style.display="none";
    document.getElementById("Cardb4").style.display="none";
    document.getElementById("GCardb1").style.display="none";
    document.getElementById("GCardb2").style.display="none";
    document.getElementById("GCardb3").style.display="none";
    document.getElementById("GCardb4").style.display="none";
    name1 =""+document.getElementById("nameI1").value;
    if(name1.length>0)
    {
        nameI[1]=name1[0];
        document.getElementById("name1").innerHTML=""+name1;
        document.getElementById("Card1").style.display="block";

        document.getElementById("nameb1").innerHTML=""+name1;
        document.getElementById("Cardb1").style.display="block";

        document.getElementById("Gnameb1").innerHTML=""+name1;
        document.getElementById("GCardb1").style.display="block";
        PLAYER++;
    }
    name2 =""+document.getElementById("nameI2").value;
    if(name2.length>0)
    {
        nameI[2]=name2[0];
        document.getElementById("name2").innerHTML=""+name2;
        document.getElementById("Card2").style.display="block";

        document.getElementById("nameb2").innerHTML=""+name2;
        document.getElementById("Cardb2").style.display="block";

        document.getElementById("Gnameb2").innerHTML=""+name2;
        document.getElementById("GCardb2").style.display="block";
        PLAYER++;
    }
    name3 =""+document.getElementById("nameI3").value;
    if(name3.length>0)
    {
        nameI[3]=name3[0];
        document.getElementById("name3").innerHTML=""+name3;
        document.getElementById("Card3").style.display="block";

        document.getElementById("nameb3").innerHTML=""+name3;
        document.getElementById("Cardb3").style.display="block";

        document.getElementById("Gnameb3").innerHTML=""+name3;
        document.getElementById("GCardb3").style.display="block";

        PLAYER++;
    }
    name4 =""+document.getElementById("nameI4").value;
    if(name4.length>0)
    {
        document.getElementById("name4").innerHTML=""+name4;
        document.getElementById("Card4").style.display="block";

        document.getElementById("nameb4").innerHTML=""+name4;
        document.getElementById("Cardb4").style.display="block";

        document.getElementById("Gnameb4").innerHTML=""+name4;
        document.getElementById("GCardb4").style.display="block";
        nameI[4]=name4[0];
        PLAYER++;
    }
    if(PLAYER>1)
    {
        document.getElementById("enter").style.display="none";
        document.getElementById("mainGame").style.display="block";
        document.getElementById("theme").play();
    }
    else
    {
        alert("Enter names");
        return 0;
    }
    
    
    UpdateChance();
    nextChance();
}

function clickBtn(a,b)
{
    if(arr[a][b]==1) return 0;
    arr[a][b]=1;
    player = chance+1;
    document.getElementById("btn_"+a+"_"+b).classList.add("btn_player"+player);


    var win = false;

    if(a%2==0)
    {
        if(checkUp(a,b))
        {
            win = true;
            fillUp(a,b);
            scores[player]++;
            area++;
        }
        if(checkDown(a,b))
        {
            win = true;
            fillDown(a,b);
            scores[player]++;
            area++;
        }
    }
    else
    {
        if(CheckLeft(a,b))
        {
            win = true;
            fillLeft(a,b);
            scores[player]++;
            area++;
            
        }
        if(CheckRight(a,b)) 
        {
            win = true;
            fillRight(a,b);
            scores[player]++;
            area++;
            
        }
    }
    if(!win)
    {
        UpdateChance();
        nextChance();
    }
    else
    {
        
        checkGameOver();
    }
    UpdateScore();
    UpdateKing();
    
    // console.log(a+" "+b);
}

function checkGameOver()
{
    if(area==81)
    {
        
        // alert("Game Over");
        
        // startConfetti();
        UpdateScoreBoard2();
        document.getElementById("mainGame").style.display="none";
        document.getElementById("winFlex").style.display="block";
    }
}

function checkUp(a,b)
{
    a--;
    if(check(a,b-1))
        if(check(a,b+1))
            if(check(a-1,b))
                return true;
}

function checkDown(a,b)
{
    a++;
    if(check(a,b-1))
        if(check(a,b+1))
            if(check(a+1,b))
                return true;
}

function CheckLeft(a,b)
{
    b--;
    if(check(a+1,b))
        if(check(a-1,b))
            if(check(a,b-1))
                return true;
}

function CheckRight(a,b)
{
    b++;
    if(check(a+1,b))
        if(check(a-1,b))
            if(check(a,b+1))
                return true;
}

function check(a,b)
{
    if(a>=0 && a< ARRAY_LENGTH)
        if(b>=0 && b<ARRAY_LENGTH)
            if(arr[a][b]==1)
                return true;
    return false;
}


function fillLeft(a,b)
{
    player=chance+1;
    document.getElementById("box_"+a+"_"+(b-1)).classList.add("box"+player);
    document.getElementById("box_"+a+"_"+(b-1)).innerHTML=nameI[player]; 
    UpdateBtn(a+1,b-1);
    UpdateBtn(a-1,b-1);
    UpdateBtn(a,b-2);
   
}


function fillRight(a,b)
{
    player=chance+1;
    document.getElementById("box_"+a+"_"+(b+1)).classList.add("box"+player);
    document.getElementById("box_"+a+"_"+(b+1)).innerHTML=nameI[player];
    UpdateBtn(a+1,b+1);
    UpdateBtn(a-1,b+1);
    UpdateBtn(a,b+2);
}


function fillUp(a,b)
{
    player=chance+1;
    document.getElementById("box_"+(a-1)+"_"+b).classList.add("box"+player);
    document.getElementById("box_"+(a-1)+"_"+(b)).innerHTML=nameI[player];
    UpdateBtn(a-1,b-1);
    UpdateBtn(a-1,b+1);
    UpdateBtn(a-2,b);
}
function fillDown(a,b)
{
    player=chance+1;
    document.getElementById("box_"+(a+1)+"_"+b).classList.add("box"+player);
    document.getElementById("box_"+(a+1)+"_"+(b)).innerHTML=nameI[player];
    UpdateBtn(a+1,b-1);
    UpdateBtn(a+1,b+1);
    UpdateBtn(a+2,b);
}




function nextChance()
{
    // chance++;
    // chance=chance%PLAYER;
    if(PLAYER<1) return 0;
    while(true)
    {
        chance++;
        chance=chance%4;
        if(isPlayerPreset(chance+1))
        break;
        
    }

}
function isPlayerPreset(x)
{
    if(x==1 && name1.length>0) return true;
    if(x==2 && name2.length>0) return true;
    if(x==3 && name3.length>0) return true;
    if(x==4 && name4.length>0) return true;
    return false;
}
function UpdateKing()
{
    if(scores[1]> scores[2] && scores[1] > scores[3] && scores[1]> scores[4])
    {
        document.getElementById("king1").style.display="inline";
        document.getElementById("king2").style.display="none";
        document.getElementById("king3").style.display="none";
        document.getElementById("king4").style.display="none";
    }
    else if(scores[2]> scores[1] && scores[2] > scores[3] && scores[2]> scores[4])
    {
        document.getElementById("king1").style.display="none";
        document.getElementById("king2").style.display="inline";
        document.getElementById("king3").style.display="none";
        document.getElementById("king4").style.display="none";
    }
    else if(scores[3]> scores[1] && scores[3] > scores[2] && scores[3]> scores[4])
    {
        document.getElementById("king1").style.display="none";
        document.getElementById("king2").style.display="none";
        document.getElementById("king3").style.display="inline";
        document.getElementById("king4").style.display="none";
    }
    else if(scores[4]> scores[1] && scores[4] > scores[3] && scores[4]> scores[1])
    {
        document.getElementById("king1").style.display="none";
        document.getElementById("king2").style.display="none";
        document.getElementById("king3").style.display="none";
        document.getElementById("king4").style.display="inline";
    }
    else
    {
        document.getElementById("king1").style.display="none";
        document.getElementById("king2").style.display="none";
        document.getElementById("king3").style.display="none";
        document.getElementById("king4").style.display="none";
    }
}
function UpdateScore()
{
    document.getElementById("score1").innerHTML=""+scores[1];
    document.getElementById("score2").innerHTML=""+scores[2];
    document.getElementById("score3").innerHTML=""+scores[3];
    document.getElementById("score4").innerHTML=""+scores[4];
}
function UpdateBtn(a,b)
{
    document.getElementById("btn_"+(a)+"_"+(b)).classList.remove("btn_player1");
    document.getElementById("btn_"+(a)+"_"+(b)).classList.remove("btn_player2");
    document.getElementById("btn_"+(a)+"_"+(b)).classList.remove("btn_player3");
    document.getElementById("btn_"+(a)+"_"+(b)).classList.remove("btn_player4");
    document.getElementById("btn_"+(a)+"_"+(b)).classList.add("btn_player"+player);

}
function UpdateChance()
{

    player = chance+1;
    document.getElementById("Card"+player).classList.remove("pls"+player);   
    document.getElementById("score"+player).classList.remove("pl"+player);
    // console.log("p"+player);
    while(true)
    {
        player++;
        
        player=player%(5);
        
        if(isPlayerPreset(player))
        break;
        
        
    }
    // if(player>(PLAYER+1)) player =1;
    document.getElementById("Card"+player).classList.add("pls"+player);
    document.getElementById("score"+player).classList.add("pl"+player);
}

function UpdateScoreBoard2()
{
   
    if(scores[1]> scores[2] && scores[1] > scores[3] && scores[1]> scores[4])
    {
        document.getElementById("kingb1").style.display="inline";
        document.getElementById("kingb2").style.display="none";
        document.getElementById("kingb3").style.display="none";
        document.getElementById("kingb4").style.display="none";
        document.getElementById("Gkingb1").style.display="inline";
        document.getElementById("Gkingb2").style.display="none";
        document.getElementById("Gkingb3").style.display="none";
        document.getElementById("Gkingb4").style.display="none";
    }
    else if(scores[2]> scores[1] && scores[2] > scores[3] && scores[2]> scores[4])
    {
        document.getElementById("kingb1").style.display="none";
        document.getElementById("kingb2").style.display="inline";
        document.getElementById("kingb3").style.display="none";
        document.getElementById("kingb4").style.display="none";
        document.getElementById("Gkingb1").style.display="none";
        document.getElementById("Gkingb2").style.display="inline";
        document.getElementById("Gkingb3").style.display="none";
        document.getElementById("Gkingb4").style.display="none";
    }
    else if(scores[3]> scores[1] && scores[3] > scores[2] && scores[3]> scores[4])
    {
        document.getElementById("kingb1").style.display="none";
        document.getElementById("kingb2").style.display="none";
        document.getElementById("kingb3").style.display="inline";
        document.getElementById("kingb4").style.display="none";
        document.getElementById("Gkingb1").style.display="none";
        document.getElementById("Gkingb2").style.display="none";
        document.getElementById("Gkingb3").style.display="inline";
        document.getElementById("Gkingb4").style.display="none";
    }
    else if(scores[4]> scores[1] && scores[4] > scores[3] && scores[4]> scores[1])
    {
        document.getElementById("kingb1").style.display="none";
        document.getElementById("kingb2").style.display="none";
        document.getElementById("kingb3").style.display="none";
        document.getElementById("kingb4").style.display="inline";

        document.getElementById("Gkingb1").style.display="none";
        document.getElementById("Gkingb2").style.display="none";
        document.getElementById("Gkingb3").style.display="none";
        document.getElementById("Gkingb4").style.display="inline";
    }
    else
    {
        document.getElementById("kingb1").style.display="none";
        document.getElementById("kingb2").style.display="none";
        document.getElementById("kingb3").style.display="none";
        document.getElementById("kingb4").style.display="none";

        document.getElementById("Gkingb1").style.display="none";
        document.getElementById("Gkingb2").style.display="none";
        document.getElementById("Gkingb3").style.display="none";
        document.getElementById("Gkingb4").style.display="none";
    }
    document.getElementById("scoreb1").innerHTML=""+scores[1];
    document.getElementById("scoreb2").innerHTML=""+scores[2];
    document.getElementById("scoreb3").innerHTML=""+scores[3];
    document.getElementById("scoreb4").innerHTML=""+scores[4];
    
    document.getElementById("nameb1").innerHTML=""+name1;
    document.getElementById("nameb2").innerHTML=""+name2;
    document.getElementById("nameb3").innerHTML=""+name3;
    document.getElementById("nameb4").innerHTML=""+name4;

    document.getElementById("Gscoreb1").innerHTML=""+scores[1];
    document.getElementById("Gscoreb2").innerHTML=""+scores[2];
    document.getElementById("Gscoreb3").innerHTML=""+scores[3];
    document.getElementById("Gscoreb4").innerHTML=""+scores[4];
    
    document.getElementById("Gnameb1").innerHTML=""+name1;
    document.getElementById("Gnameb2").innerHTML=""+name2;
    document.getElementById("Gnameb3").innerHTML=""+name3;
    document.getElementById("Gnameb4").innerHTML=""+name4;
    
}
