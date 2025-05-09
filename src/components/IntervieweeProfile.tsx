export default function IntervieweeProfile() {
  return (
    <section 
      className="max-w-4xl mx-auto my-20 px-4"
      aria-labelledby="interviewee-heading"
    >
      <h2 id="interviewee-heading" className="sr-only">Interviewee Information</h2>
      
      <div 
        className="flex flex-col md:flex-row items-center gap-8 bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-blue-400/30 transition-colors duration-300"
      >
        <div 
          className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300 shadow-lg"
          role="img" 
          aria-label="Interviewee profile picture"
        >
          <img 
            src="/front-page-pfp.png"
            alt="Interviewee portrait"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center md:text-left space-y-4 max-w-prose text-gray-300">
          <p className="text-white font-bold text-2xl mb-2" aria-label="Interviewee name">
            Anneke Bos van der Vis
          </p>

          <blockquote 
            className="italic text-lg relative before:absolute before:-left-6 before:-top-4 before:text-4xl before:text-blue-400/50 after:absolute after:-right-6 after:-bottom-8 after:text-4xl after:text-blue-400/50"
            cite="#transcript"
            aria-describedby="quote-source"
          >
            Born in 1947 in Koudekerk aan den Rijn
          </blockquote>

          <div className="text-sm leading-relaxed space-y-4">
            <p>
              Anneke Bos van der Vis grew up in a small village in the Netherlands, between the towns of Alphen aan den Rijn and Leiden. She was one of five children in a close family. Her daily life was quiet and simple, focused on home and school.
            </p>
            <p>
              When she was young, people did not talk much about world events. The Cold War was not often mentioned. But in 1956, during the Hungarian Uprising, she started to notice what was happening in the world. Refugees from Hungary came to the Netherlands, and this made her aware of problems in other countries.
            </p>
            <p>
              As she became older, she saw more news about the Cold War. She remembers the Berlin Wall and the nuclear weapons race. In the 1980s, she took part in protests against these weapons. She says people were afraid of what could happen if something went wrong.
            </p>
            <p>
              Her family was part of a religious community called the Broedergemeente. They hosted guests from East Germany who had to report to the police every day. This showed her how different life was in countries with less freedom.
            </p>
            <p>
              Anneke is my grandmother. I chose to interview her because her stories help me understand what life was like in the Netherlands during the Cold War. She lived through a time when people were worried about war, but still tried to live normal lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
