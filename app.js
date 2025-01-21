let voiture = {
    // les propriétés de la voiture
    couleur: "Noir",
    forme: "rectangle",
    taille: "moyen",
    nom: "BMW",

    // la méthode de la voiture
    avancer : function() {
        console.log("sa démarre");
    }
};

// la valeur de la propriété forme devient "rectangle"
console.log(voiture.couleur);

// la valeur de la propriété forme devient "rectangle".
voiture.forme = "rectangle";

// On ajoute la nouvelle propriété nombreRouue dont la valeur est 2.
voiture.nombreRoue = 2;

console.log(voiture.couleur, voiture.forme, voiture.taille, voiture.nombreRoue);


// Voiture(c, f, t) fonction constructeur d'objet voiture
function Voiture(c, f, t) {
    // Propriété de chaque modèle d'objet voiture à construire
    this.couleur = c;
    this.forme = f;
    this.taille = t;

    // Méthode de chaque modèle d'objet voiture à construire
    this.demarrer = function(){
        console.log("sa voiture a avancer");
    }
};

// Crée une voiture à partir du constructeur d'objet Voiture
// Gràce au mot-clée new
let voiture0 = new Voiture("bleu", "ronde", "petit");

// Accède à la couleur de l'objet voiture0
console.log(voiture0.couleur);

// Fait appel à la méthode demarrer() de l'objet voiture0
voiture.demarrer();


let voiture1 = new voiture("Rouge", "Carre", "grand",);
let voiture2 = new voiture("Blanc", "triangle", "petit");   
let voiture3 = new voiture("Vert", "Ronde", "Moyen");
let voiture4 = new voiture("Bleu nuit", "rectangle", "Miniscule"); 
let voiture5 = new voiture("Jaune", "Ronde", "petit");
 
// Utilisateur(nom, prénom, date de naissance, ville de résidence, age) function constructeur d'objet utilisateur
function Utilisateur(nom, prénom, datedenaissance, villederésidence, age) {

    this.nom = "nom";
    this.prenom = "prenom";
    this.dateNaissance = "datedenaissance";
    this.villederesidence = "villederesidence";
    this.age = "age";
  
    // la méthode de l'utilisateur
    this.courrir = function() {
        console.log("Il est entrain de courrir");
    };

    this.marcher = function() {
        console.log("Il marche");
    };

    this.sauter = function() {
        console.log("le chat a sauter");
    };

    this.lire = function() {
        console.log("Il est entrain de lire");
    };

    this.ecrire = function() {
        console.log("Il est entrain d'écrire");
    };

    this.reciter = function() {
        console.log("Il va réciter le coran");
    };
};

// Création de 5 utilisateur

let utilisateur1 = new utilisateur("Abdallah", "Issiaka", "1999-05-02", "Chirongui", 26);
let utilisateur2 = new utilisateur("Abdou", "inssa", "2002-10-25", "Mtsagadoua", 22);
let utilisateur3 = new utilisateur("ali", "Chaima", "2010-08-01", "Boueni", 15);
let utilisateur4 = new utilisateur("Anli", "Daniel", "2004-12-17", "Tsimkoura", 20);
let utilisateur5 = new utilisateur("Attoumani", "Said", "1987-03-30", "Mtsahara", 38);

console.log([utilisateur1,utilisateur2,utilisateur3,utilisateur4,utilisateur5]);