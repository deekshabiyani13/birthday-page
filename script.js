function cutCake(){

document.getElementById("games").classList.remove("hidden")
document.getElementById("quiz").classList.remove("hidden")
document.getElementById("hearts").classList.remove("hidden")
document.getElementById("letter").classList.remove("hidden")
document.getElementById("gift").classList.remove("hidden")

alert("Let's celebrate Mannan's birthday 🎉")

}


function truth(){

let truths = [

"What's your favorite memory with me?",
"What do you love most about me?",
"When did you realize you loved me?"

]

let random = truths[Math.floor(Math.random()*truths.length)]

document.getElementById("gameResult").innerText = random

}


function dare(){

let dares = [

"Send me a cute selfie",
"Say 'I love you' in a funny voice",
"Give me a virtual hug 🤗"

]

let random = dares[Math.floor(Math.random()*dares.length)]

document.getElementById("gameResult").innerText = random

}



let score = 0

function checkAnswer(answer){

if(answer === "correct"){
score++
}

document.getElementById("quizResult").innerText =
"Your love score: " + score + " ❤️"

}



function openLetter(){

document.getElementById("loveMessage").innerText =

"Dear Mannan ❤️\n\nYou make my life happier every day.\nThank you for being the most special person in my life.\n\nHappy Birthday my love."

}


function openGift(){

document.getElementById("giftMessage").innerText =

"Your gift is unlimited hugs, kisses and love from me forever ❤️"

}