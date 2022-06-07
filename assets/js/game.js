var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName ="Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // player attacks the enemy
    enemyHealth = enemyHealth - playerAttack;
    // log to validate
    console.log(playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaning.");
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // enemy attacks the player
    playerHealth = playerHealth - enemyAttack;
    // log to validate
    console.log(enemyName + " attacked " + playerName + ".  " + playerName + " now has " + playerHealth + " health remaning.");
    // check players's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();