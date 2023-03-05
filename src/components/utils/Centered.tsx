import React from "react";

const centeredStyle: React.CSSProperties = {
  margin: "auto",
  position: "relative",
  top: "50%",
  left: "50%",
  msTransform: "translate(-50%, -50%)",
  transform: "translate(-50%, -50%)",
}

interface CenteredProps  {
  children: React.ReactNode; 
};
export const Centered: React.FC<CenteredProps> = (props: CenteredProps) => {
  return <div style={centeredStyle}>{props.children}</div>;
};
