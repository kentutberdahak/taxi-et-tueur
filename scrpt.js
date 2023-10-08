// Exo 1 : Le taxi
// John essaie de rentrer chez lui en taxi.
// Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
// Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
// Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux
// rouges de chez lui.
// À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
// Deux possibilités de fin :
// - Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et
// qu’il lui a fallu x changements de taxi pour y arriver
// - Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
// Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
// Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
// Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements
// 64
// C&DI – Algorithmie JS
// IIM DIG

function taxi(){

    let Person = {
    firstName : 'John',
    santeMentale : 10 
    }    //objet "John"
  
  let musique = ["Anissa - Wejdene", 'Self - Cleo Sol', 'The List - Moonchild', 'HalfTime - Amy Winehouse','Poke Bowl - Radiant Children']; // tableau , liste de 5 musiques
  let feuRouge = 30;
  let taxi = 0;      
  
  for (var i = 1; i <= feuRouge ;i++ ){  // = decompte 
  let k =  Math.floor(Math.random() * 5); // choix de musique aleatoire
  let j = 30 - i; // = decompte de feu rouge
  console.log (`La radio joue ${musique[k]} , il reste ${j} feux rouges.`); //ce qui s'affiche a chaque feu rouge
  
      if(musique[k] == "Anissa - Wejdene"){
          taxi++;
          Person.santeMentale -= 1;   //= si la chanson anissa joue, - 1 sante mentale.
            if( Person.santeMentale == 0){    
            console.log (`${Person.firstName} explose au ${j} eme feu rouge au ${taxi} eme taxi `); // = s'affiche si sa sante mentale atteint 0
            return;
          }
        }
      }
      console.log (`${Person.firstName} est arrive avec le ${taxi} eme taxi, sa sante mentale est a ${Person.santeMentale}`); //= s'affiche si il arrive a sa destination avec assez de sante mentale
  }
  
  taxi()
