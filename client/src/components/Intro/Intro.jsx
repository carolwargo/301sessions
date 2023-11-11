import React from "react";

export default function Intro() {
  return (
    <div className="p-3 border-bottom d-flex flex-column align-items-center" id="intro">
      <h1
        style={{
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
          color: "red",
          textAlign: "center",
        }}
      >
        WELCOME TO 301CATCHING.COM
      </h1>
      <p className="text-center p-2">
        Your premier destination for all things Catching, designed to elevate
        your training to an elite level. Here, we empower our Catchers to build
        a solid foundation that propels you towards excellence. Whether you're a
        seasoned athlete or just beginning, discover the expertise needed to
        reach new heights and redefine what it means to excel in the world of
        Catching.
      </p>
      <br />
    </div>
  );
}
