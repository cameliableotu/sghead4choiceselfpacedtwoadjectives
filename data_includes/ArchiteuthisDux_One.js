var counterOverride = 0;

// Do show progress bar (fine!!)
var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'shared-intro',
    sepWith("timeoutSep", rshuffle(startsWith('ATTRACTAGREEMENT'),startsWith('filler'))),
    'intro',
    'debrief');

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedSentence';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Please wait. Your data are being sent to the server."; 
var completionMessage = "Thank you for your participation. Your completion code is 63SFTQ4G. To complete this experiment, go to: https://app.prolific.ac/submissions/complete?cc=63SFTQ4G."; 
var completionErrorMessage = "There was an error in sending your data to the server. You may still complete this experiment. Your completion code is 63SFTQ4G. Please go to: https://app.prolific.ac/submissions/complete?cc=63SFTQ4G."; 

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
                {html: "<p>Please take a short break. Press a button to continue when you're ready.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 4000, normalMessage: "Hands in place! Your first sentence of this block will start soon."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [


["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],


['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Wrong answer. Please read slowly and carefully."}, DS, {s: "This sentence is to get you used to the reading style."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Wrong answer. Please read slowly and carefully."}, DS, {s: "This is another sentence, which is a bit more complicated than the one that came before it."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "How was that? It is important that you move through the sentence carefully and deliberately, making sure that you understand each word as you go."],
                           ["p", "Let's try some more."]
                         ]}],

