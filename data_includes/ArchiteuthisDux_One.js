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

[["filler-twonounspluralcorrectchoice",25],DS, {s:"Fata pe care domnii o iubesc este frumoasă."}, "QuestionAlt", {q: "Cine iubeşte?", as: ["Fata","Domnii"]}],
[["filler-twonounspluralcorrectchoice",26],DS, {s:"Cartea pe care fetele o citesc este interesantă. "},"QuestionAlt", {q: "Cine citeşte?", as: ["Cartea","Fetele"]}],
[["filler-twonounspluralcorrectchoice",27],DS, {s:"Pinguinul pe care copiii îl privesc este Apolodor."},"QuestionAlt", {q: "Cine priveşte?", as: ["Pinguinul","Copiii"]}],
[["filler-twonounspluralcorrectchoice",28],DS, {s:"Pisica pe care băieţii o lovesc este birmaneză. "},"QuestionAlt", {q: "Cine loveşte?", as: ["Pisica","Băieţii"]}],
[["filler-twonounspluralcorrectchoice",29],DS, {s:"Veveriţa pe care bărbaţii o prind este maro. "},"QuestionAlt", {q: "Cine prinde?", as: ["Veveriţa","Bărbaţii"]}],
[["filler-twonounspluralcorrectchoice",30],DS, {s:"Lumina pe care oamenii o văd este verde. "},"QuestionAlt", {q: "Cine vede?", as: ["Lumina","Oamenii"]}],
[["filler-twonounspluralcorrectchoice",31],DS, {s:"Casa pe care contabilii o construiesc este imensă. "},"QuestionAlt", {q: "Cine construieşte?", as: ["Casa","Contabilii"]}],
[["filler-twonounspluralcorrectchoice",32],DS, {s:"Mingea pe care sportivii o aleg este mare. "},"QuestionAlt", {q: "Cine construieşte?", as: ["Casa","Contabilii"]}],
[["filler-twonounspluralcorrectchoice",33],DS, {s:"Vinul pe care bucătarii îl beau este roşu."},"QuestionAlt", {q: "Cine bea (ceva)?", as: ["Vinul","Bucătarii"]}],
[["filler-twonounspluralcorrectchoice",34],DS, {s:"Câinele pe care doctorii îl hrănesc este bolnav."},"QuestionAlt", {q: "Cine hrăneşte?", as: ["....","Bucătarii"]}],
[["filler-twonounspluralcorrectchoice",35], DS, {s:"Poemul pe care tinerii îl spun este emoţionant."}, "QuestionAlt", {q: "Cine spune ceva?", as: ["Poemul","Tinerii"]}],
[["filler-twonounspluralcorrectchoice",36],DS, {s:"Omul pe care animalele îl îndrăgesc este blând. "},"QuestionAlt", {q: "Cine îndrăgeşte (pe cineva)?", as: ["Omul","Animalele"]}]

,
    [["filler-twonounssingularcorrectchoice",37],DS, {s:"Vinurile pe care domnul le iubeşte sunt seci."},"QuestionAlt", {q: "Cine iubeşte?", as: ["Vinurile","Domnul"]}],
[["filler-twonounssingularcorrectchoice",38],DS, {s:"Scrisorile pe care fata le citeşte sunt lungi."},"QuestionAlt", {q: "Cine citeşte?", as: ["Scrisorile","Fata"]}],
[["filler-twonounssingularcorrectchoice",39],DS, {s:"Girafele pe care copilul le priveşte sunt înalte."},"QuestionAlt", {q: "Cine priveşte?", as: ["Girafele","Copilul"]}],
[["filler-twonounssingularcorrectchoice",40],DS, {s:"Motanii pe care bunicul îi adăposteşte sunt tigraţi."},"QuestionAlt", {q: "Cine adăposteşte?", as: ["Motanii","Bunicul"]}],
[["filler-twonounssingularcorrectchoice",41],DS, {s:"Şerpii pe care bărbatul îi striveşte sunt veninoşi."},"QuestionAlt", {q: "Cine striveşte?", as: ["Şerpii","Bărbatul"]}],
[["filler-twonounssingularcorrectchoice",42],DS, {s:"Stelele pe care înţeleptul le urmăreşte sunt strălucitoare."}, "QuestionAlt", {q: "Cine urmăreşte?", as: ["Stelele","Inteleptul"]}],
[["filler-twonounssingularcorrectchoice",43],DS, {s:"Barurile pe care pictorul le construieşte sunt artistice."},"QuestionAlt", {q: "Cine construieşte?", as: ["Barurile","Pictorul"]}],
[["filler-twonounssingularcorrectchoice",44],DS, {s:"Păsările pe care colecţionarul le vede sunt impresionante."},"QuestionAlt", {q: "Cine urmăreşte?", as: ["Stelele","Inteleptul"]}],
[["filler-twonounssingularcorrectchoice",45],DS, {s:"Sucurile pe care chelnerul le bea sunt dulci."},"QuestionAlt", {q: "Cine bea?", as: ["Sucurile","Chelnerul"]}],
[["filler-twonounssingularcorrectchoice",46],DS, {s:"Pisicile pe care doamna le îngrijeşte sunt slabe."},"QuestionAlt", {q: "Cine îngrijeşte?", as: ["Pisicile","Doamna"]}],
[["filler-twonounssingularcorrectchoice",47],DS, {s:"Cuvintele pe care preotul le rosteşte sunt înţelepte."},"QuestionAlt", {q: "Cine rosteşte?", as: ["Cuvintele","Preotul"]}],
[["filler-twonounssingularcorrectchoice",48],DS, {s:"Câinii pe care pisica îi urăşte sunt răi."},"QuestionAlt", {q: "Cine urăşte?", as: ["Câinii","Pisica"]}]
,
    [["filler-coordination",49],DS, {s:"Femeia şi copilul beau mult suc."}, "QuestionAlt", {q: "Cât suc beau femeia şi copilul?", as: ["Mult","Puţin"]}],
