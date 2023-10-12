import React from "react";
import Row from "../../row";
import Button from "../../button";
import { colours } from "../../theme-provider";

export const CreateStepsFooter: React.FC<{ onClose: any }> = ({ onClose }) => {
  return (
    <div style={{ padding: "1.5rem", background: colours.white }}>
      <Row style={{ justifyContent: "flex-end" }}>
        <Button
          onClick={onClose}
          variant="outlined"
          style={{ marginRight: "10px" }}
        >
          Back
        </Button>
        <Button>Continue</Button>
      </Row>
    </div>
  );
};