['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Wrong answer. Please read slowly and carefully."}, DS, {s: "At the ball, the prince waltzed and slowly smiled at the princess."},"QuestionAlt", {q: "Who smiled?", as: ['The prince','The princess']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Wrong answer. Please read slowly and carefully."}, DS, {s: "Without warning, Geoffrey turned and screamed at the waiter who had embarrassed him."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Wrong answer. Please read slowly and carefully."}, DS, {s: "The trainee talking to the barista lazily made a latte and didn't even try to make a design on top."},"QuestionAlt", {q: "Who made a latte?", as: ['The trainee','The barista']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Wrong answer. Please read slowly and carefully."}, DS, {s: "Madame de Plessy sat up all night worrying about her son who was on the front lines."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Alright, that's it for practice! If you got any wrong, that's OK. Just be sure to read naturally but carefully, making sure you understand each word as you go. Press any key when you're ready to begin."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Hands in place! Your first sentence of this block will start soon."}],

["timeoutSep", Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Wrong answer. Please read slowly and carefully."}],

//// Shared experimental items + fillers

[["ATTRAGREEROMANIAN-matchverbheadsg",1],DS, {s:" Cartea de lângă femei mereu are farmec."}], 
 [["ATTRAGREEROMANIAN-mismatchverbheadsg",1],DS, {s:" Cartea de lângă femei mereu au farmec."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",1],DS, {s:"Cărţile de lângă femei mereu au farmec."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadpl",1],DS, {s:" Cărţile de lângă femei mereu are farmec."}], 
[["ATTRAGREEROMANIAN-matchverbheadsg",2],DS, {s:"Vioara de lângă cântăreţe mereu are arcuş."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadsg",2],DS, {s:"Vioara de lângă cântăreţe mereu au arcuş."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",2],DS, {s:"Viorile de lângă cântăreţe mereu au arcuş."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadpl",2],DS, {s:" Viorile de lângă  cântăreţe mereu are arcuş."}], 
[["ATTRAGREEROMANIAN-matchverbheadsg",3],DS, {s:"Rochia de lângă croitorese uneori are dantelă. "}], 
[["ATTRAGREEROMANIAN-mismatchverbheadsg",3],DS, {s:"Rochia de lângă croitorese uneori au dantelă."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",3],DS, {s:"Rochiile de lângă croitorese uneori au dantelă."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadpl",3],DS, {s:" Rochiile de lângă  croitorese uneori au dantelă."}], 
[["ATTRAGREEROMANIAN-matchverbheadsg",4],DS, {s:"Dulceaţa de lângă gospodine uneori are zahăr."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadsg",4],DS, {s:"Dulceaţa de lângă gospodine uneori are zahăr."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",4],DS, {s:"Dulceţurile de lângă gospodine uneori au zahăr."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",4],DS, {s:"Dulceţurile de lângă  gospodine uneori are zahăr."}],


[["ATTRAGREEROMANIAN-matchverbheadsg",5],DS, {s:"Pisica de lângă fete adesea are stil."}], 
[["ATTRAGREEROMANIAN-mismatchverbheadsg",5],DS, {s:"Pisica de lângă fete adesea au stil."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",5],DS, {s:"Pisicile de lângă fete adesea au stil."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",5],DS, {s:"Pisicile de lângă fete adesea are stil."}],
[["ATTRAGREEROMANIAN-matchverbheadsg",6],DS, {s:"Învăţătoarea de lângă eleve adesea are succes."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",6],DS, {s:"Învăţătoarea de lângă eleve adesea au succes."}],
[["ATTRAGREEROMANIAN-matchverbheadpl",6],DS, {s:"Învăţătoarele de lângă eleve adesea au succes."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",6],DS, {s:"Învăţătoarele de lângă eleve adesea are succes."}], 
[["ATTRAGREEROMANIAN-matchverbheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu are bani."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu au bani."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",7],DS, {s:"Vânzătoarele de lângă contabile mereu au bani."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",7],DS, {s:" Vânzătoarele de lângă contabile mereu  are bani."}],
[["ATTRAGREEROMANIAN-matchverbheadsg",8],DS, {s:"Oaia de lângă ţărănci adesea  are lapte."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",8],DS, {s:"Oaia de lângă ţărănci adesea au lapte."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",8],DS, {s:"Oile de lângă ţărănci adesea au lapte."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",8],DS, {s:"Oile de lângă ţărănci adesea are lapte."}],


[["ATTRAGREEROMANIAN-matchverbheadsg",9],DS, {s:"Cuţitul de lângă organisme uneori are viruşi."}],  
[["ATTRAGREEROMANIAN-mismatchverbheadsg",9],DS, {s:"Cuţitul de lângă organisme uneori au viruşi."}],  
[["ATTRAGREEROMANIAN-matchverbheadpl",9],DS, {s:" Cuţitele de lângă organisme uneori au viruşi."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",9],DS, {s:" Cuţitele de lângă organisme uneori au viruşi."}],  
[["ATTRAGREEROMANIAN-matchverbheadsg",10],DS, {s:"Tabloul de lângă animale uneori are vizitatori."}],  
[["ATTRAGREEROMANIAN-mismatchverbheadsg",10],DS, {s:"Tabloul de lângă animale uneori au vizitatori."}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",10],DS, {s:"Tablourile de lângă animale uneori au vizitatori."}],  
[["ATTRAGREEROMANIAN-mismatchverbheadpl",10],DS, {s:"Tablourile de lângă animale uneori are vizitatori."}],  
[["ATTRAGREEROMANIAN-matchverbheadsg",11],DS, {s:"Nisipul de lângă crustacee adesea are calciu."}],  
[["ATTRAGREEROMANIAN-mismatchverbheadsg",11],DS, {s:"Nisipul de lângă crustacee adesea au calciu."}],  
[["ATTRAGREEROMANIAN-matchverbheadpl",11],DS, {s:"Nisipurile de lângă crustacee adesea au calciu."}],  
[["ATTRAGREEROMANIAN-mismatchverbheadpl",11],DS, {s:"Nisipurile de lângă crustacee adesea are calciu."}],  
[["ATTRAGREEROMANIAN-matchverbheadsg",12],DS, {s:"Piureul de lângă macrouri mereu are piper."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",12],DS, {s:"Piureul de lângă macrouri mereu au piper."}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",12],DS, {s:"Piureurile de lângă macrouri mereu au piper."}],    
[["ATTRAGREEROMANIAN-mismatchverbheadpl",12],DS, {s:"Piureurile de lângă macrouri mereu are piper."}],   


[["ATTRAGREEROMANIAN-matchverbheadsg",13],DS, {s:"Sufletul de lângă trupuri mereu are aripi."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",13],DS, {s:"Sufletul de lângă trupuri mereu au aripi."}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",13],DS, {s:"Sufletele de lângă trupuri mereu au aripi."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",13],DS, {s:"Sufletele de lângă trupuri mereu are aripi."}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",14],DS, {s:"Mamiferul de lângă nevertebrate uneori are banane."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",14],DS, {s:"Mamiferul de lângă nevertebrate uneori au banane."}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori au banane."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori are banane."}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",15],DS, {s:"Macroul de lângă vertebrate adesea are vitalitate."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",15],DS, {s:"Macroul de lângă vertebrate adesea au vitalitate."}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",15],DS, {s:"Macrourile de lângă vertebrate adesea au vitalitate."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",15],DS, {s:"Macrourile de lângă vertebrate adesea are vitalitate."}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",16],DS, {s:"Animalul de lângă mamifere uneori are vigoare."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",16],DS, {s:"Animalul de lângă mamifere uneori au vigoare."}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",16],DS, {s:"Animalele de lângă mamifere uneori au vigoare."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",16],DS, {s:"Animalele de lângă mamifere uneori are vigoare."}],   


[["ATTRAGREEROMANIAN-matchverbheadsg",17],DS, {s:"Câinele de lângă copii adesea are energie."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",17],DS, {s:"Câinele de lângă copii adesea au energie."}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",17],DS, {s:"Câinii de lângă copii adesea au energie."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",17],DS, {s:" Câinii de lângă copii adesea are energie."}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",18],DS, {s:"Doctorul de lângă pacienţi uneori are răbdare."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadsg",18],DS, {s:"Doctorul de lângă pacienţi uneori au răbdare."}],   
[["ATTRAGREEROMANIAN-matchverbheadpl",18],DS, {s:"Doctorii de lângă pacienţi uneori au răbdare."}],   
[["ATTRAGREEROMANIAN-mismatchverbheadpl",18],DS, {s:"Doctorii de lângă pacienţi uneori are răbdare."}],   
[["ATTRAGREEROMANIAN-matchverbheadsg",19],DS, {s:"Preotul de lângă călugări mereu are înţelepciune."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",19],DS, {s:"Preotul de lângă călugări mereu au înţelepciune."}],
[["ATTRAGREEROMANIAN-matchverbheadpl",19],DS, {s:"Preoţii de lângă călugări mereu au înţelepciune."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",19],DS, {s:"Preoţii de lângă călugări mereu are înţelepciune."}],
[["ATTRAGREEROMANIAN-matchverbheadsg",20],DS, {s:"Profesorul de lângă studenţi uneori are realizări."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",20],DS, {s:"Profesorul de lângă studenţi uneori au realizări."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",20],DS, {s:"Profesorii de lângă studenţi uneori au realizări."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",20],DS, {s:" Profesorii de lângă studenţi uneori are realizări."}],
[["ATTRAGREEROMANIAN-matchverbheadsg",21],DS, {s:"Cârnatul de lângă hangii mereu are savoare."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",21],DS, {s:"Cârnatul de lângă hangii mereu au savoare."}],
[["ATTRAGREEROMANIAN-matchverbheadpl",21],DS, {s:"Cârnaţii de lângă hangii mereu au savoare."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",21],DS, {s:"Cârnaţii de lângă hangii mereu are savoare."}],
[["ATTRAGREEROMANIAN-matchverbheadsg",22],DS, {s:"Buşteanul de lângă eroi mereu are rezistenţă."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",22],DS, {s:"Buşteanul de lângă eroi mereu au rezistenţă."}],
[["ATTRAGREEROMANIAN-matchverbheadpl",22],DS, {s:"Buştenii de lângă eroi mereu au rezistenţă."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",22],DS, {s:"Buştenii de lângă eroi mereu are rezistenţă."}],
[["ATTRAGREEROMANIAN-matchverbheadsg",23],DS, {s:"Nasturele de lângă croitor adesea are aţă."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",23],DS, {s:"Nasturele de lângă croitori adesea au aţă."}],
[["ATTRAGREEROMANIAN-matchverbheadpl",23],DS, {s:"Nasturii de lângă croitori adesea  au aţă."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",23],DS, {s:"Nasturii de lângă croitoir adesea are aţă."}],
[["ATTRAGREEROMANIAN-matchverbheadsg",24],DS, {s:"Sacul de lângă contabili adesea are greutate."}],
[["ATTRAGREEROMANIAN-mismatchverbheadsg",24],DS, {s:"Sacul de lângă contabili adesea au greutate."}], 
[["ATTRAGREEROMANIAN-matchverbheadpl",24],DS, {s:"Sacii de lângă contabili adesea au greutate."}],
[["ATTRAGREEROMANIAN-mismatchverbheadpl",24],DS, {s:"Sacii de lângă contabili adesea are greutate."}],

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

