var UPButton = document.getElementById('UPButton');

var downButton = document.getElementById('DownButton');

var timerUPInterval;
var timerdownInterval;

// Function to start the timer
function startUPTimer() {
  
    timerUPInterval = setInterval(updateUPTimer, 45);
}

// Function to update the timer display
function updateUPTimer() {
  
  if(parseInt(getComputedStyle(player).top) >=-10 ){
    let newTop = parseInt(getComputedStyle(player).top)-10;
    player.style.top = newTop + "px"
    }
}

// Function to stop the timer
function stopUPTimer() {
  clearInterval(timerUPInterval);
}
// Event listener for button  UP
UPButton.addEventListener('mousedown', startUPTimer);
UPButton.addEventListener('mouseup', stopUPTimer);
UPButton.addEventListener('mouseleave', stopUPTimer);

//************************************ */
// ***funtions for the down button***
function startDownTimer() {
  
    timerdownInterval= setInterval(updateDownTimer, 45);
}

// Function to update the timer display
function updateDownTimer() {
  
    if(parseInt(getComputedStyle(player).top) <=380 ){
        let newTop = parseInt(getComputedStyle(player).top)+10;
        player.style.top = newTop + "px"
        }
}

// Function to stop the timer
function stopDownTimer() {
  clearInterval(timerdownInterval);
}


// Event listener for button  Down
downButton.addEventListener('mousedown', startDownTimer);
downButton.addEventListener('mouseup', stopDownTimer);
downButton.addEventListener('mouseleave', stopDownTimer);