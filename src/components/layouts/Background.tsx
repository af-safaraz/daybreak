const Background = () => {
  return (
    <>
      <div
        className="background-circle fixed -z-50 bottom-0 right-0 translate-1/2 w-[170vh] h-[170vh] opacity-90 bg-[radial-gradient(circle_closest-side,_var(--primary)_10%,_transparent)]"
        style={{ filter: "url(#grain)" }}
      ></div>
      <svg className="absolute w-0 h-0 overflow-hidden">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            stitchTiles="stitch"
            result="colorNoise"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="hard-light" />
        </filter>
      </svg>
    </>
  );
};

export default Background;
