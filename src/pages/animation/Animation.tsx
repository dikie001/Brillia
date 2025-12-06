
const Animation = () => {
  return (
    <div className="left-1/2 -translate-x-1/2 absolute top-44 z-50  flex items-center justify-center">
      <style>
        {`
          .loader {
            --fill-color: #5c3d99;
            --shine-color: #5c3d9933;
            transform: scale(0.5);
            width: 100px;
            height: auto;
            position: relative;
            filter: drop-shadow(0 0 10px var(--shine-color));
          }

          .loader #pegtopone {
            position: absolute;
            animation: flowe-one 1s linear infinite;
          }

          .loader #pegtoptwo {
            position: absolute;
            opacity: 0;
            transform: scale(0) translateY(-200px) translateX(-100px);
            animation: flowe-two 1s linear infinite;
            animation-delay: 0.3s;
          }

          .loader #pegtopthree {
            position: absolute;
            opacity: 0;
            transform: scale(0) translateY(-200px) translateX(100px);
            animation: flowe-three 1s linear infinite;
            animation-delay: 0.6s;
          }

          /* Default fill for the first path in the groups */
          .loader svg g path:first-child {
            fill: var(--fill-color);
          }

          @keyframes flowe-one {
            0% {
              transform: scale(0.5) translateY(-200px);
              opacity: 0;
            }
            25% {
              transform: scale(0.75) translateY(-100px);
              opacity: 1;
            }
            50% {
              transform: scale(1) translateY(0px);
              opacity: 1;
            }
            75% {
              transform: scale(0.5) translateY(50px);
              opacity: 1;
            }
            100% {
              transform: scale(0) translateY(100px);
              opacity: 0;
            }
          }

          @keyframes flowe-two {
            0% {
              transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
              opacity: 0;
            }
            25% {
              transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
              opacity: 1;
            }
            50% {
              transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
              opacity: 1;
            }
            75% {
              transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
              opacity: 1;
            }
            100% {
              transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
              opacity: 0;
            }
          }

          @keyframes flowe-three {
            0% {
              transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
              opacity: 0;
            }
            25% {
              transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
              opacity: 1;
            }
            50% {
              transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
              opacity: 1;
            }
            75% {
              transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
              opacity: 1;
            }
            100% {
              transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
              opacity: 0;
            }
          }
        `}
      </style>

      <div className="loader">
        {/* SVG 1 */}
        <svg
          id="pegtopone"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shine1">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask1">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1-1"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2-1"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3-1"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              xlinkHref="#gradient-2-1"
            ></radialGradient>
            <radialGradient
              id="gradient-4-1"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              xlinkHref="#gradient-3-1"
            ></radialGradient>
            <linearGradient
              id="gradient-5-1"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
              <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1-1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              strokeWidth="3"
              filter="url(#shine1)"
              mask="url(#mask1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2-1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3-1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4-1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5-1)"
            ></path>
          </g>
        </svg>

        {/* SVG 2 */}
        <svg
          id="pegtoptwo"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shine2">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask2">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1-2"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2-2"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3-2"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              xlinkHref="#gradient-2-2"
            ></radialGradient>
            <radialGradient
              id="gradient-4-2"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              xlinkHref="#gradient-3-2"
            ></radialGradient>
            <linearGradient
              id="gradient-5-2"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
              <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              strokeWidth="3"
              filter="url(#shine2)"
              mask="url(#mask2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5-2)"
            ></path>
          </g>
        </svg>

        {/* SVG 3 */}
        <svg
          id="pegtopthree"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shine3">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask3">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1-3"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2-3"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3-3"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              xlinkHref="#gradient-2-3"
            ></radialGradient>
            <radialGradient
              id="gradient-4-3"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              xlinkHref="#gradient-3-3"
            ></radialGradient>
            <linearGradient
              id="gradient-5-3"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
              <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              strokeWidth="3"
              filter="url(#shine3)"
              mask="url(#mask3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5-3)"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Animation;