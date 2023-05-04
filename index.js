//when the hero is dead it is still attacking!

const heroes = [
   {
         name: 'Slate Slabrock',
         type: 'dwarf',
         damage: 4,
         health: 100,
         maxHealth: 100,
         gold: 5,
         level: 1,
         emoji: '🗿',
         alive: true
   },
   {
         name: 'Flint Ironstag',
         type: 'elf',
         damage: 7,
         health: 50,
         maxHealth: 50,
         gold: 5,
         level: 1,
         emoji: '🥷',
         alive: true
   }
]

heroes[0]

const boss = {
   health: 100,
   maxHealth: 100,
   damage: 5,
   level: 1,
   img: ''
}
//Draws Players and Info KEEP NOTE at bottom checking hero health 
//and disabling the button
function drawPlayers(){
   document.getElementById("drawPlayers").innerHTML = "";
      heroes.forEach(hero => {
         // console.log("Hi")
         document.getElementById("drawPlayers").innerHTML += 
         `<div class="col-3 card shadow-lg glass text-white p-3 text-center">
         <p class="col-12 fs-5">${hero.name}<span class="p-5 fs-2">${hero.emoji}</span></p>
            <div class="row">
               <p class="col-6">HP:</p>
               <p class="col-6">${hero.health}</p>
            </div>
            <div class="row">
               <p class="col-6">GOLD:</p>
               <p class="col-6">${hero.gold}</p>
            </div>
            <div class="row">
               <p class="col-6">LVL:</p>
               <p class="col-6">${hero.level}</p>
            </div>
            <div class="row">
               <p class="col-6">Damage</p>
               <p class="col-6">${hero.damage}</p>
            </div>
            <button class="btn btn-danger" onclick="attack('heroes')" id="${hero.name}Button">Attack</button>
         </div>`
         if(hero.health <= 0){
            hero.alive = false;
            document.getElementById(`${hero.name}Button`).disabled = true;
         }
      })
}

//draws the boss onto the screen
//uses templates to interact with the bootstrap 
function drawBoss(boss){
   document.getElementById("boss").innerHTML = ""
   document.getElementById("boss").innerHTML = `<h1>Boss | Level ${boss.level}</h1>
   <div class="progress col-5 p-0" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="" aria-valuemax="100">
      <div class="progress-bar progress-bar-animated progress-bar-striped bg-danger" style="width: ${boss.health / boss.maxHealth * 100}%"></div>
   </div>
   <h1>${boss.health}</h1>`
}


function attack(){
   heroes.forEach(hero => {
      console.log("attack");
      if(hero.alive){
         boss.health -= hero.damage;
      }
      // hero.health -= boss.damage;
   })
   // boss.health -= hero.damage;
   console.log(boss.health);
   if(boss.health <= 0){
      resetBoss(boss);
      boss.health = boss.maxHealth;
      levelUp()
   }
   drawBoss(boss);
   drawPlayers(heroes);
}

//This also increases the boss' level
function resetBoss(boss){
   boss.level++;
   boss.maxHealth += 150;
   boss.damage ++;
   // console.log("Hi")
}

function defend(){
   heroes.forEach(hero => {
      if(hero.alive){
         hero.health -= boss.damage;
      } else if(!hero.alive){
         hero.health = 0;
      }
      // hero.health -= boss.damage;
   })
   drawPlayers(heroes);
}

function levelUp(){
   heroes.forEach(hero => {
      hero.maxHealth += 10;
      hero.level++;
      hero.damage++;
      hero.health = hero.maxHealth;
   })
}

function findHero(name){
   let foundHero = heroes.find(hero => hero.name == name);
   return foundHero;
}

// function reviveHero(hero){
//    if(!hero.alive){
//       if(hero.gold >= 3){
//          hero.alive = true;
//          hero.health = hero.maxHealth;
//          hero.gold -= 3;
//       } else {
//          console.log("Hero revive failed")
//       }
//    }
// }

findHero('Slate Slabrock');

setInterval(defend,1000)


// let newHealth = Math.floor(boss.health / boss.maxHealth);
// newHealth


// attack(heroes);
// attack(heroes);

drawBoss(boss)
drawPlayers(heroes);
// heroes.length;

