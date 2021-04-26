import React, { useState, createRef, useEffect, useRef } from "react";

const Scroll = ({ number = false, min, max, onChange }) => {
  const [offset, setOffset] = useState(0);
  const [x, setX] = useState(-8);
  const [y, setY] = useState(-8);
  const maxHandle = createRef();
  const minHandle = createRef();
  const bar = createRef();
  const parsedValue = x + y === -16 ? "∞" : min === max ? min : `${min} - ${max}`;

  useEffect(() => {
    const offset = bar.current.getBoundingClientRect().left + window.scrollX;
    setOffset(offset);
    setX(max * 25 - 8);
    setY(min * 25 - 8);
  }, []);

  useEffect(() => {
    onChange({ max: Math.round((x + 8) / 25), min: Math.round((y + 8) / 25) });
  }, [x, y]);

  const globalMouseMove = (callback, max) => () => {
    const current = window.event.clientX - offset;
    const short = Math.min(Math.max(0, current), max);
    const x = Math.round(short / 25) * 25 - 8;
    callback(x);
  };

  const mouseDown = (callback) => () => {
    document.addEventListener("mousemove", callback);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", callback);
    });
  };

  const setMinHandle = () => mouseDown(globalMouseMove(setY, x));
  const setMaxHandle = () => mouseDown(globalMouseMove(setX, 258));

  return (
    <div className="scroll">
      <div className="scroll__bar" ref={bar} />
      <div className="scroll__bar__filled" style={{ left: y + 8, width: x - y }} />
      <div className="scroll__cursor--left" onMouseDown={setMinHandle()} style={{ left: y }} ref={minHandle} />
      <div className="scroll__cursor--right" onMouseDown={setMaxHandle()} style={{ left: x }} ref={maxHandle} />
      {number && <div className="scroll__number">{parsedValue}</div>}
    </div>
  );
};

export default Scroll;
