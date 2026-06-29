const FloatingSpices = () => {
  const spices = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {spices.map((_, i) => {
        const size = 6 + Math.random() * 10;
        const colors = ["#D4AF37", "#A52A2A", "#7A3D10", "#E5C76B"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <span
            key={i}
            className="spice"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              width: `${size}px`, height: `${size}px`,
              backgroundColor: color,
              animationDuration: `${12 + Math.random() * 14}s`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.55,
            }}
          />
        );
      })}
    </div>
  );
};

export const SteamPlume = ({ left = "50%" }) => (
  <div className="absolute pointer-events-none" style={{ left, bottom: 0, height: 200, width: 60 }}>
    {[0, 0.6, 1.2, 1.8].map((delay, i) => (
      <span key={i} className="steam" style={{ left: `${10 + i * 8}px`, animationDelay: `${delay}s` }} />
    ))}
  </div>
);

export default FloatingSpices;