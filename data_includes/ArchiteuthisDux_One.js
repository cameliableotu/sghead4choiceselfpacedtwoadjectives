var counterOverride = 0;

// Do show progress bar (fine!!)
var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'shared-intro',
    sepWith("timeoutSep", rshuffle(startsWith('FLAPJACK'),startsWith('filler'))),
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
};

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

[["FLAPJACK-AMBIG-SHORT",1], DS, {s:"Iâ€™m not sure which treasure the pirate noticed at the beach found, but a lot of people want to know."},"QuestionAlt", {q: "Who found the treasure?", as: ["The pirate","Some people"]}],
[["FLAPJACK-UNAMBIG-SHORT",1], DS, {s:"Iâ€™m not sure which treasure the pirate who was noticed at the beach found, but a lot of people want to know."},"QuestionAlt", {q: "Who found the treasure?", as: ["The pirate","Some people"]}],
[["FLAPJACK-AMBIG-LONG",1], DS, {s:"Iâ€™m not sure which treasure the gnarly old captain said that the pirate noticed at the beach found, but a lot of people want to know."},"QuestionAlt", {q: "Who found the treasure?", as: ["The pirate","Some people"]}],
[["FLAPJACK-UNAMBIG-LONG",1], DS, {s:"Iâ€™m not sure which treasure the gnarly old captain said that the pirate who was noticed at the beach found, but a lot of people want to know."},"QuestionAlt", {q: "Who found the treasure?", as: ["The pirate","Some people"]}],

[["FLAPJACK-AMBIG-SHORT",2], DS, {s:"Nobody told us which delicate prints the interior designer noticed this month ruined, but everyone is annoyed about it."},"QuestionAlt", {q: "What was ruined?", as: ["Some prints","The design"]}],
[["FLAPJACK-UNAMBIG-SHORT",2], DS, {s:"Nobody told us which delicate prints the interior designer who was noticed this month ruined, but everyone is annoyed about it."},"QuestionAlt", {q: "What was ruined?", as: ["Some prints","The design"]}],
[["FLAPJACK-AMBIG-LONG",2], DS, {s:"Nobody told us which delicate prints Ian claimed that the interior designer noticed this month ruined, but everyone is annoyed about it."},"QuestionAlt", {q: "What was ruined?", as: ["Some prints","The design"]}],
[["FLAPJACK-UNAMBIG-LONG",2], DS, {s:"Nobody told us which delicate prints Ian claimed that the interior designer who was noticed this month ruined, but everyone is annoyed about it."},"QuestionAlt", {q: "What was ruined?", as: ["Some prints","The design"]}],

[["FLAPJACK-AMBIG-SHORT",3], DS, {s:"We asked which Toyota the salesman described as efficient sold, but nobody could answer us."},"QuestionAlt", {q: "Who or what was described as efficient?", as: ["The salesman","The Toyota"]}],
[["FLAPJACK-UNAMBIG-SHORT",3], DS, {s:"We asked which Toyota the salesman who was described as efficient sold, but nobody could answer us."},"QuestionAlt", {q: "Who or what was described as efficient?", as: ["The salesman","The Toyota"]}],
[["FLAPJACK-AMBIG-LONG",3], DS, {s:"We asked which Toyota the owner claimed that the salesman described as efficient sold, but nobody could answer us."},"QuestionAlt", {q: "Who or what was described as efficient?", as: ["The salesman","The Toyota"]}],
[["FLAPJACK-UNAMBIG-LONG",3], DS, {s:"We asked which Toyota the owner claimed that the salesman who was described as efficient sold, but nobody could answer us."},"QuestionAlt", {q: "Who or what was described as efficient?", as: ["The salesman","The Toyota"]}],

[["FLAPJACK-AMBIG-SHORT",4], DS, {s:"Nobody asked which electrician the assistant needed this morning hired, but the wiring will get fixed."},"QuestionAlt", {q: "Who was needed this morning?", as: ["An assistant","An electrician"]}],
[["FLAPJACK-UNAMBIG-SHORT",4], DS, {s:"Nobody asked which electrician the assistant who was needed this morning hired, but the wiring will get fixed."},"QuestionAlt", {q: "Who was needed this morning?", as: ["An assistant","An electrician"]}],
[["FLAPJACK-AMBIG-LONG",4], DS, {s:"Nobody asked which electrician the receptionist claimed that the assistant needed this morning hired, but the wiring will get fixed."},"QuestionAlt", {q: "Who was needed this morning?", as: ["An assistant","An electrician"]}],
[["FLAPJACK-UNAMBIG-LONG",4], DS, {s:"Nobody asked which electrician the receptionist claimed that the assistant who was needed this morning hired, but the wiring will get fixed."},"QuestionAlt", {q: "Who was needed this morning?", as: ["An assistant","An electrician"]}],

