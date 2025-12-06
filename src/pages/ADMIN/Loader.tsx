import { useEffect, useState } from "react";

const LoaderPage = () => {
  const [loadingText, setLoadingText] = useState("INITIALIZING_CORE");

  useEffect(() => {
    const messages = [
      "INITIALIZING_CORE...",
      "BYPASSING_FIREWALL...",
      "ESTABLISHING_SECURE_UPLINK...",
      "DECRYPTING_ADMIN_CREDENTIALS...",
      "VERIFYING_HASH_SIGNATURES...",
      "ACCESS_GRANTED...",
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingText(messages[index]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-950 gap-8">
      <style>
        {`
          @keyframes bounce {
            0%, 100% { translate: 0px 36px; }
            50% { translate: 0px 46px; }
          }
          @keyframes bounce2 {
            0%, 100% { translate: 0px 46px; }
            50% { translate: 0px 56px; }
          }
          @keyframes umbral {
            0% { stop-color: #d3a5102e; }
            50% { stop-color: rgba(211, 165, 16, 0.519); }
            100% { stop-color: #d3a5102e; }
          }
          @keyframes particles {
            0%, 100% { translate: 0px 16px; }
            50% { translate: 0px 6px; }
          }
          @keyframes cursor {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .particles {
            animation: particles 4s ease-in-out infinite;
          }
          .animatedStop {
            animation: umbral 4s infinite;
          }
          #bounce {
            animation: bounce 4s ease-in-out infinite;
            translate: 0px 36px;
          }
          #bounce2 {
            animation: bounce2 4s ease-in-out infinite;
            translate: 0px 46px;
            animation-delay: 0.5s;
          }
          .cursor-blink {
            animation: cursor 0.8s step-end infinite;
          }
        `}
      </style>

      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
          <g style={{ order: -1 }}>
            {/* Main Diamond Shapes */}
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="1"
              stroke="#d3a410"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce"
            />
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="1"
              stroke="#d3a410"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce2"
            />
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="2"
              stroke=""
              fill="#414750"
              points="70,70 150,50 130,130 50,150"
            />
            <polygon
              strokeWidth="2"
              stroke=""
              fill="url(#gradiente)"
              points="100,70 150,100 100,130 50,100"
            />

            <defs>
              <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                <stop stopColor="#1e2026" stopOpacity="1" offset="20%" />
                <stop stopColor="#414750" stopOpacity="1" offset="60%" />
              </linearGradient>
            </defs>

            {/* Side Elements */}
            <polygon
              transform="translate(20, 31)"
              strokeWidth="2"
              stroke=""
              fill="#b7870f"
              points="80,50 80,75 80,99 40,75"
            />
            <polygon
              transform="translate(20, 31)"
              strokeWidth="2"
              stroke=""
              fill="url(#gradiente2)"
              points="40,-40 80,-40 80,99 40,75"
            />

            <defs>
              <linearGradient
                y2="100%"
                x2="0%"
                y1="-17%"
                x1="10%"
                id="gradiente2"
              >
                <stop stopColor="#d3a51000" stopOpacity="1" offset="20%" />
                <stop
                  stopColor="#d3a51054"
                  stopOpacity="1"
                  offset="100%"
                  className="animatedStop"
                />
              </linearGradient>
            </defs>

            <polygon
              transform="rotate(180 100 100) translate(20, 20)"
              strokeWidth="2"
              stroke=""
              fill="#d3a410"
              points="80,50 80,75 80,99 40,75"
            />
            <polygon
              transform="rotate(0 100 100) translate(60, 20)"
              strokeWidth="2"
              stroke=""
              fill="url(#gradiente3)"
              points="40,-40 80,-40 80,85 40,110.2"
            />

            <defs>
              <linearGradient
                y2="100%"
                x2="10%"
                y1="0%"
                x1="0%"
                id="gradiente3"
              >
                <stop stopColor="#d3a51000" stopOpacity="1" offset="20%" />
                <stop
                  stopColor="#d3a51054"
                  stopOpacity="1"
                  offset="100%"
                  className="animatedStop"
                />
              </linearGradient>
            </defs>

            {/* Particles */}
            <polygon
              transform="rotate(45 100 100) translate(80, 95)"
              strokeWidth="2"
              stroke=""
              fill="#ffe4a1"
              points="5,0 5,5 0,5 0,0"
              className="particles"
            />
            <polygon
              transform="rotate(45 100 100) translate(80, 55)"
              strokeWidth="2"
              stroke=""
              fill="#ccb069"
              points="6,0 6,6 0,6 0,0"
              className="particles"
            />
            <polygon
              transform="rotate(45 100 100) translate(70, 80)"
              strokeWidth="2"
              stroke=""
              fill="#fff"
              points="2,0 2,2 0,2 0,0"
              className="particles"
            />

            {/* Base Shadows/Stands */}
            <polygon
              strokeWidth="2"
              stroke=""
              fill="#292d34"
              points="29.5,99.8 100,142 100,172 29.5,130"
            />
            <polygon
              transform="translate(50, 92)"
              strokeWidth="2"
              stroke=""
              fill="#1f2127"
              points="50,50 120.5,8 120.5,35 50,80"
            />
          </g>
        </svg>
      </div>

      {/* Admin / Hacker Text */}
      <div className="font-mono text-center">
        <p className="text-[#d3a410] tracking-[0.2em] font-bold text-sm uppercase">
          {">"} {loadingText}
          <span className="cursor-blink">_</span>
        </p>
        <p className="text-gray-500 text-[10px] mt-2 tracking-widest font-mono">
          SYSTEM_ID: 0x4A1F // ENCRYPTED
        </p>
      </div>
    </div>
  );
};

export default LoaderPage;
