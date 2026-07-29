// ===============================
// CONFIGURACIÓN
// ===============================

const PASSWORD = "1632007";

const START_DATE = new Date("2026-05-10T00:00:00");

// ===============================
// ELEMENTOS
// ===============================

const loginScreen = document.getElementById("loadingScreen");

const mainPage = document.getElementById("mainPage");

const passwordInput = document.getElementById("password");

const error = document.getElementById("error");

const music = document.getElementById("music");

// ===============================
// ENTRAR
// ===============================

function checkPassword(){

if(passwordInput.value===PASSWORD){

loginScreen.style.opacity="0";

loginScreen.style.pointerEvents="none";

setTimeout(()=>{

loginScreen.style.display="none";

mainPage.style.display="block";

music.pause();
music.currentTime = 0;
music.volume = 1;

music.play().then(() => {
    console.log("Music started");
}).catch((err) => {
    console.error("Music error:", err);
});

startCounter();

createHearts();

},1000);

}else{

error.innerHTML="❌ Contraseña incorrecta";

passwordInput.value="";

passwordInput.focus();

}

}

// ===============================
// ENTER
// ===============================

passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});

// ===============================
// BOTÓN
// ===============================

const loveButton=document.getElementById("loveButton");

loveButton.addEventListener("click",()=>{

loveButton.innerHTML="Siempre serás el amor de mi vida ❤️";

loveButton.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.1)"

},

{

transform:"scale(1)"

}

],{

duration:700

});

});
// ===============================
// CONTADOR
// ===============================

function startCounter(){

function updateCounter(){

const now = new Date();

let diff = now - START_DATE;

if(diff < 0){

document.getElementById("timer").innerHTML=
"<h2>❤️ Aún no ha llegado nuestro día ❤️</h2>";

return;

}

let totalSeconds=Math.floor(diff/1000);

let years=Math.floor(totalSeconds/(365.25*24*60*60));
totalSeconds%=Math.floor(365.25*24*60*60);

let months=Math.floor(totalSeconds/(30.44*24*60*60));
totalSeconds%=Math.floor(30.44*24*60*60);

let days=Math.floor(totalSeconds/(24*60*60));
totalSeconds%=86400;

let hours=Math.floor(totalSeconds/3600);
totalSeconds%=3600;

let minutes=Math.floor(totalSeconds/60);

let seconds=totalSeconds%60;

document.getElementById("timer").innerHTML=`

<div class="timeBox">
<span class="timeValue">${years}</span>
<span class="timeLabel">Años</span>
</div>

<div class="timeBox">
<span class="timeValue">${months}</span>
<span class="timeLabel">Meses</span>
</div>

<div class="timeBox">
<span class="timeValue">${days}</span>
<span class="timeLabel">Días</span>
</div>

<div class="timeBox">
<span class="timeValue">${hours}</span>
<span class="timeLabel">Horas</span>
</div>

<div class="timeBox">
<span class="timeValue">${minutes}</span>
<span class="timeLabel">Minutos</span>
</div>

<div class="timeBox">
<span class="timeValue">${seconds}</span>
<span class="timeLabel">Segundos</span>
</div>

`;

}

updateCounter();

setInterval(updateCounter,1000);

}

// ===============================
// CORAZONES
// ===============================

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*28)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

document.getElementById("backgroundHearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

},350);

}

// ===============================
// EFECTO FOTO
// ===============================

const photo=document.querySelector(".photoFrame");

photo.addEventListener("mousemove",()=>{

photo.style.transform="scale(1.03) rotate(-1deg)";

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="scale(1)";

});

// ===============================
// EFECTO CARTA
// ===============================

const letter=document.querySelector(".letter");

letter.style.opacity="0";

setTimeout(()=>{

letter.style.transition="2s";

letter.style.opacity="1";

},1200);

// ===============================
// SCROLL
// ===============================

window.onload=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
