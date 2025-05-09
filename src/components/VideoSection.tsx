'use client';

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    if (!audio || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create AudioContext and analyser once
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (!sourceRef.current) {
      try {
        sourceRef.current = audioCtxRef.current.createMediaElementSource(audio);
        analyserRef.current = audioCtxRef.current.createAnalyser();
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioCtxRef.current.destination);
        analyserRef.current.fftSize = 256;
      } catch (err) {
        setError(`Audio setup error: ${(err as Error).message}`);
        return;
      }
    }

    const analyser = analyserRef.current!;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 1.5;
        ctx.fillStyle = "#3b82f6";
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };

    draw();

    return () => {
      // Cleanup connections
      sourceRef.current?.disconnect();
      analyserRef.current?.disconnect();
      audioCtxRef.current?.close();
      sourceRef.current = null;
      analyserRef.current = null;
      audioCtxRef.current = null;
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    const audioCtx = audioCtxRef.current;
    if (!audio || !audioCtx) return;

    try {
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }

      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }

      setIsPlaying(!isPlaying);
    } catch (e) {
      setError(`Error playing audio: ${(e as Error).message}`);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 my-20" aria-labelledby="audio-heading" role="region">
      <h2 id="audio-heading" className="text-blue-400 text-2xl font-bold mb-8">
        Listen to the Interview
      </h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="rounded-2xl overflow-hidden bg-gray-900/80 border border-gray-700 shadow-2xl relative group">
        <canvas ref={canvasRef} className="w-full h-48 block" />

        <div
          className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
          onClick={togglePlay}
          role="button"
          tabIndex={0}
          aria-label={isPlaying ? "Pause interview audio" : "Play interview audio"}
        >
          {isPlaying ? (
            <Pause className="w-16 h-16 text-white" strokeWidth={1.5} />
          ) : (
            <Play className="w-16 h-16 text-white" strokeWidth={1.5} />
          )}
        </div>

        <audio
          ref={audioRef}
          src="/interview-audio.mp3"
          preload="auto"
          className="hidden"
        />
      </div>
    </section>
  );
}