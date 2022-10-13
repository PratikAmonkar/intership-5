import React from "react";

const InfoDisplay = ({ title, value, unit }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
        >
          {title}:
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
        >
          {value} {unit}
        </p>
      </div>
    </>
  );
};

export default InfoDisplay;
