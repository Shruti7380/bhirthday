// ===== Secret PIN =====
const correctPIN = "2024";

// ===== Floating Hearts =====
const heartContainer = document.querySelector(".floating-hearts");

if (heartContainer) {

    setInterval(() => {

        const heart = document.createElement("span");

        const hearts = ["💖","💕","💗","💝","💓","💞","❤️"];

        heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left = Math.random()*100 + "%";

        heart.style.animationDuration = (8 + Math.random()*5) + "s";

        heart.style.fontSize = (20 + Math.random()*20) + "px";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },13000);

    },500);

}

// ===== PIN Check =====

function checkPassword(){

    let pass=document.getElementById("password").value;

    if(pass===correctPIN){

        document.getElementById("error").style.color="green";

        document.getElementById("error").innerHTML="Opening Surprise... 💖";

        setTimeout(()=>{

            window.location.href="birthday.html";

        },1200);

    }

    else{

        document.getElementById("error").style.color="red";

        document.getElementById("error").innerHTML="Wrong PIN ❤️";

    }

}

// ===== Typing Animation =====

function typeMessage(text,id,speed=40){

    let i=0;

    document.getElementById(id).innerHTML="";

    function typing(){

        if(i<text.length){

            document.getElementById(id).innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}

// ===== Gift =====

function openGift(){

    // startConfetti();

    document.getElementById("giftBox").style.display="none";
    document.getElementById("giftText").style.display="none";
    document.getElementById("letter").style.display="block";

    const msg=`Happy Birthday Bestie ❤️

Thank you for always being there for me.

You are one of the most special people in my life.

May your life always be filled with happiness, laughter, success and endless smiles.

I hope all your dreams come true.

Love You Forever 💖`;

    typeMessage(msg,"typingText",40);

}
