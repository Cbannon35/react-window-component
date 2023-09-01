import React, { useState } from "react";
import { Rnd } from "react-rnd"; // https://www.npmjs.com/package/react-rnd

/* A default SVG to be used as an X to close out a window */
// import "./Xsvg.css";
const Xsvg = ({ w, h }) => {
  const [isXShape, setIsXShape] = useState(true);

  const toggleShape = () => {
    setIsXShape(!isXShape);
  };
  return (
    <div style={{ width: w, height: h }} onClick={toggleShape}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g className={`lines ${isXShape ? "pos-0" : "pos-1"}`}>
          <line className="line" x1="20" y1="20" x2="80" y2="80" />
          <line className="line" x1="80" y1="20" x2="20" y2="80" />
        </g>
      </svg>
    </div>
  );
};

// import "./Window.css";
const Window = (
  maxw,
  minw,
  maxh,
  minh,
  startx,
  starty,
  initialWidth,
  initialHeight,
  lockAspectRatio,
  title,
  bgcolor,
  display
) => {
  const [minimized, setMinimized] = useState(false);
  return (
    <Rnd
      default={{
        x: startx ? startx : 0,
        y: starty ? starty : 0,
        width: initialWidth ? initialWidth : 320,
        height: initialHeight ? initialHeight : 240,
      }}
      minWidth={minw ? minw : 0}
      minHeight={minh ? minh : 0}
      maxWidth={maxw ? maxw : 10000}
      maxHeight={maxh ? maxh : 10000}
      lockAspectRatio={lockAspectRatio}
      lockAspectRatioExtraHeight={24}
      dragHandleClassName="title"
    >
      <div className="w-full h-full" style={{ backgroundColor: bgcolor }}>
        <div className="menu-bar">
          <strong className="h-full w-full title">{title}</strong>
          <span
            className="self-center cursor-pointer"
            onClick={() => setMinimized(!minimized)}
          >
            <Xsvg />
          </span>
        </div>
        {/* <div className={`h-full ${minimized ? "hidden" : ""}`}>{display()}</div> */}
      </div>
    </Rnd>
  );
  // return <Xsvg width={20} height={20} />;
};

export default Window;
