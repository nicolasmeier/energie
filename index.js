var settings = require('./settings.json');

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
// ------------------

// november valuemap, predefined key - value map
var novQuestionsEnum = {
    'Wann startet JUSTICE LEAGUE im Kino?': '16. November',
    'Nachdem sie ihr Debut als Wonder Woman / Diana Prince in BATMAN V SUPERMAN: DAWN OF JUSTICE feierte, kehrt sie nun als Amazonen-Kriegerin in JUSTICE LEAGUE zurück auf die Leinwand. Von wem ist die Rede?': 'Gal Gadot',
    'Welcher maskierte Act war vor zwei Jahren an der Energy Star Night dabei?': 'Cro',
    'In welchen 3 Städten findest du unsere Radiostudios?': 'Zürich, Bern und Basel',
    'In welchem Element fühlt sich dieser Superheld am Wohlsten?': 'Im Wasser',
    'Wie oft stand der Schweizer Act Bligg bereits auf der Energy Star Night Bühne?': '6',
    'In JUSTICE LEAGUE kehrt er als Batman / Bruce Wayne zurück auf die Leinwand, nachdem er die Rolle bereits in BATMAN V SUPERMAN: DAWN OF JUSTICE übernahm. Von wem ist die Rede?': 'Ben Affleck',
    'Unter welchem Motto findet die diesjährigen Energy Star Night statt?': 'Jungle',
    'In welchem Jahr fand die erste Ausgabe des Energy Stars For Free statt?': '2003',
    'Welcher Superheld trägt einen Blitz auf seiner Brust?': 'Flash',
    'Welche zwei Schweizer Acts performten 2016 gemeinsam auf der Energy Star Night Bühne?': 'Bligg und Stress',
    'Wie viele Tickets werden jeweils für die Energy Star Night verlost?': '13000',
    'Wie hiess die Energy Star Night bevor sie im Jahr 2016 umbenannt wurde?': 'Energy Stars For Free',
    'Was zeichnet Flash aus?': 'Er ist schnell wie der Blitz',
    'Welcher Preis wird an der Energy Star Night vergeben?': 'Best Swiss Music Award',
    'Sunrise Avenue wird das Publikum an der diesjährigen Energy Star Night mitreissen. In welchen Jahren performten sie bereits an der Energy Star Night?': '2006 und 2011',
    'Was zeichnet Cyborg aus?': 'Er hat einen mechanisch verbesserten Körper',
    'Wie viele Acts standen 2016 auf der Energy Star Night Bühne?': '15',
    'Zum wievielten Mal findet die Energy Star Night statt?': '15',
    'Wie heisst dieser Superheld?': 'Cyborg',
    'Wie heisst dieser Superheld?': 'Aquaman',
    'Wie heisst diese Superheldin?': 'Wonder Woman',
    'Auf welchem dieser Portale kann man keine Tickets gewinnen': 'ticketcorner.ch',
    'Wo findet die Energy Star Night statt?': 'Hallenstadion (Zürich)',
    'Was für Acts spielen jeweils auf der Bühne der Energy Star Night?': 'Internationale und nationale Stars',
    'Welcher dieser Superhelden kommt NICHT im Trailer vor?': 'Superman',
    'Man kennt ihn auch als Bruce Wayne, doch wie ist sein Superheld-Name?': 'Batman',
};

// november valuemap, predefined key - value map
var novQuestionsEnum = {
    'Wann startet JUSTICE LEAGUE im Kino?': '16. November',
    'Nachdem sie ihr Debut als Wonder Woman / Diana Prince in BATMAN V SUPERMAN: DAWN OF JUSTICE feierte, kehrt sie nun als Amazonen-Kriegerin in JUSTICE LEAGUE zurück auf die Leinwand. Von wem ist die Rede?': 'Gal Gadot',
    'Welcher maskierte Act war vor zwei Jahren an der Energy Star Night dabei?': 'Cro',
    'In welchen 3 Städten findest du unsere Radiostudios?': 'Zürich, Bern und Basel',
    'In welchem Element fühlt sich dieser Superheld am Wohlsten?': 'Im Wasser',
    'Wie oft stand der Schweizer Act Bligg bereits auf der Energy Star Night Bühne?': '6',
    'In JUSTICE LEAGUE kehrt er als Batman / Bruce Wayne zurück auf die Leinwand, nachdem er die Rolle bereits in BATMAN V SUPERMAN: DAWN OF JUSTICE übernahm. Von wem ist die Rede?': 'Ben Affleck',
    'Unter welchem Motto findet die diesjährigen Energy Star Night statt?': 'Jungle',
    'In welchem Jahr fand die erste Ausgabe des Energy Stars For Free statt?': '2003',
    'Welcher Superheld trägt einen Blitz auf seiner Brust?': 'Flash',
    'Welche zwei Schweizer Acts performten 2016 gemeinsam auf der Energy Star Night Bühne?': 'Bligg und Stress',
    'Wie viele Tickets werden jeweils für die Energy Star Night verlost?': '13000',
    'Wie hiess die Energy Star Night bevor sie im Jahr 2016 umbenannt wurde?': 'Energy Stars For Free',
    'Was zeichnet Flash aus?': 'Er ist schnell wie der Blitz',
    'Welcher Preis wird an der Energy Star Night vergeben?': 'Best Swiss Music Award',
    'Sunrise Avenue wird das Publikum an der diesjährigen Energy Star Night mitreissen. In welchen Jahren performten sie bereits an der Energy Star Night?': '2006 und 2011',
    'Was zeichnet Cyborg aus?': 'Er hat einen mechanisch verbesserten Körper',
    'Wie viele Acts standen 2016 auf der Energy Star Night Bühne?': '15',
    'Zum wievielten Mal findet die Energy Star Night statt?': '15',
    'Wie heisst dieser Superheld?': 'Cyborg',
    'Wie heisst dieser Superheld?': 'Aquaman',
    'Wie heisst diese Superheldin?': 'Wonder Woman',
    'Auf welchem dieser Portale kann man keine Tickets gewinnen': 'ticketcorner.ch',
    'Wo findet die Energy Star Night statt?': 'Hallenstadion (Zürich)',
    'Was für Acts spielen jeweils auf der Bühne der Energy Star Night?': 'Internationale und nationale Stars',
    'Welcher dieser Superhelden kommt NICHT im Trailer vor?': 'Superman',
    'Man kennt ihn auch als Bruce Wayne, doch wie ist sein Superheld-Name?': 'Batman',
};


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
    alert("Test");
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
        await client.init()
            .url('http://game.energy.ch/')
            .setValue('#inlineFormInput', settings.phoneNumber)
            .click('.form-inline .game-button')
            .then(promptSMSCode).then(solveQuestion);

        await client.end();
}

async function promptSMSCode(){

    var code = "";
    var prompt = require('prompt');

    //
    // Start the prompt
    //
    prompt.start();

    //
    // Get two properties from the user: username and email
    //
    prompt.get(['smsCode'], function (err, result) {
      //
      // Log the results.
      //
      console.log('Command-line input received:');
      console.log('  smsCode: ' + result.smsCode);
      client.setValue(".mobile-input .form-control",result.smsCode);
    });
}



startGame();
