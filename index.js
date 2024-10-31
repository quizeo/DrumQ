// document.querySelectorAll("button").forEach(function (button) {
//     button.addEventListener("click", function () {
//         alert("I got clicked!");
//     });
// });


var lengthButton = document.querySelectorAll(".drum").length;
for(var i =0 ;  i< lengthButton; i++){
document.querySelectorAll("button")[i].addEventListener("click", function  (){
    var buttonInner = this.innerHTML;

    switcher(buttonInner);
    buttonAnimation(buttonInner);

});
}

document.addEventListener("keydown",function(){
 
 switcher(event.key);
  buttonAnimation(event.key);

})


function switcher(buttonInput){


          switch (buttonInput) {
            case "1":
              var audio = new Audio("sounds/crash.mp3");
              audio.play();
            break;
              case "2":
                  var audio = new Audio("sounds/kick-bass.mp3");
                  audio.play();
              break;
              case "3":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;

            case "4":
                  var audio = new Audio("sounds/tom-1.mp3");
                  audio.play();
              break;
              case "5":
                  var audio = new Audio("sounds/tom-2.mp3");
                  audio.play();
              break;  
              case "6":
                  var audio = new Audio("sounds/tom-3.mp3");
                  audio.play();
              break;
              case "7":
                  var audio = new Audio("sounds/tom-4.mp3");
                  audio.play();
              break;
          

          
            default: console.log(buttonInner);
              break;
          }

}


function buttonAnimation(currentkey){

  var pressButton = document.querySelector(".no_" + currentkey);
  pressButton.classList.toggle("pressed");
  
  setTimeout(function()  {
    pressButton.classList.toggle("pressed");
}, 100);

}


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();