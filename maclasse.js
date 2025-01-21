// Class. Crée la classe Document grâce au mot-clé class
class Documents {

    // Définissions le constructeur de la classe grâce au mot-clé constructor
    constructor(titre, auteur, nombrePage){
        this.titre = titre;
        this.auteur = auteur;
        this.nombrePage = nombrePage;
    }

    // Méthode description de la classe Document
    description(){
        console.log("Le titre du document est la guerre froide", this.titre);
        console.log("L'auteur est Harry Truman", this.auteur);
        console.log("Le document contient 21", this.nombrePage, "pages");
    }
};

// Crée 3 documents similaires à partir du modéle de Document
let document1 = new Document("La guerre froide", "Chams Anli", 17);
let document2 = new Document("La fleur en Or","Harry Truman", 19);
let document3 = new Document("L'ombre des Secrets", "Elodie Marceau", 21);

console.log([document1,document2,document3]);

