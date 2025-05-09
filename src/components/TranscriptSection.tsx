import { useState } from "react";

type TranscriptEntry = {
  speaker: string;
  dutch: string;
  english: string;
};

const transcriptData: TranscriptEntry[] = [
  {
    speaker: "Pepijn (Interviewer)",
    dutch: "Wat is uw naam en geboortejaar?",
    english: "What is your name and birth year?",
  },
  {
    speaker: "Anneke",
    dutch: "Anneke Bos van der Vis. Ik ben in 1947 geboren.",
    english: "Anneke Bos van der Vis. I was born in 1947.",
  },
  {
    speaker: "Pepijn (Interviewer)",
    dutch:
      "En waar bent u opgegroeid en wie waren de belangrijkste gezinsleden thuis?",
    english:
      "And where did you grow up, and who were the most important family members at home?",
  },
  {
    speaker: "Anneke",
    dutch:
      "Nou, ik ben opgegroeid in Koudekerk aan den Rijn. Dat is een dorpje tussen Alphen en Leiden. En mijn familie bestond uit een vader en moeder. En wij waren met vijf kinderen, vier meisjes en één jongen.",
    english:
      "Well, I grew up in Koudekerk aan den Rijn. That's a village between Alphen and Leiden. My family consisted of a father and mother, and there were five of us children: four girls and one boy.",
  },
  {
    speaker: "Pepijn (Interviewer)",
    dutch:
      "Kunt u mij eens over uw jeugd vertellen? Hoe zag een normale dag tijdens de Koude Oorlog eruit?",
    english:
      "Can you tell me about your childhood? What did a normal day during the Cold War look like?",
  },
  {
    speaker: "Anneke",
    dutch:
      "Nou, tijdens de Koude Oorlog was eigenlijk niks zo bekend. Want in mijn vroegere jeugd had ik daar geen idee van.",
    english:
      "Well, during the Cold War, nothing was really known. Because in my early youth, I had no idea about it.",
  },
  {
    speaker: "Anneke",
    dutch:
      "We leefden ons eigen leven en daar was eigenlijk nog niet echt sprake van een Koude Oorlog. Dat werd pas echt later duidelijk. Toen, ik denk voor mei, met de opstand in Hongarije.",
    english:
      "We lived our own lives, and there wasn't really talk of a Cold War yet. That only became clear later. I think around May, with the uprising in Hungary.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Dat er ook vluchtelingen in Nederland kwamen. En dat je dan hoorde dat er spionage was. En die opstand werd er hardhandig neergeslagen.",
    english:
      "That refugees also came to the Netherlands. And then you heard there was espionage. And that uprising was crushed harshly.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Ja, dat is eigenlijk voor mij als jeugdige toen wel zo'n beetje de eerste ervaringen. Dat er ook een andere soort wereld was waar je niet vrij was.",
    english:
      "Yes, that was really my first experience as a young person that there was a different kind of world where you weren't free.",
  },
  {
    speaker: "Pepijn (Interviewer)",
    dutch:
      "En wat herinnert u zich nog van berichten over de Koude Oorlog in radio- of tv-journaals of kranten?",
    english:
      "And what do you remember from news about the Cold War in radio or TV news or newspapers?",
  },
  {
    speaker: "Anneke",
    dutch:
      "Nou, tv hadden we niet. Want die hebben we pas veel later gekregen. We hadden dan een krant. En er werd vroeger wel heel veel naar de radio geluisterd.",
    english:
      "Well, we didn't have TV. We got that much later. We had a newspaper, and people used to listen to the radio a lot.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Maar voor mijn gevoel over de Koude Oorlog werd misschien wel in de tijd rond 4 en 5 mei gesproken. Dat er meer een wapenwetloop aan de gang was tussen Amerika en Rusland.",
    english:
      "But I feel like the Cold War was mostly mentioned around May 4th and 5th. That there was more of an arms race going on between America and Russia.",
  },
  {
    speaker: "Anneke",
    dutch:
      "En toen was in de tussentijd ook die muur gebouwd bij Oost-Berlijn. En dat je niet zomaar ergens naartoe kon, dat was heel beangstigend.",
    english:
      "And during that time, the wall was built in East Berlin. And that you couldn't just go anywhere—that was very frightening.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Dat je afgeluisterd kon worden en verraden kon worden door je buren of zelfs familie. Dat je dus echt moest uitkijken met wat je zei en wat je weet.",
    english:
      "That you could be wiretapped or betrayed by your neighbors or even family. That you really had to be careful about what you said and what you knew.",
  },
  {
    speaker: "Pepijn (Interviewer)",
    dutch:
      "Hoe legde uw ouders of leraren de kans op een conflict met de Sovjet-Unie uit?",
    english:
      "How did your parents or teachers explain the chance of a conflict with the Soviet Union?",
  },
  {
    speaker: "Anneke",
    dutch:
      "Met de Sovjet-Unie? Nou, we hadden de wapenwetloop. Maar dat was pas in de jaren 80, denk ik. Dat we hier al die demonstraties hadden tegen de kernwagens.",
    english:
      "With the Soviet Union? Well, we had the arms race. But that was only in the 1980s, I think. That we had all those demonstrations here against nuclear weapons.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Want Rusland en Amerika hadden beide kernwagens intussen. In de eerste instantie had Amerika die aanval op Hiroshima waardoor ook de oorlog met Japan beëindigd werd.",
    english:
      "Because by then both Russia and America had nuclear weapons. Initially, America had the attack on Hiroshima which ended the war with Japan.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Maar Rusland kreeg later ook kernwagens. En dat was beangstigend, want zou er één gek zijn die misschien wel een keer op die knop zou drukken?",
    english:
      "But Russia later got nuclear weapons too. And that was scary, because what if one madman pressed the button someday?",
  },
  {
    speaker: "Anneke",
    dutch:
      "En wat zou de wereld dan overhouden aan leefbaarheid? Dat was eigenlijk het beangstigende.",
    english:
      "And what would be left of the world's livability? That was the truly frightening part.",
  },
  {
    speaker: "Pepijn (Interviewer)",
    dutch:
      "Welke verhalen of waarschuwingen hoorde u op de radio of in de krant over de Sovjet-Unie of de Verenigde Staten? Zijn er nog bepaalde slogans of posters die u herinnert?",
    english:
      "What stories or warnings did you hear on the radio or in newspapers about the Soviet Union or the United States? Do you remember any slogans or posters?",
  },
  {
    speaker: "Anneke",
    dutch:
      "Alleen de kernwapens de wereld uit. Dat was dan in de jaren 80 wel, dat er grote demonstraties waren. En dat de democratie heel belangrijk was.",
    english:
      "Only 'get nuclear weapons out of the world.' That was really in the 1980s when there were big demonstrations. And that democracy was very important.",
  },
  {
    speaker: "Anneke",
    dutch:
      "En in hoeverre nepnieuws, ja volgens mij hadden ze het daar vroeger nog helemaal niet over. Dat is nu, nu iedereen mobieltjes heeft en TikTok en weet ik wat.",
    english:
      "And as for fake news, I don't think they talked about that back then. That's something from now—now that everyone has smartphones and TikTok and who knows what.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Het zijn nu cyberaanvallen. Dat had je vroeger ook nog helemaal niet. Maar ja, we hadden alleen die krant en de radio en verder niets.",
    english:
      "Now there are cyberattacks. You didn't have that at all back then. We only had the newspaper and radio, nothing more.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Dat weet ik eigenlijk niet zo. Het is er allemaal later pas gekomen. De autocratieën, wij wisten over Rusland niet zoveel.",
    english:
      "I don't really know. It all came later. The autocracies—we didn't know much about Russia.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Alleen dat je er niet zomaar naartoe moest gaan. Maar je kwam er ook niet zomaar.",
    english:
      "Just that you shouldn't just go there. But you couldn't get there easily anyway.",
  },
  {
    speaker: "Pepijn (Interviewer)",
    dutch:
      "In hoeverre vertrouwde u het nieuws dat u hoorde? Vroeg u zich wel eens af of u de hele waarheid te horen kreeg?",
    english:
      "To what extent did you trust the news you heard? Did you ever wonder whether you were hearing the full truth?",
  },
  {
    speaker: "Anneke",
    dutch: "Nou het nieuws, ja dat geloofde ik toen wel dat alles waar was.",
    english: "Well, the news—I did believe everything was true back then.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Maar tegenwoordig met dat TikTok en dergelijke. En dat er zoveel nepnieuws is en dat je zo verschrikkelijk afgeluisterd kan worden.",
    english:
      "But nowadays with TikTok and such—and that there is so much fake news and that you can be wiretapped in such terrifying ways.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Met alles en nog wat bestond toen niet. Dat bestond niet. Voor mijn gevoel niet.",
    english:
      "All that didn't exist back then. It didn't. Not in my experience.",
  },
  {
    speaker: "Pepijn (Interviewer)",
    dutch:
      "Is er een bijzondere herinnering of verhaal uit die tijd dat u nog niet heeft gedeeld maar wel belangrijk vindt?",
    english:
      "Is there a special memory or story from that time you haven't shared yet but consider important?",
  },
  {
    speaker: "Anneke",
    dutch:
      "Ik heb ook bewust meegemaakt. Wij zijn lid van de Broedergemeente. En daar heb ik eens in de zoveel jaar een synode.",
    english:
      "I also experienced something consciously. We're members of the Moravian Church. And every few years there's a synod.",
  },
  {
    speaker: "Anneke",
    dutch:
      "En heel vroeger voordat die wapenwet kwam en de muur in Berlijn en dergelijke stond. Was in Hernhout, de hoofdzetel van de Broedergemeente, in Hernhout.",
    english:
      "And long ago, before the arms law and the Berlin Wall and such, the headquarters of the Moravian Church was in Herrnhut.",
  },
  {
    speaker: "Anneke",
    dutch:
      "En nadat de muur gekomen was, mocht je daar niet meer naartoe. Daar kon je ook niet meer naartoe.",
    english:
      "And after the wall came, you were no longer allowed to go there. You couldn't go there anymore.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Toen is de hoofdzetel in West-Duitsland gekomen, in Bad Bol. Maar er konden dus ook geen synodes meer gehouden worden.",
    english:
      "Then the headquarters moved to West Germany, to Bad Boll. So synods could no longer be held.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Dus werd er in het westen van Europa een synode gehouden. En op een gegeven moment gingen ze wel mensen uit Hernhout uitnodigen.",
    english:
      "So a synod was held in Western Europe. And at some point, they started inviting people from Herrnhut.",
  },
  {
    speaker: "Anneke",
    dutch:
      "En dat vroeg je toestemming dat ze naar onze synode mochten komen. Daar kregen ze ook wel eens toestemming voor.",
    english:
      "And you would request permission for them to attend our synod. And sometimes they got that permission.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Zo zijn er, toen opa bij de Broedergemeente werkte. Ook bij ons hier in huis is iemand gekomen.",
    english:
      "That's how someone came to our house while grandpa worked at the Moravian Church.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Die moest zich dagelijks melden op het politiebureau. Dat hij hier deelnam aan de synodevergadering.",
    english:
      "He had to report daily to the police station because he was participating in the synod meeting here.",
  },
  {
    speaker: "Anneke",
    dutch:
      "En dat is dan ook wel een beetje beangstigend. Want hij moet iedere dag naar het gemeentehuis of naar de politie om zich te melden.",
    english:
      "And that's a bit frightening. Because he had to go every day to the town hall or the police to report in.",
  },
  {
    speaker: "Anneke",
    dutch:
      "Dat is vast beangstigend. Dat maak je dan bewust mee als jongvolwassene.",
    english:
      "That's definitely frightening. You experience that consciously as a young adult.",
  },
  {
    speaker: "Pepijn (Interviewer)",
    dutch:
      "En welke adviezen of lessen uit uw ervaringen zou u vandaag nog aan die jonge mensen willen meegeven?",
    english:
      "And what advice or lessons from your experiences would you want to pass on to young people today?",
  },
  {
    speaker: "Anneke",
    dutch:
      "Geloof niet alles. Geloof echt niet alles. Wees voorzichtig met wat je deelt. Ik denk dat dat het voornaamste is.",
    english:
      "Don't believe everything. Really. Don't believe everything. Be careful with what you share. I think that's the most important thing.",
  },
];

