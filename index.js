var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (var i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var button1=this.innerHTML;
    makeSound(button1);
    buttonAnimation(button1);
});
}


document.addEventListener("keypress",function(){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var w = new Audio("sounds/crash.mp3");
            w.play();
        break;

        case "a":
            var a1 = new Audio("sounds/kick-bass.mp3");
            a1.play();
        break;

        case "s":
            var s2 = new Audio("sounds/snare.mp3");
            s2.play();
        break;

        case "d":
            var d3 = new Audio("sounds/tom-1.mp3");
            d3.play();
        break;

        case "j":
            var j4 = new Audio("sounds/tom-2.mp3");
            j4.play();
        break;

        case "k":
            var k4 = new Audio("sounds/tom-3.mp3");
            k4.play();
        break;

        case "l":
            var l5 = new Audio("sounds/tom-4.mp3");
            l5.play();
        break;

        default: console.log(button1);
    }
}

function buttonAnimation(currentKey){
    let activeButton =document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100)
}


