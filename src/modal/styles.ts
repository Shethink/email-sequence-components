import { Modal } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { colours } from "../theme-provider";

const PREFIX = "Modal";

export const modalClasses = {
  root: `${PREFIX}-root`,
  center: `${PREFIX}-center`,
  restricted: `${PREFIX}-restricted`,
};

export const StyledModal = styled(Modal)(() => ({
  [`&.${modalClasses.center}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const ModalContainer = styled("div")(() => ({
  minWidth: "40vw",
  maxWidth: "60vw",
  background: alpha(colours.white, 1),
  borderRadius: 6,
  padding: "1rem 2rem",
  outline: "none",
}));
