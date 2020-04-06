// Agreement Attraction in Romanian (simple version without adjectives)
// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep",rshuffle(startsWith('ATTRAGREEROMANIAN'),startsWith('filler'))),
    'debrief'
     );

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"
;
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server."; 

// Controller settings.
// Parameter settings taken from Staub 2009
var defaults = [
    DS, {q: 'Is this sentence grammatical?',
        as: [['f','Yes'],['j','No']],
        randomOrder: false,
        presentHorizontally: true,
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 250,
        wordPauseTime: 125,
        timeout: 2000}
];
// Add breaks every 24 items
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p> Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [
["timeoutSep", Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],
    
    
    ['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "There are no right or wrong answers; many speakers have different intuitions about whether a sentence sounds right or wrong, and that's perfectly natural."],
                           ["p", "Let's try one practice item."]
                         ]}],

['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "Those cats was snoring loudly."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "How was that? That item is one that some, but not all, English speakers judge to be grammatical. "],
                           ["p", "Let's try some more."]
                         ]}],

['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "At the ball, the prince waltzed slowly would smile."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "Without warning, Geoffrey turned and screamed at the waiter who embarrassed him."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "Madame de Plessy has sitted up all night worrying about her son."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "The barista lazily made a latte and didn't even try to make a design on top."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Alright, that's it for practice! Hit any key when you're ready to begin."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Hands in place! Your first sentence of this block will start soon."}],

//// Shared experimental items + fillers

[["FLAPJACK-AMBIG-SHORT",1], DS, {s:"I’m not sure which treasure the pirate noticed at the beach found."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv."]
                         ]}],
['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Pisicuţele tigrate",as: [['s','sunt'],['k','este']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut? Pur şi simplu alegeţi rapid varianta care vi se pare o continuare mai bună a propoziţiei."],
                           ["p", "Multor vorbitori nativi de limba română li se pare că 'sunt' este o continuare mai firească a fragmentului anterior. Hai să mai exersăm un pic."],
                         ]}],

