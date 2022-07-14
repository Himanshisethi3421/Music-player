var play=document.querySelector("#play");
var pause=document.querySelector("#pause");
var prev=document.querySelector("#prev");
var next=document.querySelector("#next");
var nmsng=document.querySelector("#nmsng");
var nmart=document.querySelector("#nmart");
var cirlce=document.querySelector("#circle");
var songs=document.querySelectorAll('audio');
var rgtbtn=document.querySelector(".rgtbtn");
var CurrentPlayingSongIndex=0;
var right=document.querySelector("#right");

var jhanda=0;
play.addEventListener('click',function(){
    
    if(jhanda===0){
        songs[CurrentPlayingSongIndex].play();
        jhanda=1;
        play.style.backgroundImage="url(pause.png)";
    
    }
    else{
        songs[CurrentPlayingSongIndex].pause();
        jhanda=0;
        play.style.backgroundImage="url(play.png)";
    }
    
})
var i=0;var s=1;
next.addEventListener("click",function(){
    play.style.backgroundImage="url(pause.png)";
    songs[i+1].play();
    songs[i].pause();
    songs[i].currentTime=0;
    // if(s===1){
    //     nmsng.textContent="Baatien Karo";
    //     nmart.textContent="Vayu";
    // }
    if(s===1)
    {
        cirlce.style.backgroundImage="url(Bsimg.jpg)";
        nmsng.textContent="Baarieshien";
        nmart.textContent="Anuv Jain";
    }
    else if(s===2){
        cirlce.style.backgroundImage="url(MMimg.jpg)";
        nmsng.textContent="Make You Mine";
        nmart.textContent="Public";
    }
    else if(s===3)
    {
        cirlce.style.backgroundImage="url(KSimg.jpg)";
        nmsng.textContent="Kinna Sona";
        nmart.textContent="Sunil Kamath";
    }
    else if(s===4){
        cirlce.style.backgroundImage="url(Da.jpg)";
        nmsng.textContent="Darasal";
        nmart.textContent="Atif Aslam";
    }
    s++;
    i++;
})
    
prev.addEventListener("click",function(){
    play.style.backgroundImage="url(pause.png)";
    songs[i-1].play();
    songs[i].pause();   songs[i].currentTime=0;
    if(s===3){
        cirlce.style.backgroundImage="url(Bsimg.jpg)";
        nmsng.textContent="Baarieshien";
        nmart.textContent="Anuv Jain";
    }
    else if(s===2)
    {
        cirlce.style.backgroundImage="url(BKimg.jpg)";
        nmsng.textContent="Baatien Karo";
        nmart.textContent="Vayu";
    }
    else if(s===5)
    {
        cirlce.style.backgroundImage="url(KSimg.jpg)";
        nmsng.textContent="Kinna Sona";
        nmart.textContent="Sunil Kamath";
    }
    else if(s===4){
        cirlce.style.backgroundImage="url(MMimg.jpg)";
        nmsng.textContent="Make You Mine";
        nmart.textContent="Public";
    }
    // else if(s===5){
    //     cirlce.style.backgroundImage="url(Da.jpg)";
    //     nmsng.textContent="Darasal";
    //     nmart.textContent="Atif Aslam";
    // }
    i--;s--;
})

function showSongs(){
    var temp=``;
    songs.forEach(function(val,index){
        // console.log("hey");
        temp+=`<div id="songa">
        <h3 id="nmsng">${val.getAttribute("src")}</h3>
        <h3 id="nmart">Vayu</h3>
           <button id="${index}">Play</button>
       </div>`
       
    })
    document.querySelector("#songls").innerHTML=temp;
    
}


function startsong(indexofsong){
     songs[indexofsong].play();
}
function stopsong(indexofsong){
    songs[indexofsong].pause();
    songs[indexofsong].currentTime=0;
}

right.addEventListener("click",function(dets){
    
    var SelectedSong=Number(dets.target.id);

stopsong(CurrentPlayingSongIndex);
startsong(SelectedSong);
CurrentPlayingSongIndex=SelectedSong;
showdata(CurrentPlayingSongIndex);    
changeimg(CurrentPlayingSongIndex);
})

var nmsng=document.querySelector("#nmsng");

showSongs();
var circle=document.querySelector("#circle");
var arrimg=['BKimg','Bsimg','MMimg','KSimg'];

function changeimg(val){
    circle.style.backgroundImage=`url(${arrimg[val]}).jpg`;
}

function showdata(){    
         nmsng.textContent=songs[CurrentPlayingSongIndex].getAttribute("src");
        
}





