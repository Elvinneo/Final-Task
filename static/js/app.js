
let menu = document.querySelector(".drop").childNodes[1]
let dropmenu=document.getElementById("dropmenu")
let nav=document.querySelector("nav")
let test=true

if (menu){
    menu.addEventListener('click',openMenu)
}

function openMenu(){
    dropmenu.classList.toggle("Show")
    if (test) {
        nav.style.padding = "15px 0px 150px"
        test=false;
    }else{
        nav.style.padding = "15px 0px 70px"
        test=true
    }

}


let articleoptions=document.getElementById("articleoptions")

if (articleoptions){
    articleoptions.addEventListener('click',addClass)
}


function addClass(e){
    for(i=0;i<=7;i++){
        if(i%2!==0){
            articleoptions.childNodes[i].classList.remove("active")
        }
    }
    e.preventDefault()
    e.target.classList.add("active")

}


window.addEventListener("resize",resize)

function resize(){
    if(window.innerWidth>1000){
        dropmenu.classList.remove("Show")
    }

}


/* ---------------------------------------Happy clients-----------------------------------------------------*/

let arrows= document.getElementById("arrows")
let arrowleft= document.getElementById("arrowleft").firstElementChild
let arrowright= document.getElementById("arrowright").lastElementChild

let happyClientsCount=6
let startcount=1

if(arrows){
    arrowleft.addEventListener("click",less)
    arrowright.addEventListener("click",more)
}

function testarrow(){
    if (startcount === 1){
        arrowleft.classList.remove("activearrow")
        arrowleft.classList.add("passivearrow")
        arrowright.classList.remove("passivearrow")
        arrowright.classList.add("activearrow")
    }
    else if(startcount > 1 && startcount < happyClientsCount){
        arrowright.classList.remove("passivearrow")
        arrowright.classList.add("activearrow")
        arrowleft.classList.remove("passivearrow")
        arrowleft.classList.add("activearrow")
    }
    else if(startcount === happyClientsCount){
        arrowleft.classList.remove("passivearrow")
        arrowleft.classList.add("activearrow")
        arrowright.classList.add("passivearrow")
        arrowright.classList.remove("activearrow")
    }

}
function pagecontrol(){
    if (startcount<=3){
    for(i=3;i<=7;i+=2){
        arrows.childNodes[i].firstElementChild.classList.remove("rectangle")
        arrows.childNodes[i].firstElementChild.classList.add("ellipse")
    }
        arrows.childNodes[startcount+(startcount+1)].firstElementChild.classList.remove("ellipse")
        arrows.childNodes[startcount+(startcount+1)].firstElementChild.classList.add("rectangle")
    }
}

function less(){
    testarrow()
    if (startcount > 1){
        startcount--
        testarrow()
        pagecontrol()
    }
}

function more(){
    testarrow()
    if (startcount < happyClientsCount){
        startcount++
        testarrow()
        pagecontrol()
    }
}