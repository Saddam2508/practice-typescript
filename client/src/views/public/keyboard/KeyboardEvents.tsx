"use client";

import React, { FC, useState, useRef, KeyboardEvent } from "react";

export const KeyboardEvents: FC = () => {
  const [key, setKey] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {};
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    //  if (key === "Backspace") {
    //   window.alert("do not save please");
    // } else {
    //   setKey(key);
    // }
    switch (key) {
      case "Backspace":
        setKey((prev) => prev.slice(0, -1));
        break;

      default:
        setKey((prev) => [...(prev + key)]);
        break;
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="Type something..."
        className="border"
      />
      <p>Press Keys: {key.join("")}</p>
    </div>
  );
};
