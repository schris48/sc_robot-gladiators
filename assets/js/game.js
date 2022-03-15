// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// Add enemy array
var enemyNames = ["Roborto", "Anne Droyde", "Robb Trumble"];
// Add enemy stats
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames)
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

// Welcome user to game
//window.alert("Welcome to Robot Gladiators!");

// Prompt user to name player
var playerName = window.prompt("What is your robot's name?");

// Add player stats
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);

var fight = function(enemyName) {
  // Repeat and execute as long as the enemy-robot is alive
  while(enemyHealth > 0 && enemyHealth > 0) {
    // Ask user if they want to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    // If player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting amount set in playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;
            console.log("playerMoney", playerMoney);

            // if enemy-robot's health is zero or less, exit from the fight loop
            break;

        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // if player-robot's health is zero or less, exit from the fight loop
            break;

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
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        
        // if no (false), ask question again by running fight() again
        } else {
            fight();
        }
    }
  }
}
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they are in
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) + "!");

        // pick new enemy based on index of enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before starting new fight
        enemyHealth=50

        //use debugger to pause script from running and check what's going on at the moment in the code
        //debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the vaule of the enemyName parameter
        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot battle! Game Over!");
        break;
    }
}