export default function TranscriptSection() {
  const [showEnglish, setShowEnglish] = useState(false);

  return (
    <section
      className="max-w-4xl mx-auto px-4 my-20"
      aria-labelledby="transcript-heading"
      role="region"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 id="transcript-heading" className="text-white text-2xl font-bold">
          Interview Transcript
        </h2>

        <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
          <span className="text-sm">{showEnglish ? "English" : "Dutch"}</span>
          <div className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0"
              checked={showEnglish}
              onChange={() => setShowEnglish((prev) => !prev)}
              aria-label="Toggle English/Dutch transcript"
            />
            <div
              className={`absolute inset-0 rounded-full transition ${
                showEnglish ? "bg-blue-600" : "bg-gray-600"
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform transform ${
                showEnglish ? "translate-x-6" : ""
              }`}
            />
          </div>
        </label>
      </div>

      <p className="text-sm text-gray-400 italic mb-4">
        Showing: {showEnglish ? "Translation (English)" : "Original (Dutch)"}
      </p>

      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl space-y-6 overflow-x-auto">
        {transcriptData.map((entry, index) => (
          <div
            key={index}
            className="flex gap-4"
            role="listitem"
            aria-label={`Transcript entry ${index + 1}`}
          >
            <span className="flex-shrink-0 w-24 font-medium text-blue-400">
              {entry.speaker}:
            </span>
            <p
              className="text-gray-300 flex-grow min-w-[300px]"
              aria-live="polite"
            >
              {showEnglish ? entry.english : entry.dutch}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
