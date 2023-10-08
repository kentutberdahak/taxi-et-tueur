// Exo 2 : Le tueur en série
// Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
// Une équipe de choc est présente pour le neutraliser.
// Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
// Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…),
// une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
// Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une
// caractéristique prise de celles disponibles (toujours aléatoire).
// Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :

// Le tueur attaque un des survivants :
// - soit le survivant meurt
// - soit le survivant esquive et inflige 10 points de dégâts
// - soit le survivant inflige 15 points de dégâts mais meurt

// Les morts seront affichés à la fin
// Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
// Les survivants ont gagné mais RIP à X, X, X…)

let morts = "" // tableau des morts pour les afficher a la fin

let tueur = {
    firstName : 'Jason',
    pointsVie : 100 
}    // profil tueur

//tableau des profils des victimes 
let survivants = [
 victime1 = {
    firstName : "Nerd", 
    pDm: 0.5,     // pDm = probabilite de mourir, pDef = prababilite de se defendre, pDmDef = probabilite de se defendre ET mourir. 
    pDef : 0.3,
    pDmDef : 0.5,
},
 victime2 = {
    firstName : "Sportif", 
    pDm: 0.3,
    pDef : 0.7,
    pDmDef : 0.5,
},
 victime3 = {
    firstName : "Vieille", 
    pDm: 0.7,
    pDef : 0.2,
    pDmDef : 0.3,
},
 victime4 = {
    firstName : "Bimbo", 
    pDm: 0.5,
    pDef : 0.3,
    pDmDef : 0.4,
},
 victime5 = {
    firstName : "Enfant", 
    pDm: 0.7,
    pDef : 0.2,
    pDmDef : 0.5,
}
]
    function fight(){  // attaques

        for (i=0; i < survivants.length ;i++){
        let k =  Math.floor(Math.random() * 3); // probabilites
        if(k == 1){
            console.log(`${survivants[i].firstName} est mort(e).`); //s'affiche lorsque la victime ne se defend pas est meurt
            morts += survivants[i].firstName + ", "
            tueur.pointsVie = tueur.pointsVie - 0
        }else if(k==2){
          console.log (`${survivants[i].firstName} s'est defendu(e) et a survecu(e). -15hp a Jason`) //s'affiche lorsque la victime reussie a esquiver
          tueur.pointsVie = tueur.pointsVie - 15
        }else{
          console.log (`${survivants[i].firstName} s'est defendu(e) mais n'a pas survecu(e). -25hp a Jason`)//s'affiche lorsque la victime se defend mais meurt 
          tueur.pointsVie = tueur.pointsVie - 25
        } 
     }
        
        if(tueur.pointsVie > 0){ 
            console.log("Jason a survecu"); //s'affiche si Jason survit
        }else if(tueur.pointsVie <= 0){ 
            console.log("Jason est mort"); //s'affiche si Jason meurt
        }

        console.log(`RIP a ${morts} `); // affiche liste des morts a la fin 
    }
         
        fight()
