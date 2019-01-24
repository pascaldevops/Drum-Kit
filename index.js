// Select all the Drum button element
const buttons = document.querySelectorAll(".drum");

// Play the sound the user chooses
const playSound = function(sound) {
  const audio = new Audio(sound);
  audio.play();
};

// Dum kit button letters
const soundLetters = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

// Select the appropriate key to play the sound
const soundSelector = function(selector) {
  switch (selector) {
    case "w":
      playSound("./sounds/tom-1.mp3");
      break;
    case "a":
      playSound("./sounds/tom-2.mp3");
      break;
    case "s":
      playSound("./sounds/tom-3.mp3");
      break;
    case "d":
      playSound("./sounds/tom-4.mp3");
      break;
    case "j":
      playSound("./sounds/snare.mp3");
      break;
    case "k":
      playSound("./sounds/crash.mp3");
      break;
    case "l":
      playSound("./sounds/kick-bass.mp3");
      break;
    default:
      break;
  }
};

// Add a click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
      soundSelector(button.textContent);
      buttonAnnimation(button.textContent);
  });
});

//Press the appropriate key on the keyboard to play the sound
document.addEventListener("keypress", function(event) {
  if (soundLetters.includes(event.key)) {
    soundSelector(event.key);
    buttonAnnimation(event.key);
  }
});

// Animate the drum kit buttons
const buttonAnnimation = function(curreentKey) {
  var animateButton = document.querySelector(`.${curreentKey}`);
  animateButton.classList.add('pressed');

  setTimeout(function() {
    animateButton.classList.remove('pressed');
  }, 200);
  
};
