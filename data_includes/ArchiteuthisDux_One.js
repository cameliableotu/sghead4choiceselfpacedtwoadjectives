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
    DS, {q: 'Este această propoziţie gramaticală?',
        as: [['f','Da'],['j','Nu']],
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
    
    
 

//// Shared experimental items + fillers

[["FLAPJACK-AMBIG-SHORT",1], DS, {s:"I’m not sure which treasure the pirate noticed at the beach found."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv. Nu există răspunsuri corecte sau greşite. Vorbitori diferiţi au intuiţii diferite privind anumite propoziţii. "]
                         ]}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "Acele pisici sforăiau foarte tare."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut?"],
                           ["p", "Multor vorbitori nativi de limba română li se pare o propoziţie gramaticală. Hai să mai exersăm un pic."],
                         ]}],

['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "La bal, prinţul valsat domol a vorbit de planurile lui de viitor."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "Iepurii au mieunat mult aseară."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "Miruna am stat toată noaptea cu griji pentru fiul ei."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "Barista a pregătit un latte fără niciun chef şi nici măcar nu a făcut vreun design."}],
['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Atenţie! Prima propoziţie din acest set va apărea pe ecran în curând."}],


//// Shared experimental items + fillers
//// 
 [["ATTRAGREEROMANIAN-matchverbheadsg",1],DS, {s:" Cartea de lângă femei mereu are farmec. " }], 
 [["ATTRAGREEROMANIAN-mismatchverbheadsg",1],DS, {s:" Cartea de lângă femei mereu au farmec. "}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",1],DS, {s:"Cărţile de lângă femei mereu au farmec." }], 
[["ATTRAGREEROMANIAN-mismatchverbheadpl",1],DS, {s:" Cărţile de lângă femei mereu are farmec. " }], 
[["ATTRAGREEROMANIAN-matchverbheadsg",2],DS, {s:"Vioara de lângă cântăreţe mereu are arcuş. "}], 
[["ATTRAGREEROMANIAN-mismatchverbheadsg",2],DS, {s:"Vioara de lângă cântăreţe mereu au arcuş."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",2],DS, {s:"Viorile de lângă cântăreţe mereu au arcuş."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadpl",2],DS, {s:" Viorile de lângă  cântăreţe mereu are arcuş."}], 
[["ATTRAGREEROMANIAN-matchverbheadsg",3],DS, {s:"Rochia de lângă croitorese uneori are dantelă. "}], 
[["ATTRAGREEROMANIAN-mismatchverbheadsg",3],DS, {s:"Rochia de lângă croitorese uneori au dantelă."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",3],DS, {s:"Rochiile de lângă croitorese uneori au dantelă."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadpl",3],DS, {s:" Rochiile de lângă  croitorese uneori au dantelă. "}], 
[["ATTRAGREEROMANIAN-matchverbheadsg",4],DS, {s:"Dulceaţa de lângă gospodine uneori are zahăr."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadsg",4],DS, {s:"Dulceaţa de lângă gospodine uneori are zahăr."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",4],DS, {s:"Dulceţurile de lângă gospodine uneori au zahăr."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",4],DS, {s:"Dulceţurile de lângă  gospodine uneori are zahăr."}],


[["ATTRAGREEROMANIAN-matchverbheadsg",5],DS, {s:"Pisica de lângă fete adesea are stil."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadsg",5],DS, {s:"Pisica de lângă fete adesea au stil."]}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",5],DS, {s:"Pisicile de lângă fete adesea au stil."]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",5],DS, {s:"Pisicile de lângă fete adesea are stil."]}],
[["ATTRAGREEROMANIAN-matchverbheadsg",6],DS, {s:"Învăţătoarea de lângă eleve adesea are succes."]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",6],DS, {s:"Învăţătoarea de lângă eleve adesea au succes."]}],
[["ATTRAGREEROMANIAN-matchverbheadpl",6],DS, {s:"Învăţătoarele de lângă eleve adesea au succes."]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",6],DS, {s:"Învăţătoarele de lângă eleve adesea are succes."]}], 
[["ATTRAGREEROMANIAN-matchverbheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu are bani."]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu au bani."]}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",7],DS, {s:"Vânzătoarele de lângă contabile mereu au bani."]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",7],DS, {s:" Vânzătoarele de lângă contabile mereu  are bani."]}],
[["ATTRAGREEROMANIAN-matchverbheadsg",8],DS, {s:"Oaia de lângă ţărănci adesea  are lapte."]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",8],DS, {s:"Oaia de lângă ţărănci adesea au lapte."]}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",8],DS, {s:"Oile de lângă ţărănci adesea au lapte."]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",8],DS, {s:"Oile de lângă ţărănci adesea are lapte."]}],


[["ATTRAGREEROMANIAN-matchverbheadsg",9],DS, {s:"Cuţitul de lângă organisme uneori are viruşi."]}],  
[["ATTRAGREEROMANIAN-mismatchverbheadsg",9],DS, {s:"Cuţitul de lângă organisme uneori au viruşi."]}],  
[["ATTRAGREEROMANIAN-matchverbheadpl",9],DS, {s:" Cuţitele de lângă organisme uneori au viruşi."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",9],DS, {s:" Cuţitele de lângă organisme uneori au viruşi."]}],  
[["ATTRAGREEROMANIAN-matchverbheadsg",10],DS, {s:"Tabloul de lângă animale uneori are vizitatori."]}],  
[["ATTRAGREEROMANIAN-mismatchverbheadsg",10],DS, {s:"Tabloul de lângă animale uneori au vizitatori."]}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",10],DS, {s:"Tablourile de lângă animale uneori au vizitatori."]}],  
[["ATTRAGREEROMANIAN-mismatchverbheadpl",10],DS, {s:"Tablourile de lângă animale uneori are vizitatori."]}],  
[["ATTRAGREEROMANIAN-matchverbheadsg",11],DS, {s:"Nisipul de lângă crustacee adesea are calciu."]}],  
[["ATTRAGREEROMANIAN-mismatchverbheadsg",11],DS, {s:"Nisipul de lângă crustacee adesea au calciu."]}],  
[["ATTRAGREEROMANIAN-matchverbheadpl",11],DS, {s:"Nisipurile de lângă crustacee adesea au calciu."]}],  
[["ATTRAGREEROMANIAN-mismatchverbheadpl",11],DS, {s:"Nisipurile de lângă crustacee adesea are calciu."]}],  
[["ATTRAGREEROMANIAN-matchverbheadsg",12],DS, {s:"Piureul de lângă macrouri mereu are piper."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",12],DS, {s:"Piureul de lângă macrouri mereu au piper."]}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",12],DS, {s:"Piureurile de lângă macrouri mereu au piper."]}],    
[["ATTRAGREEROMANIAN-mismatchverbheadpl",12],DS, {s:"Piureurile de lângă macrouri mereu are piper."]}],   


