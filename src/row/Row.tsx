import React from "react";
import { CSSProperties } from "@mui/styles";

const Row = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", ...style }}>
      {children}
    </div>
  );
};

export default Row;
