import React from "react";

export default function SakuraEffect() {
  return (
    <>
      {Array.from({ length: 21 }).map((_, i) => (
        <span className="sakura-item" key={i} style={{ left: `${i * 5}%` }} />
      ))}

      <style jsx>{`
        .sakura-item {
          position: fixed;
          width: 5px;
          height: 5px;
          top: -10%;
          border-radius: 200px 10px 200px 200px;
          background: linear-gradient(to bottom, #faaca8, #ddd6f3);
          z-index: 1;
          transform: skewX(30deg);
          backface-visibility: visible;
          -webkit-animation: fallingSakura1 8s ease infinite;
        }

        .sakura-item:nth-of-type(3n + 2) {
          -webkit-animation: fallingSakura2 8s ease infinite;
        }

        .sakura-item:nth-of-type(3n + 1) {
          -webkit-animation: fallingSakura3 8s ease infinite;
        }

        .sakura-item:nth-of-type(n) {
          -webkit-animation-delay: -1.9s;
        }
        .sakura-item:nth-of-type(2n) {
          -webkit-animation-delay: 3.9s;
        }
        .sakura-item:nth-of-type(3n) {
          -webkit-animation-delay: 2.3s;
        }
        .sakura-item:nth-of-type(4n) {
          -webkit-animation-delay: 4.4s;
        }
        .sakura-item:nth-of-type(5n) {
          -webkit-animation-delay: 5s;
        }
        .sakura-item:nth-of-type(6n) {
          -webkit-animation-delay: 3.5s;
        }
        .sakura-item:nth-of-type(7n) {
          -webkit-animation-delay: 2.8s;
        }
        .sakura-item:nth-of-type(8n) {
          -webkit-animation-delay: 1.5s;
        }
        .sakura-item:nth-of-type(9n) {
          -webkit-animation-delay: 3.3s;
        }
        .sakura-item:nth-of-type(10n) {
          -webkit-animation-delay: 2.5s;
        }
        .sakura-item:nth-of-type(11n) {
          -webkit-animation-delay: 1.2s;
        }
        .sakura-item:nth-of-type(12n) {
          -webkit-animation-delay: 4.1s;
        }
        .sakura-item:nth-of-type(13n) {
          -webkit-animation-delay: 5.8s;
        }
        .sakura-item:nth-of-type(14n) {
          -webkit-animation-delay: -0.1s;
        }
        .sakura-item:nth-of-type(15n) {
          -webkit-animation-delay: 6.3s;
        }
        .sakura-item:nth-of-type(16n) {
          -webkit-animation-delay: -1s;
        }
        .sakura-item:nth-of-type(17n) {
          -webkit-animation-delay: 7.4s;
        }
        .sakura-item:nth-of-type(18n) {
          -webkit-animation-delay: -0.3s;
        }
        .sakura-item:nth-of-type(19n) {
          -webkit-animation-delay: 8.3s;
        }
        .sakura-item:nth-of-type(20n) {
          -webkit-animation-delay: -0.6s;
        }
        .sakura-item:nth-of-type(21n) {
          -webkit-animation-delay: 7.7s;
        }

        .sakura-item:nth-of-type(2n + 2) {
          background: linear-gradient(to right, #fffbd5, #f15f79);
        }

        .sakura-item:nth-of-type(3n + 1) {
          background: linear-gradient(to right, #dd5e89, #f7bb97);
        }

        .sakura-item:nth-of-type(3n + 2) {
          border-radius: 20px 1px;
        }
        .sakura-item:nth-of-type(3n + 3) {
          transform: rotateX(-180deg);
        }

        .sakura-item:nth-of-type(3n + 2) {
          animation-duration: 12sec;
        }

        .sakura-item:nth-of-type(4n + 2) {
          animation-duration: 9sec;
        }

        .sakura-item:nth-of-type(5n + 2) {
          width: 12px;
          height: 12px;
          box-shadow: 1.5px 1.5px 8px #fc7bd1;
        }

        .sakura-item:nth-of-type(4n + 3) {
          width: 10px;
          height: 10px;
          box-shadow: 1px 1px 6px #fc7bd1;
        }
        .sakura-item:nth-of-type(n) {
          height: 23px;
          width: 30px;
        }

        .sakura-item:nth-of-type(2n + 1) {
          height: 11px;
          width: 16px;
        }

        .sakura-item:nth-of-type(3n + 2) {
          height: 17px;
          width: 23px;
        }

        @-webkit-keyframes fallingSakura1 {
          0% {
            -webkit-transform: translate3d(0, 0, 0) rotateX(0deg);
            opacity: 1;
          }

          100% {
            -webkit-transform: translate3d(400px, 1200px, 0px) rotateX(-290deg);
            opacity: 0.3;
          }
        }

        @-webkit-keyframes fallingSakura2 {
          0% {
            -webkit-transform: translate3d(0, 0, 0) rotateX(-20deg);
            opacity: 1;
          }

          100% {
            -webkit-transform: translate3d(200px, 1200px, 0px) rotateX(-70deg);
            opacity: 0.2;
          }
        }

        @-webkit-keyframes fallingSakura3 {
          0% {
            -webkit-transform: translate3d(0, 0, 0) rotateX(90deg);
            opacity: 1;
          }

          100% {
            -webkit-transform: translate3d(500px, 1200px, 0px) rotateX(290deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
