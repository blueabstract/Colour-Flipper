const body=document.querySelector("body");

function changeColour(name){
    body.style.backgroundColor=name;
}

function randomColour(){
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);

    const color=`rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor=color;
}
randomColour()