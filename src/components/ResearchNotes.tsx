import { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';

export default function ResearchNotes() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="max-w-4xl mx-auto my-20 px-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl border border-gray-700 transition"
        aria-expanded={isOpen}
        aria-controls="research-notes"
      >
        <ChevronsUpDown className="w-5 h-5" />
        {isOpen ? 'Hide' : 'Show'} Research Notes
      </button>

      {isOpen && (
        <div
          id="research-notes"
          className="mt-6 p-6 bg-gray-900 border border-gray-700 rounded-2xl text-gray-300 overflow-y-auto max-h-[400px] space-y-6"
        >
          <div>
            <h3 className="text-white font-bold text-lg mb-2">1. Construction of the Berlin Wall (1961)</h3>
            <p>
              Divided East and West Berlin, intensifying Cold War tensions. Many East Germans were trapped in the East,
              and Anneke, growing up in the Netherlands, was influenced by the fear of division and authoritarianism.
            </p>
            <p className="text-sm text-blue-400 mt-1">
              Source: https://www.britannica.com/event/Berlin-Wall
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-2">2. Cuban Missile Crisis (1962)</h3>
            <p>
              A terrifying 13-day standoff between the U.S. and USSR that brought the world to the brink of nuclear war.
              It was a widely publicized event in Europe, and Anneke recalls the anxiety at the time.
            </p>
            <p className="text-sm text-blue-400 mt-1">
              Source: https://history.state.gov/milestones/1961-1968/cuban-missile-crisis
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-2">3. Hungarian Revolution (1956)</h3>
            <p>
              A major uprising against Soviet control in Hungary. Though crushed, it symbolized resistance in Eastern Europe.
              Events like this shaped Anneke's perception of Eastern Bloc struggles.
            </p>
            <p className="text-sm text-blue-400 mt-1">
              Source: https://www.britannica.com/event/Hungarian-Revolution-1956
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-2">4. Dutch Post-War Reconstruction (Late 1940s - 1950s)</h3>
            <p>
              After WWII, the Netherlands rebuilt itself rapidly. Rationing, economic aid (Marshall Plan), and cultural rebuilding
              were central to Anneke's childhood environment.
            </p>
            <p className="text-sm text-blue-400 mt-1">
              Source: https://encyclopedievanzeeland.nl/Post-War_Reconstruction
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
