var settings = require('./settings.json');

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
// ------------------



// predefined key - value map
var valueMap = {
    'Von welchem ehemaligen Energy Air Act ist der Song «Bilder im Kopf»?': 1,                              // 1
    'Welcher Act stand NOCH NIE auf der Energy Air Bühne?': 3,                                              // 2
    'Das Energy Air ist ...?': 1,                                                                           // 3
    'Von wem wird das Energy Air durchgeführt?': 1,                                                         // 4
    'Welcher Pop-Sänger stand in diesem Jahr schon auf der Bühne des Stade de Suisse?': 1,                  // 5
    'Wie viele Tage dauert das Energy Air?': 3,                                                             // 6
    'Von welchem vergangenen Energy Air Act ist der Song «Angelina»?': 1,                                   // 7
    'Wer hatte den letzten Auftritt am Energy Air 2016?': 3,                                                // 8
    'Welche deutsche Sängerin stand letztes Jahr auf der Energy Air Bühne?': 1,                             // 9
    'Wie heissen zwei andere grosse Events von Energy?': 1,                                                 // 10
    'Wie gross ist die Spielfläche des Stade de Suisse?': 2,                                                // 11
    'Wie hiess der Energy Air Song im Jahr 2014?': 3,                                                       // 12
    'Wie viele Zuschauer passen ins Stade de Suisse?': 1,                                                   // 13
    'Was bedeutet Air auf Deutsch?': 2,                                                                     // 14
    'Welcher Act performte in einem Karton-Hippie-Bus?': 3,                                                 // 15
    'Wie viele Sitzplätze hat das Stade de Suisse bei Sportveranstaltungen?': 1,                            // 16
    'Mit welchem Künstler stand Schlangenfrau Nina Burri auf der Bühne?': 1,                                // 17
    'Welche Plätze gibt es am Energy Air?': 3,                                                              // 18
    'Welcher Act stand schon einmal auf der Energy Air Bühne?': 1,                                          // 19
    'Welcher DJ stand noch nie auf der Energy Air Bühne?': 2,                                               // 20
    'Wie hiess die Energy Air Hymne 2015?': 1,                                                              // 21
    'Was ist die obere Altersbeschränkung des Energy Air?': 2,                                              // 22
    'Welcher dieser Acts Stand schon auf der Stade de Suisse Bühne?': 2,                                    // 23
    'Wann findet das diesjährige Energy Air statt?': 2,                                                     // 24
    'Was ist das Energy Air als einziger Energy Event?': 1,                                                 // 25
    'Wie viel kostet ein Energy Air Ticket?': 1,                                                            // 26
    'Wann wurde das Stade de Suisse offiziell fertig gestellt?': 1,                                         // 27
    'Welche Farben dominieren das Energy Air Logo?': 3,                                                     // 28
    'Wie viel kostet die Energy Air App?': 2,                                                               // 29
    'Wo kann man Energy Air Tickets kaufen?': 3,                                                            // 30
    'Welcher Künstler stand NOCH NIE auf der Energy Air Bühne?': 1,                                         // 31
    'Zum wievielten Mal findet das Energy Air statt?': 2,                                                   // 32
    'Wie lautet der offizielle Energy Air Hashtag?': 3,                                                     // 33
    'Wie viele Male standen Dabu Fantastic bereits auf der Energy Air Bühne?': 3,                           // 34
    'Wie hiess das Stade de Suisse früher?': 1,                                                             // 35
    'Welches Stadion ist das grösste der Schweiz?': 1,                                                      // 36
    'Wann ist die offizielle Türöffnung beim Energy Air?': 1,                                               // 37
    'Wie viele Tickets werden für das Energy Air verlost?': 1,                                              // 38
    'In welcher Schweizer Stadt hat Energy KEIN Radiostudio?': 3,                                           // 39   
    'Welcher Act stand schon einmal auf der Energy Bühne?': 1,                                              // 40    
    'Wann fand das Energy Air letztes Jahr statt?': 1,                                                      // 41      
    'In welchem Monat findet das Energy Air jeweils statt?': 2,                                             // 42
    'Ab wann darf man, ohne eine erwachsene Begleitperson, am Energy Air teilnehmen?': 1,                   // 43
    'Wie oft pro Jahr findet das Energy Air statt': 3,                                                      // 44
    'Wo findet das Energy Air statt?': 3,                                                                   // 45
    'Welcher Fussballverein ist im Stade de Suisse Zuhause?': 1,                                            // 46
    'Wann fand das erste Energy Air statt?': 1,                                                             // 47
    'Wie oft pro Jahr findet das Energy Air statt?': 3,                                                     // 48
    'Welcher Energy Air Act aus den letzten Jahren stand nur mit seinem Gitarristen auf der Bühne?': 1,     // 49
    'In welchem Jahr stand OneRepublic auf der Bühne des Energy Air?': 1,                                   // 50
};




// get answer to question
function getAnswer(question){
    // return 1,2 or 3
    for (var entry in valueMap) {
        if (entry == question) {
            return valueMap[entry];
        }
    }

    // if answer not found output question to console.log and return first result
    console.log('\x1b[36m%s\x1b[0m', question); 
    //console.log('!->'+question+'<-!');
    return 0;
}


async function solveQuestion(){
    while ( await client.isExisting('form.question h1')) {
        //console.log('question start');
        await client
            .getText('form.question h1').then(async function (text) { 
                //console.log('||' + text + '||');

                switch(getAnswer(text)){
                    case 1:
                        await client.click('#option1');
                        break;
                    case 2:
                        await client.click('#option2');
                        break;
                    case 3:
                        await client.click('#option3');
                        break;
                    default:
                        //client.click('#option1');
                        break;
                }
                return;
            })
            .click('button.round-button-circle')
        //console.log('question end');
    }
    //console.log('Fragen beantwortet');
    await client
        .then(hopeAndPray);
}

async function hopeAndPray(){
    //console.log('now we hope')
    await client
        .click('button.round-button-circle')
        .click('#wingame div.col-xs-4:nth-child(4)');
    
    if ( await client.isExisting('h1=Das war das falsche Logo, knapp daneben! Versuche es erneut!')){
        //await client.end();
        console.log('Restart.... (we lost)');
        /*await client.init()
            .url('http://game.energy.ch/')
            .setValue('#mobile', settings.phoneNumber)
            .click('#go')
            .then(solveQuestion);*/

    }else{
        console.log('hurra');
        console.log('Wir haben gewonnen');
        console.log('Ein Wunder ist geschehen');
        await client.pause(1000 * 60 * 60 * 24); // 1 Tag warten
    }
}

async function startGame(){
    while(true){
        await client.init()
            .url('http://game.energy.ch/')
            .setValue('#mobile', settings.phoneNumber)
            .click('#go')
            .then(solveQuestion);

        await client.end();
    }
}

startGame();
