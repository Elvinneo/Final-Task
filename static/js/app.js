let menu = document.querySelector(".drop").childNodes[1]
let dropmenu=document.getElementById("dropmenu")
let nav=document.querySelector("nav")
let articleoptions=document.getElementById("articleoptions")


articleoptions.addEventListener('click',addClass)

function addClass(e){
    for(i=0;i<=7;i++){
        if(i%2!==0){
            articleoptions.childNodes[i].classList.remove("active")
        }
    }
    e.preventDefault()
    e.target.classList.add("active")

}

let test=true
menu.addEventListener('click',openMenu)


function openMenu(){
    dropmenu.classList.toggle("Show")
    if (test) {
        nav.style.padding = "15px 0px 100px"
        test=false;
    }else{
        nav.style.padding = "15px 0px 70px"
        test=true
    }

}