['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Zambila roz",as: [['s','miros'],['k','miroase']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],
['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Maria şi Ion",as: [['s','sunt'],['k','este']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."}],


//// Shared experimental items + fillers
//// 
[["ATTRAGREEROMANIAN-matchheadsg",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femeie mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cărţile de lângă femei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cărţile de lângă femeie mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadsg",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreaţă mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreţe mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",2], "EPDashedSentence", {s:"+"}, DS, {s:"Viorile de lângă cântăreţe mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",2], "EPDashedSentence", {s:"+"}, DS, {s:" Viorile de lângă  cântăreaţă mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadsg",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă croitoreasă uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă croitorese uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochiile de lângă croitorese uneori ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",3], "EPDashedSentence", {s:"+"}, DS, {s:" Rochiile de lângă  croitoreasă uneori ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadsg",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodină uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodine uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă gospodine uneori ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă  gospodină uneori ",as: [['s','au'],['k','are']]}], 


[["ATTRAGREEROMANIAN-matchheadsg",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă fată adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă fete adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fete adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fată adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadsg",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă elevă adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă eleve adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă eleve adesea ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă elevă adesea ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadsg",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă contabilă mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă contabile mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă contabile mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",7], "EPDashedSentence", {s:"+"}, DS, {s:" Vânzătoarele de lângă contabilă mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadsg",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă ţărancă adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă ţărănci adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţărănci adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţărancă adesea",as: [['s','au'],['k','are']]}],


[["ATTRAGREEROMANIAN-matchheadsg",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organism uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organisme uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",9], "EPDashedSentence", {s:"+"}, DS, {s:" Cuţitele de lângă organisme uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",9], "EPDashedSentence", {s:"+"}, DS, {s:" Cuţitele de lângă organism uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animal uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animale uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă animale uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă animal uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustaceu adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustacee adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă crustacee adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă crustaceu adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macrou mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macrouri mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă macrouri mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă macrou mereu",as: [['s','au'],['k','are']]}],


[["ATTRAGREEROMANIAN-matchheadsg",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletul de lângă trup mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletul de lângă trupuri mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă trupuri mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă trup mereu",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă nevertebrat uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă nevertebrate uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebrate uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebrat uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă vertebrat adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă vertebrate adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebrate adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebrat adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă mamifer uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă mamifere uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamifere uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamifer uneori",as: [['s','au'],['k','are']]}],


[["ATTRAGREEROMANIAN-matchheadsg",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copil adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copii adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii de lângă copii adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",17], "EPDashedSentence", {s:"+"}, DS, {s:" Câinii de lângă copil adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacient uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacienţi uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă pacienţi uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă pacient uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugăr mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugări mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă călugări mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă călugăr mereu",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă student uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă studenţi uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorii de lângă studenţi uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",20], "EPDashedSentence", {s:"+"}, DS, {s:" Profesorii de lângă student uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă hangiu mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă hangii mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangii mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangiu mereu",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă erou mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă eroi mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă eroi mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă erou mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă croitor adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă croitori adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitori adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitor adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-matchheadsg",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă contabil adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă contabili adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabili adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabil adesea",as: [['s','au'],['k','are']]}],





//// Fillers
[["filler-twonounspluralcorrectchoice",25], "EPDashedSentence", {s:"+"}, DS, {s:"Fata pe care domnii o",as: [['s','iubesc'],['k','iubeşte']]}],
[["filler-twonounspluralcorrectchoice",26], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea pe care fetele o",as: [['s','citesc'],['k','citeşte']]}],
[["filler-twonounspluralcorrectchoice",27], "EPDashedSentence", {s:"+"}, DS, {s:"Pinguinul pe care copiii îl",as: [['s','privesc'],['k','priveşte']]}],
[["filler-twonounspluralcorrectchoice",28], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica pe care băieţii o",as: [['s','lovesc'],['k','loveşte']]}],
[["filler-twonounspluralcorrectchoice",29], "EPDashedSentence", {s:"+"}, DS, {s:"Veveriţa pe care bărbaţii o",as: [['s','prind'],['k','prinde']]}],
[["filler-twonounspluralcorrectchoice",30], "EPDashedSentence", {s:"+"}, DS, {s:"Lumina pe care oamenii o",as: [['s','văd'],['k','vede']]}],
[["filler-twonounspluralcorrectchoice",31], "EPDashedSentence", {s:"+"}, DS, {s:"Casa pe care contabilii o",as: [['s','construiesc'],['k','construieşte']]}],
[["filler-twonounspluralcorrectchoice",32], "EPDashedSentence", {s:"+"}, DS, {s:"Mingea pe care sportivii o",as: [['s','aleg'],['k','alege']]}],
[["filler-twonounspluralcorrectchoice",33], "EPDashedSentence", {s:"+"}, DS, {s:"Vinul pe care bucătarii îl",as: [['s','beau'],['k','bea']]}],
[["filler-twonounspluralcorrectchoice",34], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele pe care doctorii îl",as: [['s','hrănesc'],['k','hrăneşte']]}],
[["filler-twonounspluralcorrectchoice",35],  "EPDashedSentence", {s:"+"}, DS, {s:"Poemul pe care tinerii îl",as: [['s','spun'],['k','spune']]}],
[["filler-twonounspluralcorrectchoice",36], "EPDashedSentence", {s:"+"}, DS, {s:"Omul pe care animalele îl",as: [['s','îndrăgesc'],['k','îndrăgeşte']]}], 
[["filler-twonounssingularcorrectchoice",37], "EPDashedSentence", {s:"+"}, DS, {s:"Vinurile pe care domnul le",as: [['s','iubesc'],['k','iubeşte']]}], 
[["filler-twonounssingularcorrectchoice",38], "EPDashedSentence", {s:"+"}, DS, {s:"Scrisorile pe care fata le",as: [['s','citesc'],['k','citeşte']]}], 
[["filler-twonounssingularcorrectchoice",39], "EPDashedSentence", {s:"+"}, DS, {s:"Girafele pe care copilul le",as: [['s','privesc'],['k','priveşte']]}], 
[["filler-twonounssingularcorrectchoice",40], "EPDashedSentence", {s:"+"}, DS, {s:"Motanii pe care bunicul îi",as: [['s','adăpostesc'],['k','adăposteşte']]}], 
[["filler-twonounssingularcorrectchoice",41], "EPDashedSentence", {s:"+"}, DS, {s:"Şerpii pe care bărbatul îi",as: [['s','strivesc'],['k','striveşte']]}], 
[["filler-twonounssingularcorrectchoice",42], "EPDashedSentence", {s:"+"}, DS, {s:"Stelele pe care înţeleptul le",as: [['s','urmăresc'],['k','urmăreşte']]}], 
[["filler-twonounssingularcorrectchoice",43], "EPDashedSentence", {s:"+"}, DS, {s:"Barurile pe care pictorul le",as: [['s','construiesc'],['k','construieşte']]}], 
[["filler-twonounssingularcorrectchoice",44], "EPDashedSentence", {s:"+"}, DS, {s:"Păsările pe care colecţionarul le",as: [['s','văd'],['k','vede']]}], 
[["filler-twonounssingularcorrectchoice",45], "EPDashedSentence", {s:"+"}, DS, {s:"Sucurile pe care chelnerul le",as: [['s','beau'],['k','bea']]}], 
[["filler-twonounssingularcorrectchoice",46], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile pe care doamna le",as: [['s','îngrijesc'],['k','îngrijeşte']]}], 
[["filler-twonounssingularcorrectchoice",47], "EPDashedSentence", {s:"+"}, DS, {s:"Cuvintele pe care preotul le",as: [['s','rostesc'],['k','rosteşte']]}], 
[["filler-twonounssingularcorrectchoice",48], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii pe care pisica îi",as: [['s','urăsc'],['k','urăşte']]}], 
[["filler-coordination",49], "EPDashedSentence", {s:"+"}, DS, {s:"Femeia şi copilul",as: [['s','beau'],['k','bea']]}], 
[["filler-coordination",50], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul şi bolnavul",as: [['s','plâng'],['k','plânge']]}],
[["filler-coordination",51], "EPDashedSentence", {s:"+"}, DS, {s:"Vulpoiul şi vulpea",as: [['s','sar'],['k','sare']]}],
[["filler-coordination",52], "EPDashedSentence", {s:"+"}, DS, {s:"Găina şi puiul",as: [['s','ciugulesc'],['k','ciuguleşte']]}],
[["filler-coordination",53], "EPDashedSentence", {s:"+"}, DS, {s:"Paharul şi sticla",as: [['s','cad'],['k','cade']]}],
[["filler-coordination",54], "EPDashedSentence", {s:"+"}, DS, {s:"Oboseala şi plictisul",as: [['s','ucid'],['k','ucide']]}],
[["filler-coordination",55], "EPDashedSentence", {s:"+"}, DS, {s:"Iubirea şi prietenia",as: [['s','susţin'],['k','susţine']]}],
[["filler-coordination",56], "EPDashedSentence", {s:"+"}, DS, {s:"Căţelul şi pisica",as: [['s','dorm'],['k','doarme']]}],
[["filler-coordination",57], "EPDashedSentence", {s:"+"}, DS, {s:"Cafeaua şi ceaiul",as: [['s','au'],['k','are']]}],
[["filler-coordination",58], "EPDashedSentence", {s:"+"}, DS, {s:"Trandafirul şi zambila",as: [['s','miros'],['k','miroase']]}],
[["filler-coordination",59], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea şi caietul",as: [['s','sunt'],['k','este']]}],
[["filler-coordination",60], "EPDashedSentence", {s:"+"}, DS, {s:"Papagalul şi băiatul",as: [['s','vorbesc'],['k','vorbeşte']]}],
[["filler-semanticchoice",61], "EPDashedSentence", {s:"+"}, DS, {s:"Lampa de lângă cartea verde ",as: [['s','se aprinde'],['k','se citeşte']]}],
[["filler-semanticchoice",62], "EPDashedSentence", {s:"+"}, DS, {s:"Fetiţa de lângă camera albastră",as: [['s','dansează'],['k','luminează']]}],
[["filler-semanticchoice",63], "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşul de lângă scaunul roşu ",as: [['s','doarme'],['k','se rupe']]}],
[["filler-semanticchoice",64], "EPDashedSentence", {s:"+"}, DS, {s:"Pasărea de lângă masa neagră",as: [['s','cântă'],['k','se pliază']]}],
[["filler-semanticchoice",65], "EPDashedSentence", {s:"+"}, DS, {s:"Măgarul de lângă căţelul maro",as: [['s','rage'],['k','latră']]}],
[["filler-semanticchoice",66], "EPDashedSentence", {s:"+"}, DS, {s:"Papucii de lângă copiii bolnavi",as: [['s','alunecă'],['k','strănută']]}],
[["filler-semanticchoice",67], "EPDashedSentence", {s:"+"}, DS, {s:"Hainele de lângă femeile zâmbăreţe",as: [['s','cad'],['k','vorbesc']]}],
[["filler-semanticchoice",68], "EPDashedSentence", {s:"+"}, DS, {s:"Albinele de lângă portocalele stricate",as: [['s','bâzâie'],['k','miros']]}],
[["filler-semanticchoice",69], "EPDashedSentence", {s:"+"}, DS, {s:"Râul de lângă pădurea frumoasă",as: [['s','curge'],['k','arde']]}],
[["filler-semanticchoice",70], "EPDashedSentence", {s:"+"}, DS, {s:"Urşii de lângă prinţesele minunate ",as: [['s','hibernează'],['k','se căsătoresc']]}],
[["filler-semanticchoice",71], "EPDashedSentence", {s:"+"}, DS, {s:"Florile de lângă sticlele albastre",as: [['s','se ofilesc'],['k','se sparg']]}],
[["filler-semanticchoice",72], "EPDashedSentence", {s:"+"}, DS, {s:"Calculatoarele de lângă copiii năzdrăvani",as: [['s','se strică'],['k','se joacă']]}],
[["filler-onenounplagreement",73], "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşii fricoşi",as: [['s','se ascund'],['k','se ascunde']]}],
[["filler-onenounplagreement",74], "EPDashedSentence",{s:"+"}, DS, {s:"Cutremurele mari",as: [['s','distrug'],['k','distruge']]}],
[["filler-onenounplagreement",75], "EPDashedSentence",{s:"+"}, DS, {s:"Grădinile japoneze",as: [['s','au'],['k','are']]}],
[["filler-onenounplagreement",76], "EPDashedSentence",{s:"+"}, DS, {s:"Fetele seducătoare",as: [['s','atrag'],['k','atrage']]}],
[["filler-onenounplagreement",77], "EPDashedSentence", {s:"+"}, DS, {s:"Muzicienii creativi ",as: [['s','compun'],['k','compune']]}],
[["filler-onenounplagreement",78], "EPDashedSentence", {s:"+"}, DS, {s:"Rănile sufleteşti ",as: [['s','dor'],['k','doare']]}],
[["filler-onenounplagreement",79], "EPDashedSentence", {s:"+"}, DS, {s:"Paharele colorate",as: [['s','conţin'],['k','conţine']]}],
[["filler-onenounplagreement",80], "EPDashedSentence", {s:"+"}, DS, {s:"Hamsterii curioşi",as: [['s','apar'],['k','apare']]}],
[["filler-onenounplagreement",81], "EPDashedSentence", {s:"+"}, DS, {s:"Elevii cuminţi",as: [['s','doresc'],['k','doreşte']]}],
[["filler-onenounplagreement",82], "EPDashedSentence", {s:"+"}, DS, {s:"Parfumurile franţuzeşti",as: [['s','miros'],['k','miroase']]}],
[["filler-onenounplagreement",83], "EPDashedSentence", {s:"+"}, DS, {s:"Bunicii iubitori",as: [['s','dau'],['k','dă']]}],
 [["filler-onenounplagreement",84], "EPDashedSentence", {s:"+"}, DS, {s:"Cheile verzi",as: [['s','deschid'],['k','deschide']]}],
[["filler-onenounsgagreement",85], "EPDashedSentence", {s:"+"}, DS, {s:"Fata şatenă",as: [['s','se ascund'],['k','se ascunde']]}],
[["filler-onenounsgagreement",86], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica năzdrăvană",as: [['s','sparg'],['k','sparge']]}],
[["filler-onenounsgagreement",87], "EPDashedSentence", {s:"+"}, DS, {s:"Caietul negru",as: [['s','au'],['k','are']]}],
[["filler-onenounsgagreement",88], "EPDashedSentence", {s:"+"}, DS, {s:"Magnetul maro",as: [['s','atrag'],['k','atrage']]}],
[["filler-onenounsgagreement",89], "EPDashedSentence", {s:"+"}, DS, {s:"Pixul albastru",as: [['s','scriu'],['k','scrie']]}],
[["filler-onenounsgagreement",90], "EPDashedSentence", {s:"+"}, DS, {s:"Iepurele alb",as: [['s','sar'],['k','sare']]}],
[["filler-onenounsgagreement",91], "EPDashedSentence", {s:"+"}, DS, {s:"Studentul harnic",as: [['s','muncesc'],['k','munceşte']]}],
[["filler-onenounsgagreement",92], "EPDashedSentence", {s:"+"}, DS, {s:"Femeia misterioasă",as: [['s','dispar'],['k','dispare']]}],
[["filler-onenounsgagreement",93], "EPDashedSentence", {s:"+"}, DS, {s:"Poetul talentat",as: [['s','vorbesc'],['k','vorbeşte']]}],
[["filler-onenounsgagreement",94], "EPDashedSentence", {s:"+"}, DS, {s:"Mâncarea gustoasă",as: [['s','miros'],['k','miroase']]}],
[["filler-onenounsgagreement",95], "EPDashedSentence", {s:"+"}, DS, {s:"Cursul masteral",as: [['s','cuprind'],['k','cuprinde']]}],
[["filler-onenounsgagreement",96], "EPDashedSentence", {s:"+"}, DS, {s:"Bagajul mare",as: [['s','conţin'],['k','conţine']]}]


];