[["FLAPJACK-AMBIG-SHORT",5], DS, {s:"Jane isnâ€™t certain which assistant the doctor needed last night picked, but she will find out."},"QuestionAlt", {q: "Who was needed last night?", as: ["A doctor","An assistant"]}],
[["FLAPJACK-UNAMBIG-SHORT",5], DS, {s:"Jane isnâ€™t certain which assistant the doctor who was needed last night picked, but she will find out."},"QuestionAlt", {q: "Who was needed last night?", as: ["A doctor","An assistant"]}],
[["FLAPJACK-AMBIG-LONG",5], DS, {s:"Jane isnâ€™t certain which assistant her husband mentioned the doctor needed last night picked, but she will find out."},"QuestionAlt", {q: "Who was needed last night?", as: ["A doctor","An assistant"]}],
[["FLAPJACK-UNAMBIG-LONG",5], DS, {s:"Jane isnâ€™t certain which assistant her husband mentioned the doctor who was needed last night picked, but she will find out."},"QuestionAlt", {q: "Who was needed last night?", as: ["A doctor","An assistant"]}],

[["FLAPJACK-AMBIG-SHORT",6], DS, {s:"Nobody noticed which dog the bratty child invited to the party taunted, but the child should be punished."},"QuestionAlt", {q: "Who was taunted?", as: ["The dog","The child"]}],
[["FLAPJACK-UNAMBIG-SHORT",6], DS, {s:"Nobody noticed which dog the bratty child who was invited to the party taunted, but the child should be punished."},"QuestionAlt", {q: "Who was taunted?", as: ["The dog","The child"]}],
[["FLAPJACK-AMBIG-LONG",6], DS, {s:"Nobody noticed which dog the gardener swore that the bratty child invited to the party taunted, but the child should be punished."},"QuestionAlt", {q: "Who was taunted?", as: ["The dog","The child"]}],
[["FLAPJACK-UNAMBIG-LONG",6], DS, {s:"Nobody noticed which dog the gardener swore that the bratty child who was invited to the party taunted, but the child should be punished."},"QuestionAlt", {q: "Who was taunted?", as: ["The dog","The child"]}],

[["FLAPJACK-AMBIG-SHORT",7], DS, {s:"Kate had no idea which banker the partners invited to the discussions contacted, but she's gotta find out before investing."},"QuestionAlt", {q: "Who was contacted?", as: ["A banker","The partners"]}],
[["FLAPJACK-UNAMBIG-SHORT",7], DS, {s:"Kate had no idea which banker the partners who were invited to the discussions contacted, but she's gotta find out before investing."},"QuestionAlt", {q: "Who was contacted?", as: ["A banker","The partners"]}],
[["FLAPJACK-AMBIG-LONG",7], DS, {s:"Kate had no idea which banker Lucinda claimed that the partners invited to the discussions contacted, but she's gotta find out before investing."},"QuestionAlt", {q: "Who was contacted?", as: ["A banker","The partners"]}],
[["FLAPJACK-UNAMBIG-LONG",7], DS, {s:"Kate had no idea which banker Lucinda claimed that the partners who were invited to the discussions contacted, but she's gotta find out before investing."},"QuestionAlt", {q: "Who was contacted?", as: ["A banker","The partners"]}],

