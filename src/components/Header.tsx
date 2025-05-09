import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Header() {
  return (
    <header 
      className="relative h-[80vh] overflow-hidden rounded-none md:rounded-3xl mx-4 mt-4 group"
      role="banner"
      aria-label="Website header with historical background"
    >
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            srcSet="/coldwar.webp" 
            type="image/webp" 
            media="(min-width: 768px)"
          />
          <LazyLoadImage
            src="/coldwar.webp"
            alt="Cold War historical context image"
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
            threshold={200}
            wrapperClassName="w-full h-full"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
        <h1 className="text-blue-400 font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight animate-fade-in-up">
          Oral History Project
        </h1>
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tight animate-fade-in-up">
            A voice from the Cold War
          </span>
        </h2>
      </div>
    </header>
  )
}