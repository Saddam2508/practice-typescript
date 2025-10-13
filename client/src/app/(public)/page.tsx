import { KeyboardEvents } from "@/views/public/keyboard/KeyboardEvents";
import { MouseEvents } from "@/views/public/mouse/MouseEvents";
import React, { FC } from "react";

const page: FC = () => {
  return (
    <div className="flex items-center, justify-center">
      <MouseEvents />
      <KeyboardEvents />
    </div>
  );
};

export default page;
