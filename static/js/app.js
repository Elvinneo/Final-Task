
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
if(articleoptions){
    articleoptions.addEventListener("click",addClass)
}


function addClass(e){
    console.log(e.target)
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
let arrowleft= document.getElementById("arrowleft")
let arrowright= document.getElementById("arrowright")

let happyClientsCount=6
let startcount=1


if(arrows){
    arrowleft.addEventListener("click",less)
    arrowright.addEventListener("click",more)
    arrowleft=arrowleft.firstElementChild
    arrowright=arrowright.lastElementChild
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
let signupbuttons=document.querySelectorAll(".signupButton")
let loginbuttons=document.querySelectorAll(".loginButton")
let signupOverlay=document.getElementById("signupOverlay")
let signinOverlay=document.getElementById("signinOverlay")
let forgotoverlay=document.getElementById("forgotOverlay")
let forgotVerify=document.getElementById("forgotVerifyOverlay")
let newPasswordOverlay=document.getElementById("newPasswordOverlay")
let successOverlay=document.getElementById("successOverlay")




if (signupbuttons){
    signupbuttons.forEach(signupbutton=>{
        signupbutton.addEventListener("click",signup)
    })
}
if (loginbuttons){
    loginbuttons.forEach(loginbutton=>{
        loginbutton.addEventListener("click",login)
    })
}

function closewindow(){
    overlays.forEach(overlay =>
        {overlay.style.display="none"}
    );
}

function signup(){
    closewindow()
    overlays[0].style.display="flex"
    signupOverlay.innerHTML=signupHtmlContent
    document.getElementById("signuplogin").addEventListener("click",login)
    document.querySelectorAll(".close").forEach(closeoverlay =>{closeoverlay.addEventListener('click',closewindow)})
}

function login(){
    closewindow()
    overlays[1].style.display="flex"
    signinOverlay.innerHTML=loginHtmlContent
    document.querySelectorAll(".close").forEach(closeoverlay =>{closeoverlay.addEventListener('click',closewindow)})
    document.getElementById("forgotpassword").addEventListener("click",iforgotpassword)
    document.querySelectorAll(".eye").forEach(eye=>{eye.addEventListener("mousedown",textviewer)})
    document.querySelectorAll(".eye").forEach(eye=>{eye.addEventListener("mouseup",passwordviewer)})
}

function iforgotpassword(){
    closewindow()
    overlays[2].style.display="flex"
    forgotoverlay.innerHTML=forgotHtmlContent
    document.querySelectorAll(".close").forEach(closeoverlay =>{closeoverlay.addEventListener('click',closewindow)})
    document.getElementById("forgotnext").addEventListener("click",forgotnext)
}

function forgotnext(){
    closewindow()
    overlays[3].style.display="flex"
    forgotVerify.innerHTML=verifyHtmlContent
    document.querySelectorAll(".close").forEach(closeoverlay =>{closeoverlay.addEventListener('click',closewindow)})
    document.getElementById("forgotVerifyNext").addEventListener("click",verifypass)
}

function verifypass(){
    closewindow()
    overlays[4].style.display="flex"
    newPasswordOverlay.innerHTML=newPasswordHtmlContent
    document.querySelectorAll(".close").forEach(closeoverlay =>{closeoverlay.addEventListener('click',closewindow)})
    document.getElementById("NewPasswordNext").addEventListener("click",createpass)
}

function createpass(){
    closewindow()
    overlays[5].style.display="flex"
    successOverlay.innerHTML=successHtmlContent
    document.querySelectorAll(".eye").forEach(eye=>{eye.addEventListener("mousedown",textviewer)})
    document.querySelectorAll(".eye").forEach(eye=>{eye.addEventListener("mouseup",passwordviewer)})
    document.querySelectorAll(".close").forEach(closeoverlay =>{closeoverlay.addEventListener('click',closewindow)})
}


function textviewer(e){
    console.log(e.target.parentElement)
    e.target.parentElement.nextElementSibling.nextElementSibling.type="text"
    
}
function passwordviewer(e){
    console.log(e.target.parentElement)
    e.target.parentElement.nextElementSibling.nextElementSibling.type="password"
}


/*-----------------------------------------------Overlays--Signin----------------------------------------------------*/

let passes=document.querySelectorAll(".pass")
let next = document.getElementById("forgotnext")
let characterverifies=document.querySelectorAll(".characterverify")
let verifycode=[]


if(characterverifies){
    characterverifies.forEach(characterverify =>{characterverify.addEventListener('change',changetype)})
}

function changetype(e){
    e.target.type="password"
    // e.target.nextElementByTabIndex.focus();
    console.log(e.target.value)
}



let loginHtmlContent = `
<div class="signinmain">
    <div class="close">
        <img src="/static/media/close.svg" alt="Close button">
    </div>
    <div class="signinicon">
        <i><img src="/static/media/heartblack.png" alt="Heart Icon"></i>
        <span id="bulk">Bulk</span>
        <span id="ing">ing</span>
    </div>
    <div class="signincontent">
        <div class="signinheader">
            <h2>Hey there, welcome back!</h2>
        </div>
        <div class="signinform">
            <form action="" method="post">
                <div class="mailzone">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" name="mail" required>
                </div>
                <div class="passwordzone">
                    <div class="eye">
                        <img id="eye" src="/static/media/eye-slash.svg" alt="Show/Hide password">
                    </div>
                    <label for="password">Password</label>
                    <input class="pass" type="password" id="password" placeholder="Enter your password" name="password" required>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        <div class="forgotpassword">
            <h2 id="forgotpassword">Forgot Password?</h2>
        </div>
    </div>
</div>`;


let signupHtmlContent =
 `
<div class="signupmain">
    <div class="signupcontainer">
        <div class="close">
            <img src="/static/media/close.svg" alt="Close button">
        </div>
        <div class="signupicon">
            <i><img src="/static/media/heartblack.png" alt="Heart Icon"></i>
            <span id="bulk">Bulk</span>
            <span id="ing">ing</span>
        </div>
        <div class="signupheader">
            <span id="work">Welcome to Work</span>
            <span id="out">out</span>
        </div>
        <div class="signupbuttons">
            <button id="withgoogle">
                <img src="/static/media/google.svg" alt="Google Logo">
                <span>Continue with Google</span>
            </button>
            <button id="withapple">
                <img src="/static/media/apple.svg" alt="Apple Logo">
                <span>Continue with Apple</span>
            </button>
        </div>
        <div class="orsignup">
            <hr><span>Or Sign Up with</span><hr>
        </div>
        <div class="signupform">
            <p>Email</p>
            <form id="signupmailform" action="" method="post">
                <input type="email" id="mailarea" placeholder="Enter your email" required>
                <button id="signupcontinue" type="submit">Continue</button>
            </form>
        </div>
        <div class="terms">
            <span>I agree to Claraa</span>
            <a href="#">Terms of Use</a>
            <span>and</span>
            <a href="#">Privacy Policy</a>
        </div>
        <div class="reguestlogin">
            <span>Already have an account?</span>
            <a href="#" id="signuplogin">Log In</a>
        </div>
    </div>
</div>`;



    let forgotHtmlContent = `
    <div class="forgotmain">
        <div class="close">
            <img src="/static/media/close.svg" alt="Close button">
        </div>
        <div class="signinicon">
            <i><img src="/static/media/heartblack.png" alt="Heart Icon"></i>
            <span id="bulk">Bulk</span>
            <span id="ing">ing</span>
        </div>
        <div class="forgotcontent">
            <div class="forgotheader">
                <h2>Reset Password</h2>
                <p>Recover your account password</p>
            </div>
            <div class="forgotform">
                <form id="forgotmailform" action="/reset-password" method="post">
                    <label for="forgotmailarea">Email</label>
                    <input type="email" id="forgotmailarea" name="mailarea" placeholder="Enter your email" required>
                    <button id="forgotnext" type="submit">Next</button>
                </form>
            </div>
        </div>
    </div>`;
    
    let verifyHtmlContent = `
       <div class="forgotVerify">
        <div class="close"><img src="/static/media/close.svg" alt=""></div>
        <div class="signinicon">
            <i><img src="/static/media/heartblack.png" alt=""></i>
            <span id="bulk">Bulk</span>
            <span id="ing">ing</span>
        </div>
        <div class="forgotVerifycontent">
            <div class="forgotVerifyheader">
                <h2>Enter your verification code</h2>
                <p>We texted your code to tranm••••••••••••@gm•••.com</p>
            </div>
            <div class="forgotVerifyform">
                <form id="forgotVerifypasswordform" action="">
                    <div class="verifypass">
                        <div class="characterverify"><input type="text" maxlength="1" tabindex="0"></div>
                        <div class="characterverify"><input type="text" maxlength="1" tabindex="1"></div>
                        <div class="characterverify"><input type="text" maxlength="1" tabindex="2"></div>
                        <div class="characterverify"><input type="text" maxlength="1" tabindex="3"></div>
                        <div class="characterverify"><input type="text" maxlength="1" tabindex="4"></div>
                        <div class="characterverify"><input type="text" maxlength="1" tabindex="5"></div>
                    </div>
                    <button id='forgotVerifyNext' type="submit">Next</button>
                    <div class="resendbutton">
                        <a href="">Resend</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `

let newPasswordHtmlContent=`    <div class="forgotVerify">
        <div class="close"><img src="/static/media/close.svg" alt=""></div>
        <div class="signinicon">
            <i><img src="/static/media/heartblack.png" alt=""></i>
            <span id="bulk">Bulk</span>
            <span id="ing">ing</span>
        </div>
        <div class="newPasswordContent">
            <div class="forgotVerifyheader">
                <h2>Create New Password</h2>
            </div>
            <div class="newPasswordform">
                <form action="">
                    <div class="passwordzone">
                        <div class="eye" id="passeye">
                            <img src="/static/media/eye-slash.svg" alt="">
                        </div>
                        <label for="oldpass">Password</label>
                        <input class="pass" type="password" placeholder="Enter your password"
                            name="oldpass">
                        <div class="eye" id="newpasseye">
                            <img src="/static/media/eye-slash.svg" alt="">
                        </div>
                        <label for="oldpass">Password</label>
                        <input class="pass" type="password" placeholder="Enter your password"
                            name="newpass">
                    </div>
                    <button id='NewPasswordNext' type="submit">Next</button>
                </form>
            </div>
        </div>
    </div>
`

let successHtmlContent =
`<div class="successcontent">
        <div class="successscontainer">
        <div class="close"><img src="/static/media/close.svg" alt=""></div>
        <div class="successImage">
            <img src="/static/media/tick-circle.svg" alt="">
        </div>
        <div class="newPasswordform">
            <div class="successheader">
                <h2>Success!</h2>
                <p>Your password is succesfully created</p>
            </div>
            <form action="">
                <button id='successContinue' type="submit">Continue</button>
            </form>
        </div>
    </div>
</div>`