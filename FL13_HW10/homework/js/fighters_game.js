function Fighter (obj) {

    this.name = obj.name;
    this.damage = obj.damage;
    this.strength = obj.strength;
    this.agility = obj.agility;
    this.hp = obj.hp;
    this.wins = 0;
    this.lose = 0;
    this.maxHp = obj.hp;

    this.getName = () => this.name;
    this.getDamage = () => this.damage;
    this.getStrength = () => this.strength;
    this.getAgility = () => this.agility;
    this.getHealth = () => this.hp;
    this.getWins = () => this.wins;
    this.getLose = () => this.lose;

    this.dealDamage = function(damageOut){
        this.hp-=damageOut;
    }
    this.addWin = function() {
        this.wins++;
    }
    this.addLoss = function() {
        this.lose++;
    }
    this.heal = function(number) {
        this.hp+=number;
        if (this.hp > this.maxHp) {
            this.hp = this.maxHp;
        }
    }
    this.logCombatHistory = function(){
        console.log('Name : ' + this.getName() + ', Wins : ' + this.getWins() + ', Losses : '+ this.getLose())
    }
    this.attack= function(defender){
        let min = 0;
        let max = 100;
        let raundCorrection1 = 0.5;
        let raundCorrection2 = 1;
        let random = min - raundCorrection1 + Math.random() * (max - min + raundCorrection2);
        if(Math.round(random)>defender.getAgility()+defender.getStrength()) {
            console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to ' + defender.getName())
            defender.dealDamage(this.getDamage())
        } else {
            console.log(this.getName() + ' attack missed ')
        }
    }
}

function battle (player1,player2) {
    let canplay = true;
    if (!player1.getHealth()){
        canplay = false;
        console.log(player1.getName() + ' is dead and can not fight.');
    }
    if (!player2.getHealth()){
        canplay = false;
        console.log(player2.getName() + ' is dead and can not fight.');
    }
    while(canplay){
        player1.attack(player2);
        if (player2.getHealth()<=0) {
            canplay=false;
            player1.addWin();
            player2.addLoss();
            player2.heal(Math.abs(player2.getHealth()));
            console.log(player1.getName() + ' has won !');
        }
        if (canplay) {
            player2.attack(player1);
            if (player1.getHealth()<=0) {
                canplay=false;
                player2.addWin();
                player1.addLoss();
                player1.heal(Math.abs(player1.getHealth()));
                console.log(player2.getName() + ' has won !');
            }
        }
    }
}
