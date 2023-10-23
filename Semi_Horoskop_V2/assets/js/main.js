// ##############################
// 
//          Semi-Horoskop
// 
// ##############################

// sternzeichen array
const zodiacSign = ["aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn"];

// gültige Monate array (Deutsch)
const monthsGer = ["jan", "feb", "mär", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "dez"];

// gültige Monate array (Englisch)
const monthsEng = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// User input nach Validität prüfen
function showHoroscope()
{
    const infoDisplay = document.body.querySelector('#infoDisplay');
    let isMonthValid = false;

    // Eingabe case insensitive zwischenspeichern
    const monthInput = document.body.querySelector('#month-birth').value.toLowerCase();

    // vorherigen Content löschen
    for (let i = 0; i < zodiacSign.length; i++)
    {
        document.body.querySelector(`.horoscope_${zodiacSign[i]}`).classList.remove('showContent');
    }
    
    infoDisplay.textContent = "";

    if (monthInput.length === 3 && isNaN(monthInput)) 
    {   
        // vergleiche User Input mit Monaten (months array)
        for (let i = 0; i < monthsGer.length; i++)
        {
            // index für entsprechendes Sternzeichen ermitteln
            if (monthInput === monthsGer[i] || monthInput === monthsEng[i])
            {
                // content auf der Website ausgeben
                document.body.querySelector(`.horoscope_${zodiacSign[i]}`).classList.add('showContent');
                return true;
            }
        }

        if (isMonthValid === false)
        {
            infoDisplay.textContent = "Please enter valid month."
            return false;
        } 
    }
    else
    {
        infoDisplay.textContent = "Please enter valid month."
        return false;
    }
}