[["FLAPJACK-AMBIG-SHORT",8], DS, {s:"Antonio refused to say which camel the tour guide assigned to the tourists rode, but there were definitely photos."},"QuestionAlt", {q: "What did the tour guide ride?", as: ["A camel","A horse"]}],
[["FLAPJACK-UNAMBIG-SHORT",8], DS, {s:"Antonio refused to say which camel the tour guide who was assigned to the tourists rode, but there were definitely photos."},"QuestionAlt", {q: "What did the tour guide ride?", as: ["A camel","A horse"]}],
[["FLAPJACK-AMBIG-LONG",8], DS, {s:"Antonio refused to say which camel the assistants said that the tour guide assigned to the tourists rode, but there were definitely photos. "},"QuestionAlt", {q: "What did the tour guide ride?", as: ["A camel","A horse"]}],
[["FLAPJACK-UNAMBIG-LONG",8], DS, {s:"Antonio refused to say which camel the assistants said that the tour guide who was assigned to the tourists rode, but there were definitely photos."},"QuestionAlt", {q: "What did the tour guide ride?", as: ["A camel","A horse"]}],

[["FLAPJACK-AMBIG-SHORT",9], DS, {s:"Iâ€™m not sure which ATM the incompetent representative assigned to my case cursed, but obviously everything worked properly."}],
[["FLAPJACK-UNAMBIG-SHORT",9], DS, {s:"Iâ€™m not sure which ATM the incompetent representative who was assigned to my case cursed, but obviously everything worked properly."}],
[["FLAPJACK-AMBIG-LONG",9], DS, {s:"Iâ€™m not sure which ATM Ferdinand said that the incompetent representative assigned to my case cursed, but obviously everything worked properly."}],
[["FLAPJACK-UNAMBIG-LONG",9], DS, {s:"Iâ€™m not sure which ATM Ferdinand said that the incompetent representative who was assigned to my case cursed, but obviously everything worked properly."}],

[["FLAPJACK-AMBIG-SHORT",10], DS, {s:"Iâ€™m not sure which customers the trainee expected to succeed impressed, but she's definitely getting a promotion."}],
[["FLAPJACK-UNAMBIG-SHORT",10], DS, {s:"Iâ€™m not sure which customers the trainee who was expected to succeed impressed, but she's definitely getting a promotion."}],
[["FLAPJACK-AMBIG-LONG",10], DS, {s:"Iâ€™m not sure which customers Annabelle indicated that the trainee expected to succeed impressed, but she's definitely getting a promotion."}],
[["FLAPJACK-UNAMBIG-LONG",10], DS, {s:"Iâ€™m not sure which customers Annabelle indicated that the trainee who was expected to succeed impressed, but she's definitely getting a promotion."}],

[["FLAPJACK-AMBIG-SHORT",11], DS, {s:"Sam knew which table the carpenter praised so highly designed, but the table wasnâ€™t his favorite."}],
[["FLAPJACK-UNAMBIG-SHORT",11], DS, {s:"Sam knew which table the carpenter who was praised so highly designed, but the table wasnâ€™t his favorite."}],
[["FLAPJACK-AMBIG-LONG",11], DS, {s:"Sam knew which table the potter mentioned that the carpenter praised so highly designed, but the table wasnâ€™t his favorite."}],
[["FLAPJACK-UNAMBIG-LONG",11], DS, {s:"Sam knew which table the potter mentioned that the carpenter who was praised so highly designed, but the table wasnâ€™t his favorite."}],

[["FLAPJACK-AMBIG-SHORT",12], DS, {s:"Patrick wondered which intern the technician hired on Monday hated, but he had his suspicions."}],
[["FLAPJACK-UNAMBIG-SHORT",12], DS, {s:"Patrick wondered which intern the technician who was hired on Monday hated, but he had his suspicions."}],
[["FLAPJACK-AMBIG-LONG",12], DS, {s:"Patrick wondered which intern the boss reported that the technician hired on Monday hated, but he had his suspicions."}],
[["FLAPJACK-UNAMBIG-LONG",12], DS, {s:"Patrick wondered which intern the boss reported that the technician who was hired on Monday hated, but he had his suspicions."}],

[["FLAPJACK-AMBIG-SHORT",13], DS, {s:"Jesse asked which horse the trainer required for certification trained, but she didnâ€™t have a favorite."}],
[["FLAPJACK-UNAMBIG-SHORT",13], DS, {s:"Jesse asked which horse the trainer who was required for certification trained, but she didnâ€™t have a favorite."}],
[["FLAPJACK-AMBIG-LONG",13], DS, {s:"Jesse asked which horse the rancher assumed that the trainer required for certification trained, but she didnâ€™t have a favorite."}],
[["FLAPJACK-UNAMBIG-LONG",13], DS, {s:"Jesse asked which horse the rancher assumed that the trainer who was required for certification trained, but she didnâ€™t have a favorite."}],