[["ATTRAGREEROMANIAN-matchverbheadsg",13],DS, {s:"Sufletul de lângă trupuri mereu are aripi."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",13],DS, {s:"Sufletul de lângă trupuri mereu au aripi."]}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",13],DS, {s:"Sufletele de lângă trupuri mereu au aripi."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",13],DS, {s:"Sufletele de lângă trupuri mereu are aripi."]}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",14],DS, {s:"Mamiferul de lângă nevertebrate uneori are banane."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",14],DS, {s:"Mamiferul de lângă nevertebrate uneori au banane."]}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori au banane."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori are banane."]}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",15],DS, {s:"Macroul de lângă vertebrate adesea are vitalitate."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",15],DS, {s:"Macroul de lângă vertebrate adesea au vitalitate."]}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",15],DS, {s:"Macrourile de lângă vertebrate adesea au vitalitate."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",15],DS, {s:"Macrourile de lângă vertebrate adesea are vitalitate."]}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",16],DS, {s:"Animalul de lângă mamifere uneori are vigoare."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",16],DS, {s:"Animalul de lângă mamifere uneori au vigoare."]}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",16],DS, {s:"Animalele de lângă mamifere uneori au vigoare."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",16],DS, {s:"Animalele de lângă mamifere uneori are vigoare."]}],   


[["ATTRAGREEROMANIAN-matchverbheadsg",17],DS, {s:"Câinele de lângă copii adesea are energie."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",17],DS, {s:"Câinele de lângă copii adesea au energie."]}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",17],DS, {s:"Câinii de lângă copii adesea au energie."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",17],DS, {s:" Câinii de lângă copii adesea are energie."]}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",18],DS, {s:"Doctorul de lângă pacienţi uneori are răbdare."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",18],DS, {s:"Doctorul de lângă pacienţi uneori au răbdare."]}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",18],DS, {s:"Doctorii de lângă pacienţi uneori au răbdare."]}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",18],DS, {s:"Doctorii de lângă pacienţi uneori are răbdare."]}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",19],DS, {s:"Preotul de lângă călugări mereu are înţelepciune. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",19],DS, {s:"Preotul de lângă călugări mereu au înţelepciune. "]}],
[["ATTRAGREEROMANIAN-matchverbheadpl",19],DS, {s:"Preoţii de lângă călugări mereu au înţelepciune. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",19],DS, {s:"Preoţii de lângă călugări mereu are înţelepciune. "]}],
[["ATTRAGREEROMANIAN-matchverbheadsg",20],DS, {s:"Profesorul de lângă studenţi uneori are realizări. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",20],DS, {s:"Profesorul de lângă studenţi uneori au realizări. "]}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",20],DS, {s:"Profesorii de lângă studenţi uneori au realizări. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",20],DS, {s:" Profesorii de lângă studenţi uneori are realizări. "]}],
[["ATTRAGREEROMANIAN-matchverbheadsg",21],DS, {s:"Cârnatul de lângă hangii mereu are savoare. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",21],DS, {s:"Cârnatul de lângă hangii mereu au savoare. "]}],
[["ATTRAGREEROMANIAN-matchverbheadpl",21],DS, {s:"Cârnaţii de lângă hangii mereu au savoare. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",21],DS, {s:"Cârnaţii de lângă hangii mereu are savoare. "]}],
[["ATTRAGREEROMANIAN-matchverbheadsg",22],DS, {s:"Buşteanul de lângă eroi mereu are rezistenţă. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",22],DS, {s:"Buşteanul de lângă eroi mereu au rezistenţă. "]}],
[["ATTRAGREEROMANIAN-matchverbheadpl",22],DS, {s:"Buştenii de lângă eroi mereu au rezistenţă. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",22],DS, {s:"Buştenii de lângă eroi mereu are rezistenţă. "]}],
[["ATTRAGREEROMANIAN-matchverbheadsg",23],DS, {s:"Nasturele de lângă croitor adesea are aţă. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",23],DS, {s:"Nasturele de lângă croitori adesea au aţă. "]}],
[["ATTRAGREEROMANIAN-matchverbheadpl",23],DS, {s:"Nasturii de lângă croitori adesea  au aţă. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",23],DS, {s:"Nasturii de lângă croitoir adesea are aţă. "]}],
[["ATTRAGREEROMANIAN-matchverbheadsg",24],DS, {s:"Sacul de lângă contabili adesea are greutate. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",24],DS, {s:"Sacul de lângă contabili adesea au greutate. "]}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",24],DS, {s:"Sacii de lângă contabili adesea au greutate. "]}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",24],DS, {s:"Sacii de lângă contabili adesea are greutate. "]}],




