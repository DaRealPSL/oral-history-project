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
              Anneke Bos van der Vis grew up in a small Dutch village between Alphen aan den Rijn and Leiden. She was one of five children in a close-knit family, and her early life was shaped more by local routines than by global politics.
            </p>
            <p>
              During her childhood, the Cold War wasn't widely discussed at home or school. It wasn't until the Hungarian Uprising in 1956 that she began to understand there was a world beyond her own — a world with conflict, fear, and repression. She recalls how refugees from Hungary arrived in the Netherlands and how this marked her first awareness of international tension.
            </p>
            <p>
              As she grew older, events like the construction of the Berlin Wall and the nuclear arms race became more visible through news reports and public demonstrations. In the 1980s, she experienced protests against nuclear weapons firsthand and remembers how people feared what could happen if "someone pressed the button."
            </p>
            <p>
              Her experience is deeply personal, including memories of her family's religious community, the Broedergemeente, hosting East German guests who had to report daily to the police — a clear reminder of life behind the Iron Curtain.
            </p>
            <p>
              Anneke is my grandmother, and I chose to interview her because her lived experiences give insight into how ordinary people in the Netherlands made sense of extraordinary global events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}