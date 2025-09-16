/**
 * Génère et affiche le calendrier pour un mois donné
 * @param {number} year
 * @param {number} month 0-based
 */
function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    //En ajoutant 1 mois avec le jour 0, on obtient automatiquement le dernier jour du mois
    const lastDay = new Date(year, month + 1, 0);
    const calendar = [];

    //Calcul du décalage du premier jour (Lundi=0)
    let startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    let week = Array(7).fill(null);

    //Remplissage des jours du mois
    for (let day = 1; day <= lastDay.getDate(); day++) {
        week[startDay] = day;
        startDay++;
        if (startDay > 6) {
            calendar.push(week);
            week = Array(7).fill(null);
            startDay = 0;
        }
    }

    //on push ensuite la dernière semaine incomplète
    calendar.push(week);

    return calendar;
}

/**
 * Affiche le calendrier dans la page HTML *
 */
function renderCalendar() {
    const monthInput = document.getElementById("datePicker").value;
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth(); // 0-based

    if (monthInput) {
        /**
         * destructuration équivalent à
         * const parts = monthInput.split("-")
         * year = parseInt(parts[0])
         * month = parseInt(parts[1])
         */
        const [y, m] = monthInput.split("-");
        year = parseInt(y);
        month = parseInt(m) - 1;
    }

    const calendar = generateCalendar(year, month);

    const calendarDiv = document.getElementById("calendar");
    //Vide le calendrier existant
    calendarDiv.innerHTML = "";

    //Affiche les entêtes
    ["L", "Ma", "Me", "J", "V", "S", "D"].forEach((d) => {
        const div = document.createElement("div");
        div.className = "day-header";
        div.innerText = d;
        calendarDiv.appendChild(div);
    });

    //Affiche les jours
    calendar.forEach((week) => {
        week.forEach((day) => {
            const div = document.createElement("div");
            if (day) {
                div.innerText = day;
                div.className = "day-cell";
            } else {
                div.className = "empty-cell";
            }
            calendarDiv.appendChild(div);
        });
    });
}


window.onload = function () {
    //Affiche le calendrier du mois courant au chargement
    renderCalendar();
    //Ajoute un évènement qui se déclenche au changement de données dans l'input
    document.getElementById('datePicker').addEventListener('input', renderCalendar)
}