//// Fillers
[["filler-twonounspluralcorrectchoiceplanim",25],DS, {s:"Fata pe care domnii o iubesc este frumoasă."}],
[["filler-twonounspluralcorrectchoiceplanim",26],DS, {s:"Pinguinul pe care copiii îl privesc este Apolodor. "}],
[["filler-twonounspluralcorrectchoiceplanim",27],DS, {s:"Pisica pe care băieţii o lovesc este birmaneză. "}],
[["filler-twonounspluralcorrectchoicesganim",28],DS, {s:"Veveriţa pe care bărbaţii o prinde este maro. "}],
[["filler-twonounspluralcorrectchoicesganim",29],DS, {s:"Câinele pe care doctorii îl hrăneşte este bolnav."}],
[["filler-twonounspluralcorrectchoicesganim",30],DS, {s:"Omul pe care animalele îl îndrăgeşte este blând. "}],
[["filler-twonounspluralcorrectchoiceplnonanim",31],DS, {s:"Cartea pe care fetele o citesc este interesantă. "}],
 [["filler-twonounspluralcorrectchoiceplnonanim",32],DS, {s:"Lumina pe care oamenii o văd este verde. "}],
[["filler-twonounspluralcorrectchoiceplnonanim",33],DS, {s:"Casa pe care contabilii o construiesc este imensă. "}],
[["filler-twonounspluralcorrectchoicesgnonanim",34],DS, {s:"Mingea pe care sportivii o alege este mare. "}],
[["filler-twonounspluralcorrectchoicesgnonanim",35],DS, {s:"Vinul pe care bucătarii îl bea este roşu."}],
 [["filler-twonounspluralcorrectchoicesgnonanim",36], DS, {s:"Poemul pe care tinerii îl spune este emoţionant."}],

