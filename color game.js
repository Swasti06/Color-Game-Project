var numsquares=6;
var colors =generate(numsquares);
var pickedcolor=pickcolor();
var squares=document.querySelectorAll(".square");
var resetbutton=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var modebuttons=document.querySelectorAll(".mode");

for(var i=0; i<=modebuttons.length; i++){
    modebuttons[i].addEventListener("click",function(){
        modebuttons[0].classList.remove("selected");
        modebuttons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="EASY"){
            numsquares=3;
        }else{
            numsquares=6;
        };
        //using the ternary operator instead of the if else statements
        //this.textContent==="EASY" ? numsquares=3 : numsquares=6;

        reset();
    });
};

function reset(){
     //generating new colors
     colors=generate(numsquares);
     //picking one color
     pickedcolor=pickcolor();
     //matching display color with selected color
     colordisplay.textContent=pickedcolor;
     messagedisplay.textContent="";
     resetbutton.textContent="NEW GAME";
     //changing those 6 new colors
     for(var i=0;i<squares.length;i++){
        if (colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
        
     }
     h1.style.backgroundColor="steelblue";
}

//easybtn.classList.add("selected");
//    easybtn.addEventListener("click",function(){
//    hardbtn.classList.remove("selected");
//    numsquares=3;
//    colors=generate(3);
//    pickedcolor=pickcolor();
//    colordisplay.textContent=pickedcolor;
//        if (colors[i]){
//            squares[i].style.backgroundColor=colors[i];
//        }else{
//            squares[i].style.display="none";
//        }
//    }
//});

//hardbtn.addEventListener("click",function(){
//    easybtn.classList.remove("selected");
//    hardbtn.classList.add("selected");
//    colors=generate(6);
//    numsquares=6;
//    pickedcolor=pickcolor();
//    colordisplay.textContent=pickedcolor;
//  for(var i=0;i<squares.length;i++){
//            squares[i].style.backgroundColor=colors[i];
//            squares[i].style.display="block";
//    }

//})

//resetbutton.addEventListener("click",function(){
//    //generating new colors
//    colors=generate(numsquares);
//    //picking one color
//    pickedcolor=pickcolor();
//    //matching display color with selected color
//    colordisplay.textContent=pickedcolor;
//    messagedisplay.textContent="";
//    this.textContent="NEW GAME";
//    //changing those 6 new colors
//    for(var i=0;i<squares.length;i++){
//        squares[i].style.backgroundColor=colors[i];
//   }
//   h1.style.backgroundColor="steelblue";
//})

var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;

var messagedisplay=document.querySelector("#message");

for( i=0 ; i < squares.length ; i++ ){
    //adding initial bg color to the squares
    squares[i].style.backgroundColor=colors[i];

    //adding click listener to the squares
    squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor;
        
        if(clickedcolor === pickedcolor){
            messagedisplay.textContent="correct!!!";
            changecolors(clickedcolor);
            resetbutton.textContent="Play Again?";
            h1.style.backgroundColor=clickedcolor;
        }
        else{
            this.style.backgroundColor="#232323";
            messagedisplay.textContent="Try Again";
        };
    });
}

function changecolors(color){
    for( i=0 ; i < squares.length ; i++ ){
        squares[i].style.backgroundColor=color;
    }
}


function pickcolor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}


function generate(num){
    var arr=[];
    for (var i=0;i<num;i++){
        arr.push(randomcolor());

    }
    return arr;
}

function randomcolor(){
    //amount of red
    var r = Math.floor(Math.random()*256);
    //amount of green
    var g = Math.floor(Math.random()*256);
    //amount of blue
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}




