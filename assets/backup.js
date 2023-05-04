const heroes = [
   {
         name: 'Slate Slabrock',
         type: 'dwarf',
         damage: 4,
         health: 100,
         maxHealth: 100,
         gold: 0,
         level: 1,
         emoji: '🗿'
   },
   {
         name: 'Flint Ironstag',
         type: 'elf',
         damage: 7,
         health: 50,
         maxHealth: 50,
         gold: 0,
         level: 1,
         emoji: '🥷'
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

function drawPlayers(heroes){
   document.getElementById("drawPlayers").innerHTML = "";
      heroes.forEach(hero => {
         console.log("Hi")
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
         <button class="btn btn-danger" onclick="attack(heroes)">Button</button>
         </div>`
      })
}

function drawBoss(boss){
   document.getElementById("boss").innerHTML = ""
   document.getElementById("boss").innerHTML = `<h1>Boss | Level ${boss.level}</h1>
   <div class="progress col-5 p-0" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="" aria-valuemax="100">
      <div class="progress-bar progress-bar-animated progress-bar-striped bg-danger" style="width: ${boss.health / boss.maxHealth * 100}%"></div>
   </div>
   <h1>${boss.health}</h1>`
}

function attack(heroes){
   heroes.forEach(hero => {
      boss.health -= hero.damage;
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
   boss.maxHealth += 50;
   console.log("Hi")
}

function defend(){
   heroes.forEach(hero => {
      hero.health -= boss.damage;
   })
   drawPlayers(heroes);
}

function levelUp(){
   heroes.forEach(hero => {
      hero.maxHealth += 10;
      hero.level++;
      hero.health = hero.maxHealth;
   })
}

setInterval(defend,5000)

// let newHealth = Math.floor(boss.health / boss.maxHealth);
// newHealth


// attack(heroes);
// attack(heroes);

drawBoss(boss)
drawPlayers(heroes);
// heroes.length;

