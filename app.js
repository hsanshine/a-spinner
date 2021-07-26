const spinner = document.getElementById("spinner");
let rotateCount = 0;
let startTime = null; //time when the rAF starts
let rAF; // reference to the requestAnimationFrame() call
let isSpinning = false;

// animation function
function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3; // divide by 3 so the value is not very big
  rotateCount %= 360; // just to work with anlgle btn 0 and 359, its easier

  spinner.style.transform = `rotate(${rotateCount}deg)`; // provide the html string code for rotating something to a certain angle on screen
  rAF = requestAnimationFrame(draw); // will run our code before every frame repaint of the browser, i.e at about 60 times per second
}
//draw(); // we start off our function
//cancelAnimationFrame(rAF);

// canceling the animation
function ctrlAnim() {
  if (isSpinning) {
    cancelAnimationFrame(rAF);
    startTime = null;
    isSpinning = false;
  } else {
    draw();
    isSpinning = true;
  }
}
const myBody = document.querySelector(".myBody");
myBody.addEventListener("click", ctrlAnim);
