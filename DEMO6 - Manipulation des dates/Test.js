//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date

const d1 = new Date("2025-09-07");
console.log(d1.toLocaleDateString());

//récupération du nom jour
//la numérotation des jours commencent va de dimanche (0) à samedi (6)
const jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
console.log(jours[d1.getDay()])

//ajout de 10 jours à la date
d1.setDate(d1.getDate() + 10)
console.log(d1.toLocaleDateString());

//ajout de 2 mois à la date
d1.setMonth(d1.getMonth() + 2)
console.log(d1.toLocaleDateString());

//récupération du temps Unix (milisecondes de base)
console.log(Date.parse("1985-09-07") / 1000)




