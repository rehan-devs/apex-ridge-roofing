import { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeSrc:    string;
  afterSrc:     string;
  beforeLabel?: string;
  afterLabel?:  string;
  className?:   string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel  = 'After',
  className   = '',
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging   = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect    = containerRef.current.getBoundingClientRect();
    const x       = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  // Mouse
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const stopDrag = useCallback(() => { isDragging.current = false; }, []);

  // Touch
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    e.preventDefault(); // prevent page scroll while dragging
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden select-none cursor-col-resize ${className}`}
      style={{ aspectRatio: '16/10' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={stopDrag}
    >
      {/* After image — full background */}
      <img
        src={afterSrc}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image — clipped to left of slider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          draggable={false}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Divider line ── */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] z-10 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      />

      {/* ── Handle ── */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-11 h-11 rounded-full bg-white shadow-xl shadow-black/30 flex items-center justify-center ring-2 ring-white/20">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M7 11H3M3 11L6 8M3 11L6 14"
              stroke="#0a192f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
            <path
              d="M15 11H19M19 11L16 8M19 11L16 14"
              stroke="#0a192f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* ── Labels ── */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <span className="bg-navy-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <span className="bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {afterLabel}
        </span>
      </div>

      {/* ── Hint text (fades after first drag) ── */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <span className="bg-black/40 backdrop-blur-sm text-white/80 text-[10px] font-medium px-3 py-1 rounded-full">
          Drag to compare
        </span>
      </div>
    </div>
  );
}