[["filler-twonounssingularcorrectchoiceplanim",37],DS, {s:"Girafele pe care copilul le privesc sunt înalte."}],
[["filler-twonounssingularcorrectchoiceplanim",38],DS, {s:"Motanii pe care bunicul îi adăpostesc sunt tigraţi."}],
[["filler-twonounssingularcorrectchoiceplanim",39],DS, {s:"Şerpii pe care bărbatul îi strivesc sunt veninoşi."}],

 [["filler-twonounssingularcorrectchoiceplnonanim",40],DS, {s:"Vinurile pe care domnul le iubesc sunt seci."}],
[["filler-twonounssingularcorrectchoiceplnonanim",41],DS, {s:"Scrisorile pe care fata le citesc sunt lungi. "}],
[["filler-twonounssingularcorrectchoiceplnonanim",42],DS, {s:"Stelele pe care înţeleptul le urmăresc sunt strălucitoare. "}],
 [["filler-twonounssingularcorrectchoicesgnonanim",43],DS, {s:"Barurile pe care pictorul le construieşte sunt artistice. "}],
[["filler-twonounssingularcorrectchoicessgnonanim",44],DS, {s:"Cuvintele pe care preotul le rosteşte sunt înţelepte."}],
 [["filler-twonounssingularcorrectchoicesgnonanim",45],DS, {s:"Sucurile pe care chelnerul le bea sunt dulci. "}],
[["filler-twonounssingularcorrectchoicesganim",46],DS, {s:"Pisicile pe care doamna le îngrijeşte sunt slabe."}],
[["filler-twonounssingularcorrectchoicesganim",47],DS, {s:"Păsările pe care colecţionarul le vede sunt impresionante. "}],
 [["filler-twonounssingularcorrectchoicesganim",48],DS, {s:"Câinii pe care pisica îi urăşte sunt răi. "}],
[["filler-coordinationplanim",49],DS, {s:"Femeia şi copilul beau mult suc. "}], 
[["filler-coordinationplanim",50],DS, {s:"Doctorul şi bolnavul plâng mult din cauza bolii. "}],
[["filler-coordinationplanim",51],DS, {s:"Vulpoiul şi vulpea sar în aer foarte rapid. "}],
[["filler-coordinationsganim",52],DS, {s:"Găina şi puiul ciuguleşte firimituri adesea. "}],
[["filler-coordinationsganim",53],DS, {s:"Căţelul şi pisica doarme după cină adesea. "}],
[["filler-coordinationsganim",54],DS, {s:"Papagalul şi băiatul vorbeşte foarte mult unul cu altul. "}],
[["filler-coordinationplnonanim",55],DS, {s:"Paharul şi sticla cad de pe birou uneori. "}],
[["filler-coordinationplnonanim",56],DS, {s:"Oboseala şi plictisul ucid iubirea adesea. "}],
[["filler-coordinationplnonanim",57],DS, {s:"Iubirea şi prietenia susţin moralul întotdeauna. "}],
 [["filler-coordinationsgnonanim",58],DS, {s:"Cafeaua şi ceaiul are efecte laxative. "}],
[["filler-coordinationsgnonanim",59],DS, {s:"Trandafirul şi zambila miroase foarte frumos. "}],
[["filler-coordinationsgnonanim",60],DS, {s:"Cartea şi caietul sunt pe masă mereu. "}],

 [["filler-semanticchoiceanimright",61],DS, {s:"Fetiţa de lângă camera albastră dansează. "}],
[["filler-semanticchoiceanimright",62],DS, {s:"Iepuraşul de lângă scaunul roşu doarme. "}],
[["filler-semanticchoiceanimright",63],DS, {s:"Pasărea de lângă masa neagră cântă bine. "}],
[["filler-semanticchoiceanimwrong",64],DS, {s:"Măgarul de lângă căţelul maro latră adesea. "}],
 [["filler-semanticchoiceanimwrong",65],DS, {s:"Albinele de lângă portocalele stricate miros prea tare. "}],
