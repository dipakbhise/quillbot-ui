import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const Badges = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 75) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            fontWeight: "400",
            fontSize: "26px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          <span> Write better, faster, and clearer instantly</span>
        </div>

        <div style={{ width: "100%", textAlign: "center" }}>
          <p style={{ maxWidth: "470px", margin: "0px auto 58px" }}>
            {" "}
            QuillBot is trusted by students, professional writers, and business
            people who want to write more effectively.
          </p>
        </div>
      </div>

      {/* <div className="container">
        <div className="progress">
          <span
            className="title timer"
            data-from="0"
            data-to="85"
            data-speed="1800"
          >
            85
          </span>
          <div className="overlay"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="left"></div>
        </div>
        <div className="progress">
          <span
            className="title timer"
            data-from="0"
            data-to="70"
            data-speed="1500"
          >
            70
          </span>
          <div className="overlay"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <div className="progress">
          <span
            className="title timer"
            data-from="0"
            data-to="70"
            data-speed="1500"
          >
            70
          </span>
          <div className="overlay"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <div className="progress">
          <span
            className="title timer"
            data-from="0"
            data-to="85"
            data-speed="1800"
          >
            85
          </span>
          <div className="overlay"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div> */}

      <div className="app">
        <div style={{ width: 150, marginLeft: 70, position: "relative" }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            style={{ position: "relative", color: "red" }}
          />
          <span style={{ position: "absolute", top: "57%", left: "21%" }}>
            Time Saved
          </span>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          //  background-color: white;
          //   height: 100vh;
          align-items: center;
        }

        .progress {
          width: 200px;
          height: 200px;
          font-size: 30px;
          color: black;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          //   background: #07070c;
          text-align: center;
          line-height: 200px;
          margin: 20px;
        }

        .progress::after {
          content: "%";
        }

        .progress .title {
          position: relative;
          z-index: 100;
        }

        .progress .overlay {
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background-color: white;
        }

        .progress .left,
        .progress .right {
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          border: 10px solid #499557;
          border-radius: 100px 0px 0px 100px;
          border-right: 0;
          transform-origin: right;
        }

        .progress .left {
          animation: load1 1s linear forwards;
        }

        .progress:nth-of-type(2) .right,
        .progress:nth-of-type(3) .right {
          animation: load2 0.5s linear forwards 1s;
        }

        .progress:last-of-type .right,
        .progress:first-of-type .right {
          animation: load3 0.8s linear forwards 1s;
        }

        @keyframes load1 {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(180deg);
          }
        }

        @keyframes load2 {
          0% {
            z-index: 100;
            transform: rotate(180deg);
          }

          100% {
            z-index: 100;
            transform: rotate(270deg);
          }
        }

        @keyframes load3 {
          0% {
            z-index: 100;
            transform: rotate(180deg);
          }

          100% {
            z-index: 100;
            transform: rotate(315deg);
          }
        }

        .CircularProgressbar .CircularProgressbar-path {
          stroke: red !important;
        }
      `}</style>
    </>
  );
};

export default Badges;
