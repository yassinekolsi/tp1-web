function generernombrealea(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function demandertentative(nbrtentative,nbreadeviner,min,max){
    for(let i=0;i<nbrtentative;i++){
        let tentative=parseInt(prompt(`tentative ${i+1} deviner un nbre entre${min} et${max}`));
        if(isNaN(tentative) || tentative<min || tentative>max){
            alert("erreur! veilleuz saisir un nbre entre min et max");
            i--;
        }
        else if(tentative===nbreadeviner){alert("Bravo! vous avez gagnez");return true;}
        else if(tentative<nbreadeviner) alert("<");
        else if(tentative>nbreadeviner) alert(">");

    }
    return false;
}

function choisirniveau(){
    let niveau=prompt("choisir niveau de difficulte de 1 a 3");
    switch(niveau){
        case "1": return {min:1,max:10,tentatives:6};
        case "2": return {min:1,max:50,tentatives:5};
        case "3": return {min:1,max:100,tentatives:4};
        default:
            alert("niveau invalide,selection par defaut intermediaire");
            return {min:1,max:50,tentatives:5};
    }
}
function jouer(){
    let{min,max,tentatives}=choisirniveau();
    let nombre=generernombrealea(min,max);
    let gagne=demandertentative(tentatives,nombre,min,max);
}
jouer();

