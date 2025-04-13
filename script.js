// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  console.log("You chose: Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  console.log("You chose: Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  console.log("You chose: Scissors ✂️");
});

// Function to randomly select Rock, Paper, or Scissors for the computer
function getComputerChoice() {
  // Generate a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Use the random number to select Rock, Paper, or Scissors
  if (randomNumber === 0) {
    return "Rock 🪨";
  } else if (randomNumber === 1) {
    return "Paper 📄";
  } else {
    return "Scissors ✂️";
  }
}

// Example usage: log the computer's choice to the console
console.log("Computer chose:", getComputerChoice());

// Function to handle the game logic when a player makes a choice
function playGame(playerChoice) {
  // Get the computer's choice by calling the getComputerChoice function
  const computerChoice = getComputerChoice();

  // Get the result element from the HTML
  const resultElement = document.getElementById("result");

  // Display the player's choice and the computer's choice on the page
  resultElement.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice}`;
}

// Add event listeners to the buttons to call playGame with the player's choice
rockButton.addEventListener("click", function() {
  playGame("Rock 🪨");
});

paperButton.addEventListener("click", function() {
  playGame("Paper 📄");
});

scissorsButton.addEventListener("click", function() {
  playGame("Scissors ✂️");
});

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  // Check if it's a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check all winning conditions for the player
  if (
    (playerChoice === "Rock 🪨" && computerChoice === "Scissors ✂️") ||
    (playerChoice === "Paper 📄" && computerChoice === "Rock 🪨") ||
    (playerChoice === "Scissors ✂️" && computerChoice === "Paper 📄")
  ) {
    return "You win!";
  }

  // If it's not a tie and the player didn't win, the computer wins
  return "Computer wins!";
}

// Update the playGame function to include winner logic
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const resultElement = document.getElementById("result");

  // Determine the winner
  const winner = determineWinner(playerChoice, computerChoice);

  // Display the choices and the winner
  resultElement.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice} | ${winner}`;
}