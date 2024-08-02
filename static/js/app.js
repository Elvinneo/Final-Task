
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
        nav.style.padding = "15px 0px"
        test=false;
    }else{
        nav.style.padding = "15px 0px 70px"
        test=true
    }

}

let articleoptions=document.getElementById("articleoptions")

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
/*-----------------------------------------------Overlays--Signup----------------------------------------------------*/

let overlays=document.querySelectorAll(".overlay")
let closeoverlays=document.querySelectorAll(".close")
let signupbutton=document.getElementById("signup")

let signupOverlay=document.getElementById("signupOverlay")
let signuplogin = document.getElementById("signuplogin")

if (signuplogin){
    signuplogin.addEventListener("click",signin)
}

if (signupbutton){
    signupbutton.addEventListener("click",signup)
}

function signup(){
    closewindow()
    signupOverlay.style.display = 'flex';
}


if (closeoverlays){
    closeoverlays.forEach(closeoverlay =>
        {closeoverlay.addEventListener('click',closewindow)}
    );
}

function closewindow(){
    overlays.forEach(overlay =>
        {overlay.style.display="none"}
    );
}

/*-----------------------------------------------Overlays--Signin----------------------------------------------------*/
let signinOverlay=document.getElementById("signinOverlay")
let signinbutton=document.getElementById("login")
let eye=document.getElementById("eye")
let pass=document.getElementById("pass")


if (eye){
    eye.addEventListener("mousedown",textviewer)
    eye.addEventListener("mouseup",passwordviewer)
}

if (signinbutton){
    signinbutton.addEventListener("click",signin)
}


function signin(){
    closewindow()
    signinOverlay.style.display = 'flex';
}

function textviewer(){
    pass.type='text'
}
function passwordviewer(){
    pass.type='password'
}


/*-----------------------------------------------Overlays Forgot password----------------------------------------------------*/

let forgotoverlay=document.getElementById("forgotOverlay")
let forgot = document.getElementById("forgotpassword")

if(forgot){
    forgot.addEventListener('click',iforgotpassword)
}

function iforgotpassword(){
    closewindow()
    forgotoverlay.style.display = 'flex';

}

/*-----------------------------------------------Overlays Forgot Verify--------------------------------------------*/

let forgotVerify=document.getElementById("forgotVerifyOverlay")
let next = document.getElementById("forgotnext")

if(next){
    next.addEventListener('click',forgotnext)
}

function forgotnext(){
    closewindow()
    forgotVerify.style.display = 'flex';
}

    


