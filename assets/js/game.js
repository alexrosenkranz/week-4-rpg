$(document).ready(function() {

  // Code out HTML View for Game
  	//4 Clickable Character Boxes
  		// Each has Name, image, and stats
  	//Space for player character to appear
  	//Space for enemy to appear

  //Create Variables
  	// Characters
      // array of objects
      // each has different properties of health, attack power, counter attack power
  var characters = [ ];
    
  	// Active Stats Variables
  var playerHealth;
  var playerAttack;
  var playerCounter;
  var enemies;
  var enemyHealth;
  var enemyAttack;
  var enemyCounter;
  var i = 0;

  // Active Characters
  var playerActive;
  var enemyActive;


  // Start new game function
  	// Sets all characters to be able to be picked by player with reset stats
  	// Once picked, player character gets put into player area while the rest go into Enemies area
  function newGame() {
    characters[0] = {name: 'Kyle Katarn', health: 170, attack: 16, counter: 11, };
    characters[1] = {name: 'Lando Calrissian', health: 220, attack: 10, counter: 18, };
    characters[2] = {name: 'IG-88', health: 150, attack: 20, counter: 10, };
    characters[3] = {name: 'Boba Fett', health: 200, attack: 18, counter: 5,};
    
    $('.character').each(function() {
      $(this).attr('data-value',characters[i]);
      i++;
    });


    i = 0;
    $('.name').each(function() {
      $(this).text(characters[i].name);
      i++;
    });

    i = 0
    $('.stats').each(function() {
      $(this).text('Health: ' + characters[i].health + ' Attack: ' + characters[i].attack + ' Counter: ' + characters[i].counter);
      i++;
    });

    console.log(characters);

    
  }

  newGame();

  // If there are enemies
    // Player picks Enemy
      // Enemies stats load


  $('.character').on('click', function() {
    playerActive = characters[$(this).attr('data-value')];
    console.log(playerActive);

  });

    // Player attacks enemy
     // Enemy loses health (health - attack)
      // Enemy counterattacks
      //  Increase player attack stat by base attack power

    // If player health <= 0
      // End game

    // If enemy health <= 0 
      // remove enemy from list of enemies
      // If there are more enemies, repeat pick

    // If no enemies left, player wins and restart game


});