[["FLAPJACK-AMBIG-SHORT",14], DS, {s:"Henry inquired which waitress the busboy required in the kitchen dated, but we werenâ€™t exactly sure why."}],
[["FLAPJACK-UNAMBIG-SHORT",14], DS, {s:"Henry inquired which waitress the busboy who was required in the kitchen dated, but we werenâ€™t exactly sure why."}],
[["FLAPJACK-AMBIG-LONG",14], DS, {s:"Henry inquired which waitress Anthony claimed that the busboy required in the kitchen dated, but we werenâ€™t exactly sure why."}],
[["FLAPJACK-UNAMBIG-LONG",14], DS, {s:"Henry inquired which waitress Anthony claimed that the busboy who was required in the kitchen dated, but we werenâ€™t exactly sure why."}],

[["FLAPJACK-AMBIG-SHORT",15], DS, {s:"Lou noted which medic the lieutenant recalled for duty beckoned, but nobody knew why he cared."}],
[["FLAPJACK-UNAMBIG-SHORT",15], DS, {s:"Lou noted which medic the lieutenant who was recalled for duty beckoned, but nobody knew why he cared."}],
[["FLAPJACK-AMBIG-LONG",15], DS, {s:"Lou noted which medic Jeremy told us that the lieutenant recalled for duty beckoned, but nobody knew why he cared."}],
[["FLAPJACK-UNAMBIG-LONG",15], DS, {s:"Lou noted which medic Jeremy told us that the lieutenant who was recalled for duty beckoned, but nobody knew why he cared."}],

// Although instead of but.
[["FLAPJACK-AMBIG-SHORT",16], DS, {s:"Paula asked which pharmacy the doctors appointed quite recently blamed, although she couldn't change any policy herself."}],
[["FLAPJACK-UNAMBIG-SHORT",16], DS, {s:"Paula asked which pharmacy the doctors who were appointed quite recently blamed, although she couldn't change any policy herself."}],
[["FLAPJACK-AMBIG-LONG",16], DS, {s:"Paula asked which pharmacy the neighbors said that the doctors appointed quite recently blamed, although she couldn't change any policy herself."}],
[["FLAPJACK-UNAMBIG-LONG",16], DS, {s:"Paula asked which pharmacy the neighbors said that the doctors who were appointed quite recently blamed, although she couldn't change any policy herself."}],

// Although instead of but.
[["FLAPJACK-AMBIG-SHORT",17], DS, {s:"Melissa discovered which doctor the girl frightened at the hospital hated, although she had immediately noticed a problem."}],
[["FLAPJACK-UNAMBIG-SHORT",17], DS, {s:"Melissa discovered which doctor the girl who was frightened at the hospital hated, although she had immediately noticed a problem."}],
[["FLAPJACK-AMBIG-LONG",17], DS, {s:"Melissa discovered which doctor Lee insisted that the girl frightened at the hospital hated, although she had immediately noticed a problem."}],
[["FLAPJACK-UNAMBIG-LONG",17], DS, {s:"Melissa discovered which doctor Lee insisted that the girl who was frightened at the hospital hated, although she had immediately noticed a problem."}],

[["FLAPJACK-AMBIG-SHORT",18], DS, {s:"The nurse told us which patients the intern declared to be uncooperative sued, but she didnâ€™t identify them."}],
[["FLAPJACK-UNAMBIG-SHORT",18], DS, {s:"The nurse told us which patients the intern who was declared to be uncooperative sued, but she didnâ€™t identify them."}],
[["FLAPJACK-AMBIG-LONG",18], DS, {s:"The nurse told us which patients Fernanda thought the intern declared to be uncooperative sued, but she didnâ€™t identify them."}],
[["FLAPJACK-UNAMBIG-LONG",18], DS, {s:"The nurse told us which patients Fernanda thought the intern who was declared to be uncooperative sued, but she didnâ€™t identify them."}],