[["filler-semanticchoiceanimwrong",70],DS, {s:"Urşii de lângă prinţesele minunate se căsătoresc. "}],
[["filler-semanticchoicenonanimwrong",66],DS, {s:"Papucii de lângă copiii bolnavi strănută uşor. "}],
 [["filler-semanticchoicenonanimwrong",67],DS, {s:"Lampa de lângă cartea verde se citeşte uşor. "}],
[["filler-semanticchoicenonanimwrong",68],DS, {s:"Hainele de lângă femeile zâmbăreţe vorbesc mereu. "}],
[["filler-semanticchoicenonanimright",69],DS, {s:"Râul de lângă pădurea frumoasă curge adesea vara. "}],
 [["filler-semanticchoicenonanimright",71],DS, {s:"Florile de lângă sticlele albastre se ofilesc mereu. "}],
[["filler-semanticchoicenonanimright",72],DS, {s:"Calculatoarele de lângă copiii năzdrăvani se strică uneori. "}],

[["filler-onenounplagreementanimright",73],DS, {s:"Iepuraşii fricoşi se ascund de oameni adesea. "}],
[["filler-onenounplagreementanimright",74], "EPDashedSentence",{s:"+"}, DS, {s:"Fetele seducătoare atrag admiratori adesea. "}],
[["filler-onenounplagreementanimright",75],DS, {s:"Bunicii iubitori dau multe cadouri nepoţilor lor. "}],
[["filler-onenounplagreementnonanimright",76], "EPDashedSentence",{s:"+"}, DS, {s:"Cutremurele mari distrug locuinţe tot timpul."}], 
[["filler-onenounplagreementnonanimright",77],DS, {s:"Rănile sufleteşti dor foarte tare. "}],
[["filler-onenounplagreementnonanimright",78], "EPDashedSentence",{s:"+"}, DS, {s:"Grădinile japoneze au trandafiri adesea. "}],
 [["filler-onenounplagreementanimwrong",79],DS, {s:"Muzicienii creativi compune melodii deosebite. "}],
[["filler-onenounplagreementanimwrong",80],DS, {s:"Hamsterii curioşi apare în bucătărie adesea. "}],
[["filler-onenounplagreementanimwrong",81],DS, {s:"Elevii cuminţi doreşte note mari. "}],
[["filler-onenounplagreementnonanimwrong", 82],DS, {s:"Paharele colorate conţine suc de portocale. "}],
[["filler-onenounplagreementnonanimwrong",83],DS, {s:"Parfumurile franţuzeşti miroase incredibil de frumos. "}],
[["filler-onenounplagreementnonanimwrong",84],DS, {s:"Cheile verzi deschide multe uşi. "}],

[["filler-onenounsgagreementanimright",85],DS, {s:"Fata şatenă se ascunde de prieteni adesea. "}],
[["filler-onenounsgagreementanimright",86],DS, {s:"Pisica năzdrăvană sparge vase tot timpul. "}],
[["filler-onenounsgagreementanimright",90],DS, {s:"Iepurele alb sare cu mare agilitate. "}],
[["filler-onenounsgagreementnonanimright",87],DS, {s:"Caietul negru are pagini albe. "}],
[["filler-onenounsgagreementnonanimright",88],DS, {s:"Magnetul maro atrage metale adesea. "}],
[["filler-onenounsgagreementnonanimright",89],DS, {s:"Pixul albastru scrie foarte bine. "}],
 [["filler-onenounsgagreementanimwrong",91],DS, {s:"Studentul harnic muncesc foarte mult. "}],
[["filler-onenounsgagreementanimwrong",92],DS, {s:"Femeia misterioasă dispar în străinătate adesea. "}],
[["filler-onenounsgagreementanimwrong",93],DS, {s:"Poetul talentat vorbesc foarte frumos. "}],
[["filler-onenounsgagreementnonanimwrong",94],DS, {s:"Mâncarea gustoasă miros foarte bine. "}],
[["filler-onenounsgagreementnonanimwrong",95],DS, {s:"Cursul masteral cuprind multe informaţii. "}],
[["filler-onenounsgagreementnonanimwrong",96],DS, {s:"Bagajul mare conţin haine de iarnă. "}]

];



