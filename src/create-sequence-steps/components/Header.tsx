import React, { memo } from "react";
import { StepsHeader, Title } from "../styles";
import Button from "../../button";
import { Close } from "../../icon";
import { headerTitle } from "../constants";

export const Header: React.FC<{ onClose: any }> = memo(({ onClose }) => {
  return (
    <StepsHeader style={{ justifyContent: "space-between" }}>
      <Title variant="h6">{headerTitle}</Title>
      <Button variant="text" onClick={onClose}>
        <Close fontSize={"small"} />
      </Button>
    </StepsHeader>
  );
});
