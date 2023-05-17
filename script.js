class Voiture {
    constructor(marque,modele,annee,couleur){
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }

    afficherDetails() {
        console.log('marque : '+this.marque+',modèle : '+this.modele+',année : '+this.annee+',couleur : '+this.couleur);
    }
}

class Garage {
    constructor(listVoiture){
        this.listVoiture = listVoiture;
    }

    rechercheAnnee(annee){
        this.listVoiture.forEach(element => {
            if(element.annee == annee){
                element.afficherDetails();
            }
        });
    }

    rechercheMarque(marque){
        this.listVoiture.forEach(element => {
            if(element.marque == marque){
                element.afficherDetails();
            }
        });
    }

    rechercheMarque(lettre1,lettre2,lettre3){
        this.listVoiture.forEach(element => {
            if(element.marque.includes(lettre1) && element.marque.includes(lettre2) && element.marque.includes(lettre3)){
                element.afficherDetails();
            }
        });
    }
}
