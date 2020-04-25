var counterOverride = 0;

// Do show progress bar (fine!!)
var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep", rshuffle(startsWith('ATTRAGREEROMANIAN'),startsWith('filler'))),
     'debrief');

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedSentence';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"; 
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server"; 

// Controller settings.
var defaults = [
    "QuestionAlt", {
        hasCorrect: 0,
        randomOrder: ['f','j'],
        presentHorizontally: true
},
"EPDashedSentence", {
    mode: 'self-paced reading',
    display: 'in place'
}
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
                {html: "<p>Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 4000, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],


['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie e menită să vă obişnuiască cu stilul de lectură."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie este un pic mai complicată decȃt propoziţia pe care aţi citit-o mai înainte."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut?"],
                           ["p", "Citiți cu atenție, avȃnd grijă să înțelegeți fiecare cuvȃnt. Hai să mai exersăm un pic."]
                         ]}],

['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "La bal, prinţul a valsat frumos şi a zȃmbit prinţesei."},"QuestionAlt", {q: "Cine a zȃmbit?", as: ['Prinţul','Prinţesa']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Iepurii au alergat mult aseară."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Miruna a stat toată noaptea cu fiul ei."},"QuestionAlt", {q: "Cine a stat toată noaptea cu fiul ei?", as: ['Miruna','Marina']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Barista a pregătit un latte fără niciun chef şi nici măcar nu a făcut vreun design."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Atenţie! Prima propoziţie din acest set va apărea pe ecran în curând."}],

["timeoutSep", Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}],

//// Shared experimental items + fillers

