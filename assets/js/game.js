
var fight = function() {
    // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  var playerName = window.prompt("What is your robot's name?");
  var playerHealth = 100;
  var playerAttack = 10;
  
  // You can also log multiple values at once like this
  console.log(playerName, playerAttack, playerHealth);
  var enemyName = "Roborto";
  var enemyHealth = 50;
  var enemyAttack = 12;

  //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use result to update 'enemyHealth' variable
  enemyHealth = enemyHealth - playerAttack;

  //Log a resulting message to cosole to confirm it worked
  console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  // check enemy health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  //Subtract value of 'enemyAttack' from the value of playerHealth and use the result to update 'playerHealth' variable

  playerHealth = playerHealth - enemyAttack;

  //Log a resulting message to console to confirm it worked
  console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
  //check player health
  if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
  }
  else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
  }

};
fight();