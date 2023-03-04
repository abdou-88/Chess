import React from "react";
import { Button } from "react-bootstrap";

interface StatusPanelProps {
  onUndo: () => void;
  onRestart: () => void;
}

const panelStyle: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  padding: "10px"
};



export const Controls: React.FunctionComponent<StatusPanelProps> = (props) => {
  return (
    <div style={panelStyle}>
      <Button variant="dark" onClick={props.onUndo}>Undo</Button>

      <Button variant="dark" onClick={props.onRestart}>
        Restart
      </Button>
    </div>
  );
};
