const theWindow = document.querySelector('.theWindow');
const appShortcut = document.querySelector('.appShortcut');

function closeApp() {
    theWindow.style.display = 'none';
    appShortcut.style.display = 'block'; 

      // ".theWindow": { "2s linear 0s alternate wipe-out-bottom-right" }
  
}
    


function openApp() {
    theWindow.style.display = 'block';
    appShortcut.style.display = 'none';
    window.location.reload();

}

function maximazeApp() {


  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
} else {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
theWindow.style.width = "100%";
theWindow.style.height = "100%";





}

dragElement(theWindow);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var e = document.getElementById('butn');

e.addEventListener('click', function() {
  if (this.className == 'on') this.classList.remove('on');
  else this.classList.add('on');
  
});
