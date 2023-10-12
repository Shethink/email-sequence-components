import React from "react";
import classNames from "classnames";
import { ModalProps as MaterialModalProps } from "@mui/material";
import { ModalContainer, StyledModal, modalClasses } from "./styles";

export interface ModalProps extends MaterialModalProps {
  children: React.ReactElement;
  centered?: boolean;
  hasPadding?: boolean;
  hasDarkBackground?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  centered,
  hasPadding = true,
  hasDarkBackground = false,
}) => {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
      classes={{
        root: classNames(centered && modalClasses.center),
      }}
    >
      <ModalContainer
        className={classNames(
          hasPadding && modalClasses.padded,
          hasDarkBackground && modalClasses.dark
        )}
      >
        {children}
      </ModalContainer>
    </StyledModal>
  );
};

export default Modal;
