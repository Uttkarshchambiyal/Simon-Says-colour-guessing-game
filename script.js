// ==================== DOM ELEMENT REFERENCES ====================
// Use these variables to access and manipulate the game UI elements

// --- Color Buttons (the 4 game pads) ---
// Each button also has a "data-color" attribute: "green", "red", "yellow", "blue"
// To light up a button:   btn.classList.add("flash")
// To turn it off:         btn.classList.remove("flash")
// To show user click:     btn.classList.add("user-click")
const greenBtn = document.querySelector("#green-btn");
const redBtn = document.querySelector("#red-btn");
const yellowBtn = document.querySelector("#yellow-btn");
const blueBtn = document.querySelector("#blue-btn");



// --- All color buttons as a NodeList (useful for looping / adding event listeners) ---
// Example: colorBtns.forEach(btn => btn.addEventListener("click", handleClick))
// Each btn has btn.dataset.color → "green" | "red" | "yellow" | "blue"
const colorBtns = document.querySelectorAll(".color-btn");


// --- Color Grid Container (the 2x2 grid holding all color buttons) ---
// Add class "game-over" to trigger a shake animation on wrong guess:
//   colorGrid.classList.add("game-over")
// Remove it after animation ends:
//   colorGrid.addEventListener("animationend", () => colorGrid.classList.remove("game-over"))
const colorGrid = document.querySelector("#color-grid");

// --- Info Displays (Level, Score, High Score) ---
// Update these with .innerText to show current values
// Example: levelDisplay.innerText = currentLevel;
const levelDisplay = document.querySelector("#level-display");
const scoreDisplay = document.querySelector("#score-display");
const highscoreDisplay = document.querySelector("#highscore-display");

// --- Status Message ---
// Shows messages to the player like "Watch the pattern!", "Your turn!", "Game Over!"
// Example: statusMsg.innerText = "Your turn!";
const statusMsg = document.querySelector("#status-message");

// --- Control Buttons ---
// startBtn  → begins a new game
// resetBtn  → resets everything
// Disable during pattern playback: startBtn.disabled = true;
// Re-enable: startBtn.disabled = false;
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");

// --- Handy array of color names (matches the data-color attributes) ---
const colors = ["green", "red", "yellow", "blue"];


// ==================== YOUR CODE GOES BELOW ====================
// 
// Here are some hints to get you started:
//
// 1. GAME STATE VARIABLES
//    - Create an array to store the game's color sequence (pattern)
//    - Create a variable to track which step the player is on
//    - Create a variable to track the current level
//    - Create a variable to track the score
//    - Create a boolean to track if the game is running
//


let start = false;
let reset = false;



let userInp = [];

let randColour = [];

let level = 0;
let score = 0;

let levelBox = document.querySelector("#level-display")
let ScoreBox = document.querySelector("#score-display")


startBtn.addEventListener('click', function() {

    if (start == false) {

        start = true;

        randColour = [];
        userInp = [];

        level = 0;
        score = 0;

        levelDisplay.innerText = 0;
        scoreDisplay.innerText = 0;

        gameStart();
    }

})

function gameStart() {

    level++;

    userInp = []

    levelBox.innerText = level;

    let randomIndx = Math.floor(Math.random() * 4);

    let randomColor = colors[randomIndx];

    randColour.push(randomColor)

    playPattern();


}


function flashbutton(color) {
    const btn = document.querySelector(`[data-color="${color}"]`);

    btn.classList.add("flash")

    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500)
}


function playPattern() {

    randColour.forEach(function(color, index) {
        setTimeout(function() {
            flashbutton(color)
        }, index * 700)
    })

}

colorBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {

        if (start == false) {
            return
        }
        btn.classList.add("user-click");

        setTimeout(function() {
            btn.classList.remove("user-click");
        }, 200);

        let colorClicked = btn.dataset.color;

        userInp.push(colorClicked);

        checkAnswer();
    })
})


function checkAnswer() {

    let UserIndex = userInp.length - 1;

    if (userInp[UserIndex] === randColour[UserIndex]) {
        if (userInp.length === randColour.length) {
            score += 10;
            scoreDisplay.innerText = score;
            setTimeout(function() {
                gameStart();

            }, 800)
        }

    } else {
        gameOver();
    }
}


function gameOver() {

    start = false;
    statusMsg.innerText = "Game Over!";

    colorGrid.classList.add("game-over");

}


colorGrid.addEventListener('animationend', function() {
    colorGrid.classList.remove("game-over");
})


resetBtn.addEventListener('click', function() {


    start = false;
    randColour = []
    userInp = [];

    level = 0;
    score = 0;

    levelDisplay.innerText = 0;
    scoreDisplay.innerText = 0;

    statusMsg.innerText = "Press Start";


})

// 2. GENERATING THE PATTERN
//    - Pick a random color: colors[Math.floor(Math.random() * colors.length)]
//    - Push it into your sequence array each round
//
// 3. PLAYING THE PATTERN (flashing buttons)
//    - Loop through the sequence with setTimeout or setInterval
//    - For each color, find the button and add "flash" class
//    - After a delay, remove "flash" class
//
// 4. HANDLING USER INPUT
//    - Add click listeners to colorBtns
//    - Compare the clicked color (btn.dataset.color) with the expected color
//    - If correct → move to next step, if last step → next level!
//    - If wrong → game over!
//
// 5. GAME OVER
//    - Add "game-over" class to colorGrid for shake effect
//    - Update statusMsg.innerText = "Game Over!"
//    - Save high score if current score is higher
//
// Happy coding! 🎮