// Renumbered from Flapjack E1a/b
[["FLAPJACK-AMBIG-SHORT",19], DS, {s:"Joanna was unsure of which bread the baker suggested for the party made, but she definitely liked his croissants."}],
[["FLAPJACK-UNAMBIG-SHORT",19], DS, {s:"Joanna was unsure of which bread the baker who was suggested for the party made, but she definitely liked his croissants."}],
[["FLAPJACK-AMBIG-LONG",19], DS, {s:"Joanna was unsure of which bread the guests claimed that the baker suggested for the party made, but she definitely liked his croissants."}],
[["FLAPJACK-UNAMBIG-LONG",19], DS, {s:"Joanna was unsure of which bread the guests claimed that the baker who was suggested for the party made, but she definitely liked his croissants."}],

[["FLAPJACK-AMBIG-SHORT",20], DS, {s:"Mr. Hamilton knew which dancer the young singer discovered in the competition adored, but he discouraged dating among competitors."}],
[["FLAPJACK-UNAMBIG-SHORT",20], DS, {s:"Mr. Hamilton knew which dancer the young singer who was discovered in the competition adored, but he discouraged dating among competitors."}],
[["FLAPJACK-AMBIG-LONG",20], DS, {s:"Mr. Hamilton knew which dancer Paulina said that the young singer discovered in the competition adored, but he discouraged dating among competitors."}],
[["FLAPJACK-UNAMBIG-LONG",20], DS, {s:"Mr. Hamilton knew which dancer Paulina said that the young singer who was discovered in the competition adored, but he discouraged dating among competitors."}],

[["FLAPJACK-AMBIG-SHORT",21], DS, {s:"We wondered which driver the bicyclist discussed on Monday accused, but we didnâ€™t try to find out."}],
[["FLAPJACK-UNAMBIG-SHORT",21], DS, {s:"We wondered which driver the bicyclist who was discussed on Monday accused, but we didnâ€™t try to find out."}],
[["FLAPJACK-AMBIG-LONG",21], DS, {s:"We wondered which driver the bystanders thought that the bicyclist discussed on Monday accused, but we didnâ€™t try to find out."}],
[["FLAPJACK-UNAMBIG-LONG",21], DS, {s:"We wondered which driver the bystanders thought that the bicyclist who was discussed on Monday accused, but we didnâ€™t try to find out."}],

[["FLAPJACK-AMBIG-SHORT",22], DS, {s:"The detective asked which convict the warden assumed to be unreliable described, but he couldnâ€™t find out who it was."}],
[["FLAPJACK-UNAMBIG-SHORT",22], DS, {s:"The detective asked which convict the warden who was assumed to be unreliable described, but he couldnâ€™t find out who it was."}],
[["FLAPJACK-AMBIG-LONG",22], DS, {s:"The detective asked which convict Susanne said that the warden assumed to be unreliable described, but he couldnâ€™t find out who it was."}],
[["FLAPJACK-UNAMBIG-LONG",22], DS, {s:"The detective asked which convict Susanne said that the warden who was assumed to be unreliable described, but he couldnâ€™t find out who it was."}],

[["FLAPJACK-AMBIG-SHORT",23], DS, {s:"Jason asked which child the babysitter covered with a blanket scared, but he didn't really care."}],
[["FLAPJACK-UNAMBIG-SHORT",23], DS, {s:"Jason asked which child the babysitter who was covered with a blanket scared, but he didn't really care."}],
[["FLAPJACK-AMBIG-LONG",23], DS, {s:"Jason asked which child the doorman said the babysitter covered with a blanket scared, but he didn't really care."}],
[["FLAPJACK-UNAMBIG-LONG",23], DS, {s:"Jason asked which child the doorman said the babysitter who was covered with a blanket scared, but he didn't really care."}],

[["FLAPJACK-AMBIG-SHORT",24], DS, {s:"Henrietta found out which volcano the expert recognized at the conference climbed, but she wasn't impressed."}],
[["FLAPJACK-UNAMBIG-SHORT",24], DS, {s:"Henrietta found out which volcano the expert who was recognized at the conference climbed, but she wasn't impressed."}],
[["FLAPJACK-AMBIG-LONG",24], DS, {s:"Henrietta found out which volcano the newspaper reported that the expert recognized at the conference climbed, but she wasn't impressed."}],
[["FLAPJACK-UNAMBIG-LONG",24], DS, {s:"Henrietta found out which volcano the newspaper reported that the expert who was recognized at the conference climbed, but she wasn't impressed."}],

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
© 2020 GitHub, Inc.
