// import styles from "./Liquid.module.css";

const Liquid = ({
  stroke,
  border,
  width = "100%",
  height = "100%",
  waveHeight = 0,
  duration = "1.5s",
  fontSize = "10px",
  waveColor = "#0070f3",
  strokeColor = "#fff",
  textColor = "#010947",
  text = "Bored As Fuck",
}) => {
  const liquidStyles = {
    fontSize,
    width,
    height,
    letterSpacing: "0.5px",
    display: "inline-block",
    border: border ? `1px dashed ${waveColor}` : "none",
    fontFamily: "fantasy, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
  };

  return (
    <div style={liquidStyles}>
      <svg viewBox="0 0 100 12">
        <defs>
          <pattern
            x="0"
            id="wave"
            width="100%"
            height="150%"
            y={13 - waveHeight}
            patternUnits="userSpaceOnUse"
          >
            <path
              id="wavePath"
              fill={waveColor}
              mask="url(#mask)"
              d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
            >
              <animateTransform
                begin="0s"
                from="0,0"
                to="40,0"
                dur={duration}
                type="translate"
                repeatCount="indefinite"
                attributeName="transform"
              />
            </path>
          </pattern>
        </defs>
        <text x="50" y="9" fillOpacity="1" fill={textColor} textAnchor="middle">
          {text}
        </text>
        <text
          x="50"
          y="9"
          fillOpacity="1"
          fill="url(#wave)"
          textAnchor="middle"
          stroke={stroke && strokeColor}
          strokeWidth={stroke ? "0.1px" : "0"}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default Liquid;
