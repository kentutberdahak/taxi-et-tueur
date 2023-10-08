"use strict";

//CONDITION

let a=4;
let b=4;
let c=3;

if(a==b){
    console.log("egal a b"); 
}else if (a==c){
    console.log("egal a c"); 
}else{
    console.log("egal a rien");
}

// BOUCLE

for(let a=1;a<5;a++);{
    console.log("OKLM");
}

//tableau
 let tableauName=[];
 console.log(tableauFruit.push("Vincent"));
 console.log(tableauFruit.push("Paul"));
 console.log(tableauFruit.push("Arthur"));

 /**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 * 
 */
    // Correction + exercice while + execrice objet pokemon
 
 "use strict";

/**           CONDITION
 * declarer trois variable a=4,b=4,c=3
 * 
 * a sera l expression de reference 
 * si a est egal a b alor faire un console log('egal à b')
 * 
 * si a est egal a c alors faire un console log('egal à b')
 * 
 * par defaut il y a un console log("egal a rien")
 */
let a =4;
let b=4;
let c=3;

switch(a){
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}

/**            BOUCLE
 *              FOR
 * Declarer une variable a qui est egale à un entier positif
 * 
 * Faire un console log de 'OKLM' autant de fois que le valeur de a
 * 
 * 
 */

let aBis=4;
for(let i=0;i<aBis;i++){
    console.log('OKLM');
}
//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
let aT=3;
while(a<9){
    aT++
    if(aT==7){
        continue
    }
    if(aT==8){
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de '+aT+" tours");

/**         Fonction
 * 
 * 
 * Declarer trois variables a="jean" et b="paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */

let aQ="jean";
let bBis="Paul";
let result=checkName(a,b)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);

/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 * 
 */

let names=[];
names.push('Vincent',"Paul",'Arthur');

names.forEach(name =>{
    name += 'va a la peche ';
    console.log(name)
});

/**             OBJECT
 * 
 * Declarer un Objet student avec name , favoriteFood et city 
 * 
 * Recuperer le nombre de caracteres dans chaues proprieter puis les additionner pour obtenir un nombre 
 * 
 * Si le nombre pair afficher dans la console "pair"
 * Si le nombre est impair afficher dans la console "impaire"
 * 
 * Plusieurs solutions possibles 
 * Object.keys()=> recuperer les proprieter=s 
 * Object.values() => recuperer les valeurs
 * 
 */
//Premiere exemple 
// let student={
//     name:'Nicolas',
//     favoriteFood:"Salad",
//     city:"Paris",
// }
// let values=Object.values(student);
// console.log(values);
// let resultBis=0;
// values.forEach((values)=> {
//     resultBis+=values.length
// })
// console.log(resultBis);
//exemple 2
let student={
    name:'Nicolas',
    favoriteFood:"Salad",
    city:"Paris",
}
let values=Object.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);


/**             Class
 * 
 * Creer une class pokemon avec parametre name,attack,defense,hp,luck une methode isLucky et une methode attckPokemon
 * 
 * Creer deux instance de pokemon avec des stats differentes 
 * 
 * tant que l un deux n est pas mort 
 * le premier attaue le second (isLucky + attackPokemon)
 * afficher la vie et les degats endommagés du second
 * si le second est mort arreter la boucle 
 * le second attaque le premier (isLucky + attackPokemon)
 * afficher la vie et les degats endommagés du premier
 *  * si le premier est mort arreter la boucle 
 * 
 * afficher une message de fin pour le pokemon perdant
 * 
 * Formule
 * degat =att de l'attaquant - def du defenseur
 * la luck correspon a la probabilite de touche l'adversaire (precision en pourcentage)
 * generer un nombre aleatoire avec math.random()
 * Si le nombre est inferieur a luck du pokemon alors le pokemon peut attaquer 
 */
class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){
        if(this.isLucky()){
            let damage=this.attack-pokemon.defense
            pokemon.hp-=damage
            console.log(this.name+' a attqué '+pokemon.name+' pour '+damage+' de degat il lui reste '+pokemon.hp+" points de vie");
        }else {
            console.log(this.name+" a raté son attaque");
        }
    }
    isLucky(){
        return this.luck>Math.random()
    }
}
let dracofeu=new Pokemon('Dracofeu',14,8,100,0.5);
let boulbi=new Pokemon('Boulbi',18,4,70,0.8);

while(dracofeu.hp >0 && boulbi.hp>0){
    dracofeu.attackPokemon(boulbi)
    if(boulbi.hp<=0){
        console.log(boulbi.name+" is dead !");
        break;
    }
    boulbi.attackPokemon(dracofeu)
    if(dracofeu.hp<=0){
        console.log(dracofeu.name+" is Dead !");
        break
    }
}