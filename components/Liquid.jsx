import styles from "./Liquid.module.css";

const Liquid = ({ text = "Bored as fuck", duration = "1.5s" }) => {
  return (
    <div className={styles.liquid}>
      <svg viewBox="0 0 100 20">
        <defs>
          <linearGradient id="gradient">
            <stop color="black" />
          </linearGradient>
          <pattern
            id="wave"
            x="0"
            y="-0.5"
            width="100%"
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <path
              id="wavePath"
              d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
              mask="url(#mask)"
              fill="url(#gradient)"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur={duration}
                type="translate"
                from="0,0"
                to="40,0"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
        </defs>
        <text
          class="border"
          text-anchor="middle"
          x="50"
          y="15"
          font-size="15"
          fill="#010947"
          fill-opacity="1"
          className={styles.border}
        >
          {text}
        </text>
        <text
          class="border"
          text-anchor="middle"
          x="50"
          y="15"
          font-size="15"
          fill="url(#wave)"
          fill-opacity="1"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default Liquid;
