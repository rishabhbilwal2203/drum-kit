var numberOfButtons = document.querySelectorAll(".drum").length;
const sound_object = {"w":"sounds/tom-1.mp3","a":"sounds/tom-2.mp3" ,"s":"sounds/tom-3.mp3" ,"d":"sounds/tom-4.mp3" ,"j":"sounds/snare.mp3" ,"k":"sounds/crash.mp3" ,"l":"sounds/kick-bass.mp3"}

for (var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var audio = new Audio(sound_object[this.innerHTML]);
        buttonAnimation(this.innerHTML);
        audio.play();
    });
}

document.addEventListener("keydown",function(event){
    var audio = new Audio(sound_object[event.key]);
    buttonAnimation(event.key);
    audio.play();
})
 
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}