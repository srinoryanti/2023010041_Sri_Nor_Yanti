var numOfFaces = 5;
var level = 1;
var score = 0;

function showGameOverPopup() {
  const gameOverPopup = document.getElementById('gameOverPopup');
  const levelSpan = document.getElementById('levelSpan');
  const scoreSpan = document.getElementById('scoreSpan');
  levelSpan.textContent = level;
  scoreSpan.textContent = score;
  gameOverPopup.style.display = 'block';
  
  const closeGameOverPopupBtn = document.getElementById('closeGameOverPopup');
  closeGameOverPopupBtn.addEventListener('click', () => {
    const gameOverPopup = document.getElementById('gameOverPopup');
    gameOverPopup.style.display = 'none';
  });
}

function createSmiley(){ //function creates a smiley face and assigns random location
  var ret = document.createElement("img");
  ret.src="emoji.png";
  //set random values to location
  var left = Math.floor(Math.random()*400);
  var top = Math.floor(Math.random()*400);
  ret.style.left = left + 'px';
  ret.style.top = top + 'px';
  //TODO remove possibility for complete intersection

  return ret;
}

function clearFaces(){ // function clears all faces from divs
  var theLeftSide = document.getElementById("leftSide");
  var theRightSide = document.getElementById("rightSide");

  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
}

function updateStats(){
  document.getElementById("stats").innerHTML = "Level : "+level +" emoji : "+numOfFaces
    +" Score : "+score;
}

function generateFaces(){ //sets the faces inside divs, inits game
  var theLeftSide = document.getElementById("leftSide");
  var theRightSide = document.getElementById("rightSide");
  var theBody = document.getElementsByTagName("body")[0];

  //update user stats
  updateStats();
  //setCountdown();

  //append smileys to left
  for (var i=0; i<numOfFaces; i++){
    //create smiley image
    var smiley = createSmiley();
    theLeftSide.appendChild(smiley);
  }

  //append smileys to right
  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);

  //add the left images to the right one
  theRightSide.appendChild(leftSideImages);


  //check next level
  theLeftSide.lastChild.onclick = function nextLevel(event){

        event.stopPropagation();
        numOfFaces += 5;
        level++;
        score += 10;

        clearFaces();
        generateFaces();

      };
      
      theBody.onclick = function gameOver() {
        var theLeftSide = document.getElementById("leftSide");
        var theBody = document.getElementsByTagName("body")[0];
        showGameOverPopup(); // Show the custom game over popup
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
      };
}
