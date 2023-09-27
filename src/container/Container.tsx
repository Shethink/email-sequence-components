import { Container as MUIContainer, ContainerProps } from "@mui/material";
import classnames from "classnames";
import React from "react";
import { classes, Root } from "./styles";

export type Props = ContainerProps & {
  wrapperClassName?: string;
  fullWidth?: boolean;
};

const Container = ({
  className,
  maxWidth = "xl",
  wrapperClassName,
  fullWidth,
  ...props
}: Props) => {
  return (
    <Root
      className={classnames(fullWidth && classes.fullWidth, wrapperClassName)}
    >
      <MUIContainer maxWidth={maxWidth} className={className} {...props} />
    </Root>
  );
};

export default Container;
