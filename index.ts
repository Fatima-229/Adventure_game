// #!/usr/bin/env node

import inquirer from "inquirer";

class Hero {
  name: string;
  health = 100;

  constructor(name: string) {
    this.name = name;
  }

  decreaseHealth() {
    this.health -= 20;
  }

  increaseHealth() {
    this.health = 100;
  }
}

// for enemy

class Enemy {
  name: string;
  health = 100;

  constructor(name: string) {
    this.name = name;
  }

  decreaseHealth() {
    this.health -= 20;
  }

  increaseHealth() {
    this.health = 100;
  }
}

// hero object

async function main() {
  const { heroName } = await inquirer.prompt({
    type: "input",
    name: "heroName",
    message: "Please enter your name: ",
  });

  // enemy object

  const { enemyType } = await inquirer.prompt({
    type: "list",
    name: "enemyType",
    message: "Select the enemy: ",
    choices: ["Alien", "Zombie", "Witch"],
  });

  // battle field

  const hero = new Hero(heroName);
  const enemy = new Enemy(enemyType);

  console.log(`${enemy.name} V/S ${hero.name}`);

  // action

  do {
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      choices: ["Attack", "Defend", "Rang target", "Run"],
      message: "Choose your attack: ",
    });

    // switch case

    switch (action) {
      case "Attack":
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
          hero.decreaseHealth();

          console.log(`${hero.name} health: ${hero.health}`);
          console.log(`${enemy.name} health: ${enemy.health}`);

          if (hero.health <= 0) {
            console.log("You loss! Try again.");
            return;
          }
        } else {
          enemy.decreaseHealth();
          console.log(`${hero.name} health: ${hero.health}`);
          console.log(`${enemy.name} health: ${enemy.health}`);

          if (enemy.health <= 0) {
            console.log("Congratulations! You Win.");
            return;
          }
        }
        break;
    }
  } while (true);
}

main();
