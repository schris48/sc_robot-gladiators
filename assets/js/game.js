// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// Add enemy array
var enemyNames = ["Roborto", "D'Ann Droid", "Robb Trumble"];
console.log(enemyNames)
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
    
  // Prompt user to name player
  var playerName = window.prompt("What is your robot's name?");

  // Add player stats
  var playerHealth = 100;
  var playerAttack = 10;
  var playerMoney = 10;
  console.log(playerName, playerAttack, playerHealth);
  
  // Add enemy stats
  var enemyHealth = 50;
  var enemyAttack = 12;


  // Ask user if they want to fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);

  // If player chooses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting amount set in playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
          playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      );
      // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
    } else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      
    // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 2;
      }
      // if no (false), ask question again by running fight() again
      else {
          fight();
      }
  }
}
fight();