[["ATTRAGREEROMANIAN-matchheadsg",1],DS, {s:" Cartea de lângă femeie mereu au un farmec aparte." },"QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","Femeia"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",1],DS, {s:" Cartea de lângă femei mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","Femeile"]}],
[["ATTRAGREEROMANIAN-matchheadpl",1],DS, {s:"Cărţile de lângă femei mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Femeile"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",1],DS, {s:" Cărţile de lângă femeie mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Femeile"]}],
[["ATTRAGREEROMANIAN-matchheadsg",2],DS, {s:"Vioara de lângă cântăreaţă mereu au arcuş maro deschis."} ,"QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântăreața"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",2],DS, {s:"Vioara de lângă cântăreţe mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântărețele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",2],DS, {s:"Viorile de lângă cântăreţe mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Cântărețele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",2],DS, {s:" Viorile de lângă  cântăreaţă mereu au arcuş maro deschis."},"QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Cântăreața"]}],
[["ATTRAGREEROMANIAN-matchheadsg",3],DS, {s:"Rochia de lângă croitoreasă uneori au dantelă roz delicată. "},"QuestionAlt", {q: "Cine/ce are dantelă roz delicată?", as: ["Rochia","Croitoreasa"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",3],DS, {s:"Rochia de lângă croitorese uneori au dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochia","Croitoresele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",3],DS, {s:"Rochiile de lângă croitorese uneori au dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile","Croitoresele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",3],DS, {s:" Rochiile de lângă  croitoreasă uneori au dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile","Croitoreasa"]}],
[["ATTRAGREEROMANIAN-matchheadsg",4],DS, {s:"Dulceaţa de lângă gospodină uneori au zahăr."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulceața","Gospodina"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",4],DS, {s:"Dulceaţa de lângă gospodine uneori au zahăr."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulceața","Gospodinele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",4],DS, {s:"Dulceţurile de lângă gospodine uneori au zahăr."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Gospodinele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",4],DS, {s:"Dulceţurile de lângă  gospodină uneori au zahăr."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Gospodina"]}],


[["ATTRAGREEROMANIAN-matchheadsg",5],DS, {s:"Pisica de lângă fată adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisica","Fata"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",5],DS, {s:"Pisica de lângă fete adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisica","Fetele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",5],DS, {s:"Pisicile de lângă fete adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Fetele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",5],DS, {s:"Pisicile de lângă fată adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Fata"]}],
[["ATTRAGREEROMANIAN-matchheadsg",6],DS, {s:"Învăţătoarea de lângă elevă adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarea","Eleva"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",6],DS, {s:"Învăţătoarea de lângă eleve adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarea","Elevele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",6],DS, {s:"Învăţătoarele de lângă eleve adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Elevele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",6],DS, {s:"Învăţătoarele de lângă elevă adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Eleva"]}],
[["ATTRAGREEROMANIAN-matchheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarea","Contabila"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu au mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarea","Contabilele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",7],DS, {s:"Vânzătoarele de lângă contabile mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Contabilele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",7],DS, {s:" Vânzătoarele de lângă contabile mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Contabila"]}],
[["ATTRAGREEROMANIAN-matchheadsg",8],DS, {s:"Oaia de lângă ţărancă adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oaia","Ţăranca"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",8],DS, {s:"Oaia de lângă ţărănci adesea au lapte foarte bun."}, "QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oaia","Ţărăncile"]}],
[["ATTRAGREEROMANIAN-matchheadpl",8],DS, {s:"Oile de lângă ţărănci adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Ţăranca"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",8],DS, {s:"Oile de lângă ţărancă adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Ţărăncile"]}],


[["ATTRAGREEROMANIAN-matchheadsg",9],DS, {s:"Cuţitul de lângă organism uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitul","Organismul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",9],DS, {s:"Cuţitul de lângă organisme uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitul","Organismele"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",9],DS, {s:" Cuţitele de lângă organisme uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Organismele"]}],  
[["ATTRAGREEROMANIAN-mismatchheadpl",9],DS, {s:" Cuţitele de lângă organism uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Organismul"]}],  
[["ATTRAGREEROMANIAN-matchheadsg",10],DS, {s:"Tabloul de lângă animal uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi? ", as: ["Tabloul","Animalul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",10],DS, {s:"Tabloul de lângă animale uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tabloul","Animalele"]}],   
[["ATTRAGREEROMANIAN-matchheadpl",10],DS, {s:"Tablourile de lângă animale uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Animalele"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",10],DS, {s:"Tablourile de lângă animal uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Animalul"]}],  
[["ATTRAGREEROMANIAN-matchheadsg",11],DS, {s:"Nisipul de lângă crustaceu adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipul","Crustaceul"]}],  
[["ATTRAGREEROMANIAN-mismatchheadsg",11],DS, {s:"Nisipul de lângă crustacee adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipul","Crustaceele"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",11],DS, {s:"Nisipurile de lângă crustacee adesea au calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Crustaceele"]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",11],DS, {s:"Nisipurile de lângă crustaceu adesea are calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Crustaceul"]}],  
[["ATTRAGREEROMANIAN-matchheadsg",12],DS, {s:"Piureul de lângă macrou mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureul","Macroul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",12],DS, {s:"Piureul de lângă macrouri mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureul","Macrourile"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",12],DS, {s:"Piureurile de lângă macrouri mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Macrourile"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",12],DS, {s:"Piureurile de lângă macrou mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Macroul"]}],  


[["ATTRAGREEROMANIAN-matchheadsg",13],DS, {s:"Sufletul de lângă trup mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletul","Trupul"]}],     
[["ATTRAGREEROMANIAN-mismatchheadsg",13],DS, {s:"Sufletul de lângă trupuri mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletul","Trupurile"]}],    
[["ATTRAGREEROMANIAN-matchheadpl",13],DS, {s:"Sufletele de lângă trupuri mereu au aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Trupurile"]}],      
[["ATTRAGREEROMANIAN-mismatchheadpl",13],DS, {s:"Sufletele de lângă trup mereu au aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Trupul"]}],   
[["ATTRAGREEROMANIAN-matchheadsg",14],DS, {s:"Mamiferul de lângă nevertebrat uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferul","Nevertebratul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",14],DS, {s:"Mamiferul de lângă nevertebrate uneori au banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferul","Nevertebrate"]}],      
[["ATTRAGREEROMANIAN-matchheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori au banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Nevertebrate"]}],     
[["ATTRAGREEROMANIAN-mismatchheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Nevertebratul"]}],     
[["ATTRAGREEROMANIAN-matchheadsg",15],DS, {s:"Macroul de lângă vertebrat adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macroul","Vertebratul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",15],DS, {s:"Macroul de lângă vertebrate adesea au icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macroul","Vertebratele"]}],   
[["ATTRAGREEROMANIAN-matchheadpl",15],DS, {s:"Macrourile de lângă vertebrate adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Vertebratele"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",15],DS, {s:"Macrourile de lângă vertebrat adesea au icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Nevertebratul"]}],    
[["ATTRAGREEROMANIAN-matchheadsg",16],DS, {s:"Animalul de lângă mamifer uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalul","Mamiferul"]}],    
[["ATTRAGREEROMANIAN-mismatchheadsg",16],DS, {s:"Animalul de lângă mamifere uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalul","Mamiferele"]}],     
[["ATTRAGREEROMANIAN-matchheadpl",16],DS, {s:"Animalele de lângă mamifere uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Mamiferele"]}],     
[["ATTRAGREEROMANIAN-mismatchheadpl",16],DS, {s:"Animalele de lângă mamifer uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Mamiferul"]}],    


[["ATTRAGREEROMANIAN-matchheadsg",17],DS, {s:"Câinele de lângă copil adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinele","Copilul"]}],    
[["ATTRAGREEROMANIAN-mismatchheadsg",17],DS, {s:"Câinele de lângă copii adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinele","Copiii"]}],   
[["ATTRAGREEROMANIAN-matchheadpl",17],DS, {s:"Câinii de lângă copii adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Copiii"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",17],DS, {s:" Câinii de lângă copil adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Copilul"]}],    
[["ATTRAGREEROMANIAN-matchheadsg",18],DS, {s:"Doctorul de lângă pacient uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorul","Pacientul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",18],DS, {s:"Doctorul de lângă pacienţi uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorul","Pacienţii"]}],    
[["ATTRAGREEROMANIAN-matchheadpl",18],DS, {s:"Doctorii de lângă pacienţi uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Pacienţii"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",18],DS, {s:"Doctorii de lângă pacient uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Pacientul"]}],   
[["ATTRAGREEROMANIAN-matchheadsg",19],DS, {s:"Preotul de lângă călugăr mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preotul","Călugărul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",19],DS, {s:"Preotul de lângă călugări mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preotul","Călugării"]}],
[["ATTRAGREEROMANIAN-matchheadpl",19],DS, {s:"Preoţii de lângă călugări mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Călugării"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",19],DS, {s:"Preoţii de lângă călugăr mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Călugărul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",20],DS, {s:"Profesorul de lângă student uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorul","Studentul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",20],DS, {s:"Profesorul de lângă studenţi uneori au numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorul","Studenţii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",20],DS, {s:"Profesorii de lângă studenţi uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Studenţii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",20],DS, {s:" Profesorii de lângă student uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Studentul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",21],DS, {s:"Cârnatul de lângă hangiu mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă ?", as: ["Cârnatul","Hangiul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",21],DS, {s:"Cârnatul de lângă hangii mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnatul","Hangiii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",21],DS, {s:"Cârnaţii de lângă hangii mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnaţii","Hangiii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",21],DS, {s:"Cârnaţii de lângă hangiu mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnaţii","Hangiul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",22],DS, {s:"Buşteanul de lângă erou mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buşteanul","Eroul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",22],DS, {s:"Buşteanul de lângă eroi mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buşteanul","Eroii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",22],DS, {s:"Buştenii de lângă eroi mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii","Eroii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",22],DS, {s:"Buştenii de lângă erou mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii","Eroul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",23],DS, {s:"Nasturele de lângă croitor adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturele","Croitorul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",23],DS, {s:"Nasturele de lângă croitori adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturele","Croitorii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",23],DS, {s:"Nasturii de lângă croitori adesea  au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Croitorii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",23],DS, {s:"Nasturii de lângă croitor adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Croitorul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",24],DS, {s:"Sacul de lângă contabil adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacul","Contabilul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",24],DS, {s:"Sacul de lângă contabili adesea au multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacul","Contabilii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",24],DS, {s:"Sacii de lângă contabili adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Contabilii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",24],DS, {s:"Sacii de lângă contabil adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Contabilul"]}],

/// 12 good fillers, containing FG dependency but lacking ambiguous RRC 
["filler-good-29", DS, {s:"Jill was certain which gift the buyer returned unopened."},"QuestionAlt", {q: "What did the buyer return?", as: ["A gift","A shirt"]}],
["filler-good-30", DS, {s:"Nobody asked which people Frank thought that the thieves scared nearly to death."},"QuestionAlt", {q: "Who did the thieves scare?", as: ["Some people","Frank"]}],
["filler-good-31", DS, {s:"Bill discovered which inspector the owner threatened at knife point."},"QuestionAlt", {q: "Who threatened the inspector?", as: ["The owner","Bill"]}],
["filler-good-32", DS, {s:"Alyssa wondered which volleyball player Patrick mentioned the coach asked out."},"QuestionAlt", {q: "Who did the coach ask out?", as: ["A volleyball player","Alyssa"]}],
["filler-good-33", DS, {s:"Martin found out which employee the technology expert helped with websites."}],
["filler-good-34", DS, {s:"Terrence inquired which student Jocelyn claimed that the manager hired without a single reference. "}],
["filler-good-35", DS, {s:"Ms. Kimball heard which sales rep the boss emailed at 1 am."}],
["filler-good-36", DS, {s:"Julia asked which player Coach Jim favored last season."}],
["filler-good-37", DS, {s:"Martina noticed which bookshelf Lawrence mentioned Jayden nailed to the wall."}],
["filler-good-38", DS, {s:"Nobody ever inquired which key President Nimrod needed to get in the building."}],
["filler-good-39", DS, {s:"Susan always found out which client Dr. Helpert allowed to use the private restroom."}],
["filler-good-40", DS, {s:"Luigi noted which lights the neighbors insisted Patty left on during the vacation."}],

/// 6 good catch fillers
["filler-good-catch-940", DS, {s:"It was an unseasonably warm January day when Grant arrived."},"QuestionAlt", {q: "When did Grant arrive?", as: ["January","February"]}],
["filler-good-catch-941", DS, {s:"Pauline celebrated her new job with chocolate donuts."},"QuestionAlt", {q: "What did Pauline celebrate with?", as: ["Donuts","Champagne"]}],
["filler-good-catch-942", DS, {s:"The twins behaved themselves at the movie."}],
["filler-good-catch-958", DS, {s:"Vance heard his son yell from downstairs."}],
["filler-good-catch-959", DS, {s:"Wilma hid in the closet during the storm."}],
["filler-good-catch-960", DS, {s:"Zane felt peaceful as he watched the waves."}],

/// More fillers: Catch trials with ungrammatical missing argument on add'l verb. Verbs from Staub et al (2005)
["filler-bad-catch-943", DS, {s:"The smooth detective finally arrived at the office last night and tried to persuade everyone that the heiress was the most likely suspect."},"QuestionAlt", {q: "Who was supposed to be the most likely suspect?", as: ["The heiress","The detective"]}],
["filler-bad-catch-944", DS, {s:"Jane couldn't stop herself from smiling, although she really wasn't quite sure why."},"QuestionAlt", {q: "What was Jane doing?", as: ["Smiling","Stopping"]}],
["filler-bad-catch-945", DS, {s:"Kevin and Lena brought pie to the potluck, but to their great dismay nobody even tried a single piece."}],
["filler-bad-catch-946", DS, {s:"That little kid greedily grabbed the candy from the top shelf, and then ran down the aisle laughing super loudly."}],
["filler-bad-catch-947", DS, {s:"At the evening reception, Norbert arrived smiling, although he was very nervous for the big speech he was going to give."}],
["filler-bad-catch-948", DS, {s:"The bouncer was grumbling, because it had already been a hard night and it wasn't even 11PM."}],

/// 18 misc. fillers
["filler-bad-949", DS, {s:"The pompous chairman embarrassed himself during the interview when he mentioned his mom, although I thought it was sweet."},"QuestionAlt", {q: "Who was embarrassed?", as: ["The chairman","His mom"]}],
["filler-bad-950", DS, {s:"Before testing the vintage lamp, Hector was talking about his memories of that weird velvet couch we all hated."},"QuestionAlt", {q: "What was Hector talking about?", as: ["A couch","A lamp"]}],
["filler-bad-951", DS, {s:"The three friends finally performed a play together, although nobody could actually remember their lines."},"QuestionAlt", {q: "What did the friends perform?", as: ["A play","A comedy routine"]}],
["filler-bad-952", DS, {s:"When the student left, the teachers organized a nice farewell party, but it was not very well attended."},"QuestionAlt", {q: "Who organized the party?", as: ["The teachers","The student"]}],
["filler-bad-953", DS, {s:"The troopers said that the blocked highway would re-open, but that first the protesters needed to disperse."},"QuestionAlt", {q: "What was blocked?", as: ["The highway","The school"]}],
["filler-bad-954", DS, {s:"In the center of campus, the trees surrounded the pond, and the fields around that were filled with really beautiful flowers."},"QuestionAlt", {q: "What was in the fields?", as: ["Flowers","Trees"]}],
["filler-bad-955", DS, {s:"The controversial candidates wouldn't support each other despite clear campaign promises."}],
["filler-bad-956", DS, {s:"Jeremiah snapped his fingers together, and called the dog in for dinner."}],
["filler-bad-957", DS, {s:"Susan was disappointed, because she couldn't gather enough signatures for her petition."}],
["filler-bad-961", DS, {s:"Everyone at the conference became annoyed at Arturo, who was constantly and loudly making offensive jokes."}],
["filler-bad-962", DS, {s:"After nearly a week, Brianna was very happy with her art project, but she was reluctant to show it to anyone."}],
["filler-bad-963", DS, {s:"Carla was the kind of plumber who made sure her tools were working well, although she could be forgetful."}],
["filler-bad-964", DS, {s:"The nurses were just about to clean up, but the surgeon walked in and said they were needed again immediately."}],
["filler-bad-965", DS, {s:"Although the scandals eventually subsided, it was clear that the trust of the citizens would never be regained."}],
["filler-bad-966", DS, {s:"Dario knew the cars would break down, but for some strange reason he decided to go on a Death Valley road trip anyway."}],
["filler-bad-967", DS, {s:"Ernestine and Francis started giggling strangely, so everyone knew that something strange was about to happen."}],
["filler-bad-968", DS, {s:"Daniela typed text messages on her cellphone, and it really was clear she wasn't paying any attention to us."}],
["filler-bad-969", DS, {s:"The bored patient waited in the waiting room for hours, but in the end the doctor went home without even seeing her."}]
];

