// Captain Flapjack - Experiment One
// Dillon + Frazier

//
var counterOverride = 0;

// Do show progress bar (fine!!)
var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'intro',
    'shared-intro',
    sepWith("timeoutSep", rshuffle(startsWith('FLAPJACK'),startsWith('filler'))),
    'debrief');

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Please wait. Your data are being sent to the server."; 
var completionMessage = "Thank you for your participation. Your completion code is VW2LJVTR. To complete this experiment, go to: https://app.prolific.ac/submissions/complete?cc=VW2LJVTR."; 
var completionErrorMessage = "There was an error in sending your data to the server. You may still complete this experiment. Your completion code is VW2LJVTR. Please go to: https://app.prolific.ac/submissions/complete?cc=VW2LJVTR."; 

// Controller settings.
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

["timeoutSep", Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
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
[["FLAPJACK-UNAMBIG-SHORT",1], DS, {s:"I’m not sure which treasure the pirate who was noticed at the beach found."}],
[["FLAPJACK-AMBIG-LONG",1], DS, {s:"I’m not sure which treasure the gnarly old captain said that the pirate noticed at the beach found."}],
[["FLAPJACK-UNAMBIG-LONG",1], DS, {s:"I’m not sure which treasure the gnarly old captain said that the pirate who was noticed at the beach found."}],

[["FLAPJACK-AMBIG-SHORT",2], DS, {s:"Nobody told us which delicate prints the interior designer noticed this month ruined."}],
[["FLAPJACK-UNAMBIG-SHORT",2], DS, {s:"Nobody told us which delicate prints the interior designer who was noticed this month ruined."}],
[["FLAPJACK-AMBIG-LONG",2], DS, {s:"Nobody told us which delicate prints Ian claimed that the interior designer noticed this month ruined."}],
[["FLAPJACK-UNAMBIG-LONG",2], DS, {s:"Nobody told us which delicate prints Ian claimed that the interior designer who was noticed this month ruined."}],

[["FLAPJACK-AMBIG-SHORT",3], DS, {s:"We asked which Toyota the salesman described as efficient sold."}],
[["FLAPJACK-UNAMBIG-SHORT",3], DS, {s:"We asked which Toyota the salesman who was described as efficient sold."}],
[["FLAPJACK-AMBIG-LONG",3], DS, {s:"We asked which Toyota the owner claimed that the salesman described as efficient sold."}],
[["FLAPJACK-UNAMBIG-LONG",3], DS, {s:"We asked which Toyota the owner claimed that the salesman who was described as efficient sold."}],

[["FLAPJACK-AMBIG-SHORT",4], DS, {s:"Nobody asked which electrician the assistant needed this morning hired."}],
[["FLAPJACK-UNAMBIG-SHORT",4], DS, {s:"Nobody asked which electrician the assistant who was needed this morning hired."}],
[["FLAPJACK-AMBIG-LONG",4], DS, {s:"Nobody asked which electrician the receptionist claimed that the assistant needed this morning hired."}],
[["FLAPJACK-UNAMBIG-LONG",4], DS, {s:"Nobody asked which electrician the receptionist claimed that the assistant who was needed this morning hired."}],

[["FLAPJACK-AMBIG-SHORT",5], DS, {s:"Jane isn’t certain which assistant the doctor needed last night picked."}],
[["FLAPJACK-UNAMBIG-SHORT",5], DS, {s:"Jane isn’t certain which assistant the doctor who was needed last night picked."}],
[["FLAPJACK-AMBIG-LONG",5], DS, {s:"Jane isn’t certain which assistant her husband mentioned the doctor needed last night picked."}],
[["FLAPJACK-UNAMBIG-LONG",5], DS, {s:"Jane isn’t certain which assistant her husband mentioned the doctor who was needed last night picked."}],

[["FLAPJACK-AMBIG-SHORT",6], DS, {s:"Nobody noticed which dog the bratty child invited to the party taunted."}],
[["FLAPJACK-UNAMBIG-SHORT",6], DS, {s:"Nobody noticed which dog the bratty child who was invited to the party taunted."}],
[["FLAPJACK-AMBIG-LONG",6], DS, {s:"Nobody noticed which dog the gardener swore that the bratty child invited to the party taunted."}],
[["FLAPJACK-UNAMBIG-LONG",6], DS, {s:"Nobody noticed which dog the gardener swore that the bratty child who was invited to the party taunted."}],

[["FLAPJACK-AMBIG-SHORT",7], DS, {s:"Kate had no idea which banker the partners invited to the discussions contacted."}],
[["FLAPJACK-UNAMBIG-SHORT",7], DS, {s:"Kate had no idea which banker the partners who were invited to the discussions contacted."}],
[["FLAPJACK-AMBIG-LONG",7], DS, {s:"Kate had no idea which banker Lucinda claimed that the partners invited to the discussions contacted."}],
[["FLAPJACK-UNAMBIG-LONG",7], DS, {s:"Kate had no idea which banker Lucinda claimed that the partners who were invited to the discussions contacted."}],

[["FLAPJACK-AMBIG-SHORT",8], DS, {s:"Antonio refused to say which camel the tour guide assigned to the tourists rode. "}],
[["FLAPJACK-UNAMBIG-SHORT",8], DS, {s:"Antonio refused to say which camel the tour guide who was assigned to the tourists rode."}],
[["FLAPJACK-AMBIG-LONG",8], DS, {s:"Antonio refused to say which camel the assistants said that the tour guide assigned to the tourists rode. "}],
[["FLAPJACK-UNAMBIG-LONG",8], DS, {s:"Antonio refused to say which camel the assistants said that the tour guide who was assigned to the tourists rode."}],

[["FLAPJACK-AMBIG-SHORT",9], DS, {s:"I’m not sure which ATM the incompetent representative assigned to my case cursed."}],
[["FLAPJACK-UNAMBIG-SHORT",9], DS, {s:"I’m not sure which ATM the incompetent representative who was assigned to my case cursed."}],
[["FLAPJACK-AMBIG-LONG",9], DS, {s:"I’m not sure which ATM Ferdinand said that the incompetent representative assigned to my case cursed."}],
[["FLAPJACK-UNAMBIG-LONG",9], DS, {s:"I’m not sure which ATM Ferdinand said that the incompetent representative who was assigned to my case cursed."}],

[["FLAPJACK-AMBIG-SHORT",10], DS, {s:"I’m not sure which customers the trainee expected to succeed impressed."}],
[["FLAPJACK-UNAMBIG-SHORT",10], DS, {s:"I’m not sure which customers the trainee who was expected to succeed impressed."}],
[["FLAPJACK-AMBIG-LONG",10], DS, {s:"I’m not sure which customers Annabelle indicated that the trainee expected to succeed impressed."}],
[["FLAPJACK-UNAMBIG-LONG",10], DS, {s:"I’m not sure which customers Annabelle indicated that the trainee who was expected to succeed impressed."}],

[["FLAPJACK-AMBIG-SHORT",11], DS, {s:"Sam knew which table the carpenter praised so highly designed."}],
[["FLAPJACK-UNAMBIG-SHORT",11], DS, {s:"Sam knew which table the carpenter who was praised so highly designed."}],
[["FLAPJACK-AMBIG-LONG",11], DS, {s:"Sam knew which table the potter mentioned that the carpenter praised so highly designed."}],
[["FLAPJACK-UNAMBIG-LONG",11], DS, {s:"Sam knew which table the potter mentioned that the carpenter who was praised so highly designed."}],

[["FLAPJACK-AMBIG-SHORT",12], DS, {s:"Patrick wondered which intern the technician hired on Monday hated."}],
[["FLAPJACK-UNAMBIG-SHORT",12], DS, {s:"Patrick wondered which intern the technician who was hired on Monday hated."}],
[["FLAPJACK-AMBIG-LONG",12], DS, {s:"Patrick wondered which intern the assembly line reported that the technician hired on Monday hated."}],
[["FLAPJACK-UNAMBIG-LONG",12], DS, {s:"Patrick wondered which intern the assembly line reported that the technician who was hired on Monday hated."}],

[["FLAPJACK-AMBIG-SHORT",13], DS, {s:"Jesse asked which horse the trainer required for certification trained."}],
[["FLAPJACK-UNAMBIG-SHORT",13], DS, {s:"Jesse asked which horse the trainer who was required for certification trained."}],
[["FLAPJACK-AMBIG-LONG",13], DS, {s:"Jesse asked which horse the rancher assumed that the trainer required for certification trained."}],
[["FLAPJACK-UNAMBIG-LONG",13], DS, {s:"Jesse asked which horse the rancher assumed that the trainer who was required for certification trained."}],

[["FLAPJACK-AMBIG-SHORT",14], DS, {s:"Henry inquired which waitress the busboy required in the kitchen dated."}],
[["FLAPJACK-UNAMBIG-SHORT",14], DS, {s:"Henry inquired which waitress the busboy who was required in the kitchen dated."}],
[["FLAPJACK-AMBIG-LONG",14], DS, {s:"Henry inquired which waitress Anthony claimed that the busboy required in the kitchen dated."}],
[["FLAPJACK-UNAMBIG-LONG",14], DS, {s:"Henry inquired which waitress Anthony claimed that the busboy who was required in the kitchen dated."}],

[["FLAPJACK-AMBIG-SHORT",15], DS, {s:"Lou noted which medic the lieutenant recalled for duty beckoned."}],
[["FLAPJACK-UNAMBIG-SHORT",15], DS, {s:"Lou noted which medic the lieutenant who was recalled for duty beckoned."}],
[["FLAPJACK-AMBIG-LONG",15], DS, {s:"Lou noted which medic Jeremy told us that the lieutenant recalled for duty beckoned."}],
[["FLAPJACK-UNAMBIG-LONG",15], DS, {s:"Lou noted which medic Jeremy told us that the lieutenant who was recalled for duty beckoned."}],

[["FLAPJACK-AMBIG-SHORT",16], DS, {s:"Paula asked which pharmacy the doctors appointed quite recently blamed."}],
[["FLAPJACK-UNAMBIG-SHORT",16], DS, {s:"Paula asked which pharmacy the doctors who were appointed quite recently blamed."}],
[["FLAPJACK-AMBIG-LONG",16], DS, {s:"Paula asked which pharmacy the neighbors said that the doctors appointed quite recently blamed."}],
[["FLAPJACK-UNAMBIG-LONG",16], DS, {s:"Paula asked which pharmacy the neighbors said that the doctors who were appointed quite recently blamed."}],

[["FLAPJACK-AMBIG-SHORT",17], DS, {s:"Melissa discovered which doctor the girl frightened at the hospital hated."}],
[["FLAPJACK-UNAMBIG-SHORT",17], DS, {s:"Melissa discovered which doctor the girl who was frightened at the hospital hated."}],
[["FLAPJACK-AMBIG-LONG",17], DS, {s:"Melissa discovered which doctor Lee insisted that the girl frightened at the hospital hated."}],
[["FLAPJACK-UNAMBIG-LONG",17], DS, {s:"Melissa discovered which doctor Lee insisted that the girl who was frightened at the hospital hated."}],

[["FLAPJACK-AMBIG-SHORT",18], DS, {s:"The nurse told us which patients the intern declared to be uncooperative sued."}],
[["FLAPJACK-UNAMBIG-SHORT",18], DS, {s:"The nurse told us which patients the intern who was declared to be uncooperative sued."}],
[["FLAPJACK-AMBIG-LONG",18], DS, {s:"The nurse told us which patients Fernanda thought the intern declared to be uncooperative sued."}],
[["FLAPJACK-UNAMBIG-LONG",18], DS, {s:"The nurse told us which patients Fernanda thought the intern who was declared to be uncooperative sued."}],

[["FLAPJACK-AMBIG-SHORT",19], DS, {s:"Lisa discovered which hybrid car the engineer included in the contest praised."}],
[["FLAPJACK-UNAMBIG-SHORT",19], DS, {s:"Lisa discovered which hybrid car the engineer who was included in the contest praised."}],
[["FLAPJACK-AMBIG-LONG",19], DS, {s:"Lisa discovered which hybrid car the experts said that the engineer included in the contest praised."}],
[["FLAPJACK-UNAMBIG-LONG",19], DS, {s:"Lisa discovered which hybrid car the experts said that the engineer who was included in the contest praised."}],

[["FLAPJACK-AMBIG-SHORT",20], DS, {s:"Mr. Hamilton knew which dancer the young singer discovered in the competition adored."}],
[["FLAPJACK-UNAMBIG-SHORT",20], DS, {s:"Mr. Hamilton knew which dancer the young singer who was discovered in the competition adored."}],
[["FLAPJACK-AMBIG-LONG",20], DS, {s:"Mr. Hamilton knew which dancer Paulina said that the young singer discovered in the competition adored."}],
[["FLAPJACK-UNAMBIG-LONG",20], DS, {s:"Mr. Hamilton knew which dancer Paulina said that the young singer who was discovered in the competition adored."}],

[["FLAPJACK-AMBIG-SHORT",21], DS, {s:"We wondered which driver the bicyclist discussed on Monday accused."}],
[["FLAPJACK-UNAMBIG-SHORT",21], DS, {s:"We wondered which driver the bicyclist who was discussed on Monday accused."}],
[["FLAPJACK-AMBIG-LONG",21], DS, {s:"We wondered which driver the bystanders thought that the bicyclist discussed on Monday accused."}],
[["FLAPJACK-UNAMBIG-LONG",21], DS, {s:"We wondered which driver the bystanders thought that the bicyclist who was discussed on Monday accused."}],

[["FLAPJACK-AMBIG-SHORT",22], DS, {s:"The detective asked which convict the warden assumed to be unreliable described."}],
[["FLAPJACK-UNAMBIG-SHORT",22], DS, {s:"The detective asked which convict the warden who was assumed to be unreliable described."}],
[["FLAPJACK-AMBIG-LONG",22], DS, {s:"The detective asked which convict Susanne said that the warden assumed to be unreliable described."}],
[["FLAPJACK-UNAMBIG-LONG",22], DS, {s:"The detective asked which convict Susanne said that the warden who was assumed to be unreliable described."}],

[["FLAPJACK-AMBIG-SHORT",23], DS, {s:"David asked which driverless vehicle the inspector permitted on the bridge stopped."}],
[["FLAPJACK-UNAMBIG-SHORT",23], DS, {s:"David asked which driverless vehicle the inspector who were permitted on the bridge stopped."}],
[["FLAPJACK-AMBIG-LONG",23], DS, {s:"David asked which driverless vehicle Ramona heard the inspector permitted on the bridge stopped."}],
[["FLAPJACK-UNAMBIG-LONG",23], DS, {s:"David asked which driverless vehicle Ramona heard the inspector who were permitted on the bridge stopped."}],

[["FLAPJACK-AMBIG-SHORT",24], DS, {s:"Joanna was unsure of which bread the baker suggested for the party made."}],
[["FLAPJACK-UNAMBIG-SHORT",24], DS, {s:"Joanna was unsure of which bread the baker who was suggested for the party made."}],
[["FLAPJACK-AMBIG-LONG",24], DS, {s:"Joanna was unsure of which bread the guests claimed that the baker suggested for the party made."}],
[["FLAPJACK-UNAMBIG-LONG",24], DS, {s:"Joanna was unsure of which bread the guests claimed that the baker who was suggested for the party made."}],

[["FLAPJACK-AMBIG-SHORT",25], DS, {s:"Bella wondered which driver the receptionist suggested for the night shift hired."}],
[["FLAPJACK-UNAMBIG-SHORT",25], DS, {s:"Bella wondered which driver the receptionist who was suggested for the night shift hired."}],
[["FLAPJACK-AMBIG-LONG",25], DS, {s:"Bella wondered which driver Priscilla claimed that the receptionist suggested for the night shift hired."}],
[["FLAPJACK-UNAMBIG-LONG",25], DS, {s:"Bella wondered which driver Priscilla claimed that the receptionist who was suggested for the night shift hired."}],

[["FLAPJACK-AMBIG-SHORT",26], DS, {s:"Jason asked which child the babysitter covered with a blanket scared."}],
[["FLAPJACK-UNAMBIG-SHORT",26], DS, {s:"Jason asked which child the babysitter who was covered with a blanket scared."}],
[["FLAPJACK-AMBIG-LONG",26], DS, {s:"Jason asked which child the doorman said the babysitter covered with a blanket scared."}],
[["FLAPJACK-UNAMBIG-LONG",26], DS, {s:"Jason asked which child the doorman said the babysitter who was covered with a blanket scared."}],

[["FLAPJACK-AMBIG-SHORT",27], DS, {s:"Teresa asked which friend the applicant advocated for the job called."}],
[["FLAPJACK-UNAMBIG-SHORT",27], DS, {s:"Teresa asked which friend the applicant who was advocated for the job called."}],
[["FLAPJACK-AMBIG-LONG",27], DS, {s:"Teresa asked which friend Uncle Harry claimed that the applicant advocated for the job called."}],
[["FLAPJACK-UNAMBIG-LONG",27], DS, {s:"Teresa asked which friend Uncle Harry claimed that the applicant who was advocated for the job called."}],

[["FLAPJACK-AMBIG-SHORT",28], DS, {s:"Henrietta found out which volcano the expert recognized at the conference climbed."}],
[["FLAPJACK-UNAMBIG-SHORT",28], DS, {s:"Henrietta found out which volcano the expert who was recognized at the conference climbed."}],
[["FLAPJACK-AMBIG-LONG",28], DS, {s:"Henrietta found out which volcano the newspaper reported that the expert recognized at the conference climbed."}],
[["FLAPJACK-UNAMBIG-LONG",28], DS, {s:"Henrietta found out which volcano the newspaper reported that the expert who was recognized at the conference climbed."}],

/// 12 good fillers, containing FG dependency but lacking ambiguous RRC 
["filler-good-29", DS, {s:"Jill was certain which gift the buyer returned unopened."}],
["filler-good-30", DS, {s:"Nobody asked which doors Frank said that the thieves scared nearly to death."}],
["filler-good-31", DS, {s:"Bill discovered which inspector the owner threatened at knife point."}],
["filler-good-32", DS, {s:"Alyssa wondered which volleyball player Patrick mentioned the coach asked out."}],
["filler-good-33", DS, {s:"Martin found out which employee the technology expert helped with websites."}],
["filler-good-34", DS, {s:"Terrence inquired which student Jocelyn claimed that the manager hired without a single reference. "}],
["filler-good-35", DS, {s:"Ms. Kimball heard which sales rep the boss emailed at 1 am."}],
["filler-good-36", DS, {s:"Julia asked which player Coach Jim favored last season."}],
["filler-good-37", DS, {s:"Martina noticed which bookshelf Lawrence mentioned Jayden nailed to the wall."}],
["filler-good-38", DS, {s:"Nobody ever inquired which key President Nimrod needed to get in the building."}],
["filler-good-39", DS, {s:"Susan always found out which client Dr. Helpert allowed to use the private restroom."}],
["filler-good-40", DS, {s:"Luigi noted which lights the neighbors insisted Patty left on during the vacation."}],

/// 6 good catch fillers
["filler-good-catch-940", DS, {s:"It was an unseasonably warm January day when Grant arrived."}],
["filler-good-catch-941", DS, {s:"Pauline celebrated her new job with chocolate donuts."}],
["filler-good-catch-942", DS, {s:"The twins behaved themselves at the movie."}],
["filler-good-catch-958", DS, {s:"Vance heard his son yell from downstairs."}],
["filler-good-catch-959", DS, {s:"Wilma hid in the closet during the storm."}],
["filler-good-catch-960", DS, {s:"Zane felt peaceful as he watched the waves."}],

/// Bad fillers: Catch trials with ungrammatical missing argument on add'l verb. Verbs from Staub et al (2005)
["filler-bad-catch-943", DS, {s:"The smooth detective finally arrived at the office last night would persuade."}],
["filler-bad-catch-944", DS, {s:"Jane couldn't stop herself from smiling wanted to imitate."}],
["filler-bad-catch-945", DS, {s:"Kevin and Lena brought pie to the potluck would invite."}],
["filler-bad-catch-946", DS, {s:"That little kid greedily grabbed the candy from the top shelf was carrying."}],
["filler-bad-catch-947", DS, {s:"At the evening reception, Norbert arrived smiling carried."}],
["filler-bad-catch-948", DS, {s:"The bouncer was grumbling slowly had to guard."}],

/// 20 misc. 'clearly bad' fillers
["filler-bad-949", DS, {s:"The pompous chairman embarrassed itself during the interview when he mentioned his mom."}],
["filler-bad-950", DS, {s:"Before testing the vintage lamp, Hector was talking about under over."}],
["filler-bad-951", DS, {s:"The three friends finally performed a play together, without remembers lines."}],
["filler-bad-952", DS, {s:"When the student left, that dutiful teacher were gathering."}],
["filler-bad-953", DS, {s:"The troopers said that the blocked highway would re-open as soon as protester dispersing."}],
["filler-bad-954", DS, {s:"In the center of campus, the tree surrounded the pond in a peaceful arrives."}],
["filler-bad-955", DS, {s:"The controversial candidate wouldn't support each other despite clear promises campaign."}],
["filler-bad-956", DS, {s:"Jeremiah snapped that finger together and called the dog in for dinner."}],
["filler-bad-957", DS, {s:"Susan was disappointed that she couldn't gather enough signature for her petition."}],
["filler-bad-961", DS, {s:"Everyone at the conference became annoyed at Arturo who was constantly crinkling."}],
["filler-bad-962", DS, {s:"After nearly a week, Brianna couldn't believe that she finally subsided her aches."}],
["filler-bad-963", DS, {s:"Carla was the kind of plumber who made sure her assistant melted before leaving the job site."}],
["filler-bad-964", DS, {s:"The nurses were about to ooze just as the surgeon walked in to stop them."}],
["filler-bad-965", DS, {s:"Although the scandals resigned, the trust of the citizens would never be regained."}],
["filler-bad-966", DS, {s:"Dario knew the cars would breaking down in the hot desert sun."}],
["filler-bad-967", DS, {s:"Because Ernestine and Francis giggled strangely, their mother begin worry."}],
["filler-bad-968", DS, {s:"Daniela typed brief message on the cellphone she had in her hand."}],
["filler-bad-969", DS, {s:"The bored patient was waited in the waiting room for hours."}],
["filler-bad-970", DS, {s:"The shark circled the boat slowly hunted its prey."}],
["filler-bad-971", DS, {s:"Police posted flier that all over town."}]

];