[["filler-coordination",50],DS, {s:"Doctorul şi bolnavul plâng mult din cauza bolii."},"QuestionAlt", {q: "De ce plâng doctorul şi bolnavul?", as: ["Din cauza bolii","De tristeţe"]}],
[["filler-coordination",51],DS, {s:"Vulpoiul şi vulpea sar în aer foarte rapid."},"QuestionAlt", {q: "Cum sar în aer vulpoiul şi vulpea?", as: ["Foarte rapid","Foarte lent"]}],
[["filler-coordination",52],DS, {s:"Găina şi puiul ciugulesc firimituri adesea."},"QuestionAlt", {q: "Ce ciugulesc găina şi puiul?", as: ["Firimituri","Boabe"]}],
[["filler-coordination",53],DS, {s:"Paharul şi sticla cad de pe birou uneori."}, "QuestionAlt", {q: "Ce ciugulesc găina şi puiul?", as: ["Firimituri","Boabe"]}],
 [["filler-coordination",54],DS, {s:"Oboseala şi plictisul ucid iubirea adesea."},"QuestionAlt", {q: "Ce ucid oboseala şi plictisul?", as: ["Iubirea","Prietenia"]}],
[["filler-coordination",55],DS, {s:"Iubirea şi prietenia susţin moralul întotdeauna."},"QuestionAlt", {q: "Ce susţin iubirea şi prietenia?", as: ["Moralul","Căsătoria"]}],
[["filler-coordination",56],DS, {s:"Căţelul şi pisica dorm după cină adesea."},"QuestionAlt", {q: "Când dorm căţelul şi pisica adesea?", as: ["După cină","Boabe"]}],
 [["filler-coordination",57],DS, {s:"Cafeaua şi ceaiul au efecte laxative."},"QuestionAlt", {q: "Ce fel de efecte au cafeaua şi ceaiul?", as: ["Laxative","Terapeutice"]}],
[["filler-coordination",58],DS, {s:"Trandafirul şi zambila miros foarte frumos."},"QuestionAlt", {q: "Cum miros trandafirul şi zambila?", as: ["Foarte frumos","Suportabil"]}],
[["filler-coordination",59],DS, {s:"Cartea şi caietul sunt pe masă mereu."},"QuestionAlt", {q: "Unde sunt cartea şi caietul?", as: ["Pe masă","Pe pat"]}],
[["filler-coordination",60],DS, {s:"Papagalul şi băiatul vorbesc foarte mult unul cu altul."},"QuestionAlt", {q: "Cu cine vorbesc papagalul şi băiatul?", as: ["Unul cu altul","Cu prietenii lor"]}]
,
[["filler-semanticchoice",61],DS, {s:"Lampa de lângă cartea verde se aprinde uşor."},"QuestionAlt", {q: "Ce se aprinde uşor?", as: ["Lampa","Cartea verde"]}],
 [["filler-semanticchoice",62],DS, {s:"Fetiţa de lângă camera albastră dansează."},"QuestionAlt", {q: "Cine/ce dansează?", as: ["Fetiţa","Camera albastră"]}],
[["filler-semanticchoice",63],DS, {s:"Iepuraşul de lângă scaunul roşu doarme."},"QuestionAlt", {q: "Cine/ce doarme?", as: ["Iepuraşul","Scaunul roşu"]}],
[["filler-semanticchoice",64],DS, {s:"Pasărea de lângă masa neagră cântă bine."},"QuestionAlt", {q: "Cine/ce cântă bine?", as: ["Pasărea","Masa neagră"]}],
[["filler-semanticchoice",65,DS, {s:"Măgarul de lângă căţelul maro rage adesea. "},"QuestionAlt", {q: "Cine rage adesea?", as: ["Măgarul","Căţelul maro"]}],
[["filler-semanticchoice",66],DS, {s:"Papucii de lângă copiii bolnavi alunecă uşor."},"QuestionAlt", {q: "Cine/ce alunecă uşor?", as: ["Papucii","Copiii bolnavi"]}],
[["filler-semanticchoice",67],DS, {s:"Hainele de lângă femeile zâmbăreţe cad mereu."},"QuestionAlt", {q: "Cine/ce cad mereu?", as: ["Hainele","Femeile zâmbăreţe"]}],
 [["filler-semanticchoice",68],DS, {s:"Albinele de lângă portocalele stricate bȃzȃie prea tare."},"QuestionAlt", {q: "Cine/ce bȃzȃie prea tare?", as: ["Albinele","Portocalele stricate"]}],
[["filler-semanticchoice",69],DS, {s:"Râul de lângă pădurea frumoasă curge adesea vara."},"QuestionAlt", {q: "Cine/ce bȃzȃie prea tare?", as: ["Albinele","Portocalele stricate"]}],
[["filler-semanticchoice",70],DS, {s:"Urşii de lângă prinţesele minunate se căsătoresc."},"QuestionAlt", {q: "Cine se căsătoresc?", as: ["Urşii","Prinţesele minunate"]}],
 [["filler-semanticchoice",71],DS, {s:"Florile de lângă sticlele albastre se ofilesc mereu."},"QuestionAlt", {q: "Ce se ofilesc mereu?", as: ["Florile","Sticlele albastre"]}],
[["filler-semanticchoice",72],DS, {s:"Calculatoarele de lângă copiii năzdrăvani se strică uneori."}, "QuestionAlt", {q: "Cine/ce se strică uneori?", as: ["Calculatoarele","Copiii năzdrăvani"]}]
];

