var anneeEnCours = 50000;
var anneeMoinsUn = 44000;
var anneeBissextile = 2020;
var reduction;
if ((anneeEnCours >= 30000) && (anneeEnCours <= 60000)) {
    reduction = 10;
    if ((anneeBissextile %4 ==0) && !(anneeBissextile %100 == 0) || (anneeBissextile %400==0)) {
        reduction += 5;
    }
} else if ((anneeEnCours >= 20000) && (anneeEnCours <= 20999)){ 
    reduction = 20; 
    if ((anneeBissextile %4 ==0) && !(anneeBissextile %100 == 0) || (anneeBissextile %400==0)) {
        reduction += 5;
    }
} else {}
console.log(reduction)
console.log((anneeEnCours / 100) * reduction)

var anneeEnCours = 2020;
var anneeSaisie = parseInt (prompt ('Quel age avez vous ?'));
if ((anneeEnCours - anneeSaisie) <= 18) {
    console.log('vous êtes mineur');
} else {
    console.log('Vous êtes majeur');
}

