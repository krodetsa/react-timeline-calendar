import { IconButton } from "@mui/material";
import styled, { css } from "styled-components";
import { ReactComponent as PenIcon } from "../../../assets/icons/pen.svg";

export const StyledPenIcon = styled(PenIcon)`
  & svg {
    width: 13.33px;
    height: 13.33px;
  }
`;
export const StyledIconButton = styled(IconButton)`
  &&.MuiButtonBase-root {
    z-index: 11;
    margin: 0px;
    width: 13px;
    height: 13px;
    opacity: 0;
    transition: 0.3s;
    box-sizing: content-box;
  }
  && span {
    padding: 0px;
  }
`;

export const StyledWorkerItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  box-sizing: content-box;
  min-height: 48px;
  min-width: 320px;
  height: 100%;
  padding-left: 16px;
  border-radius: 8px;
  padding-right: 30px;
  position: relative;
  ${(props) =>
    props.$active &&
    css`
      & .MuiButtonBase-root svg path {
        fill: #ffffff !important;
        opacity: 1;
      }
      && .MuiButtonBase-root {
        opacity: 1;
      }
      &&::before {
        opacity: 1;
      }
    `}
  & > div p {
    font-weight: 400;
    font-size: 12px;
    color: #f5f5f5;
    padding: 0px;
    width: auto;
    min-width: 0px;
  }
  & > div svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  & span {
    font-size: 12px;
    line-height: 20px;
    color: #f5f5f5;
    text-transform: capitalize;
    margin: 0px;
  }

  &:hover .MuiButtonBase-root {
    opacity: 1;
  }
  && .MuiButtonBase-root:last-child {
    margin-right: 0px;
    margin-left: 3.3px;
  }
  & li::before {
    content: "";
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    border: 1px solid #f5f5f5;
    margin-right: 12px;
    border-radius: 50%;
    top: -0.5px;
  }
  & div {
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  &::before {
    transition: 0.3s;
    opacity: 0;
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${(props) => props.$border};
    content: "";
    top: 0;
    left: 0px;
    border-radius: 8px;
    background: rgba(32, 32, 32, 0.7);
  }
`;

export const StyledContainer = styled.div`
  z-index: 11;
  & svg path {
    transition: 0.3s;
  }
  ${(props) =>
    props.$active &&
    css`
      & svg path {
        stroke: #ffffff;
      }
    `}
`;
