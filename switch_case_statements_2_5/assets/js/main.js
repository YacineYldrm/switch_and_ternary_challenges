// #############################
// 
//     switch case statements
// 
// #############################

console.log("%c level-2_5", "color: blue; background-color: gold");

// bundesländer Texte array
const outputText = [

"Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt",

"Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt",

"Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt",

"Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt",

"Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt",

"Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt",

"Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt",

"Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt",

"Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt",

"Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt",

"Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt",

"Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt",

"Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt",

"Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt",

"Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt",

"Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt",

"Ein solches Bundesland gibt es in Deutschland nicht."
]

function check()
{
    const bundeslandInfo = document.body.querySelector('#bundeslandInfo');
    const bundeslandOutput = document.body.querySelector('#bundeslandOutput');

    switch(bundeslandInfo.value)
    {
        case "Baden-Württemberg":
            bundeslandOutput.textContent = outputText[0];
            break;
        case "Bayern":
            bundeslandOutput.textContent = outputText[1];
            break;
        case "Berlin":
            bundeslandOutput.textContent = outputText[2];
            break;
        case "Brandenburg":
            bundeslandOutput.textContent = outputText[3];
            break;
        case "Bremen":
            bundeslandOutput.textContent = outputText[4];
            break;
        case "Hamburg":
            bundeslandOutput.textContent = outputText[5];
            break;
        case "Hessen":
            bundeslandOutput.textContent = outputText[6];
            break;
        case "Mecklenburg-Vorpommern":
            bundeslandOutput.textContent = outputText[7];
            break;
        case "Niedersachsen":
            bundeslandOutput.textContent = outputText[8];
            break;
        case "Nordrhein-Westfalen":
            bundeslandOutput.textContent = outputText[9];
            break;
        case "Rheinland-Pfalz":
            bundeslandOutput.textContent = outputText[10];
            break;
        case "Saarland":
            bundeslandOutput.textContent = outputText[11];
            break;
        case "Sachsen":
            bundeslandOutput.textContent = outputText[12];
            break;
        case "Sachsen-Anhalt":
            bundeslandOutput.textContent = outputText[13];
            break;
        case "Schleswig-Holstein":
            bundeslandOutput.textContent = outputText[14];
            break;
        case "Thüringen":
            bundeslandOutput.textContent = outputText[15];
            break;
        default:
            bundeslandOutput.textContent = outputText[16];
    }   
}
