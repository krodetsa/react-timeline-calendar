import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  height: 26px;
  height: 50px;
  margin-bottom: 2px;
`;
export const StyledHeaderP = styled.p.attrs((props) => ({
  style: {
    color: `${
      props.$active ? "#ff7500" : props.$is_weekend ? "purple" : "#000000"
    }`,
  },
}))``;
export const StyledHeaderSpan = styled.span.attrs((props) => ({
  style: {
    color: `${
      props.$active ? "#ff7500" : props.$is_weekend ? "purple" : "#56565f"
    }`,
  },
}))``;
export const StyledHeaderCell = styled.div.attrs((props) => ({
  style: {
    color: `${props.$active ? "#ffffff" : "#56565f"}`,
  },
}))`
  background: var(--color-background);
  padding: 12px 0px;
  z-index: 13;
  box-sizing: content-box;
  width: ${(props) => `${props.$width}px`};
  min-width: ${(props) => `${props.$width}px`};
  max-width: ${(props) => `${props.$width}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  & p,
  & span {
    margin: 0px;
    line-height: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
  }
  ${(props) =>
    !props.$is_weekend &&
    !props.$is_monday &&
    css`
      &.header-cell::after {
        transition: 0.3s;
        content: "";
        display: block;
        height: ${(props) => `${props.$body_height - 10}px`};
        background: transparent;
        width: ${(props) => `${props.$width}px`};
        background-image: linear-gradient(
          to bottom,
          #56565f 2px,
          rgba(255, 255, 255, 0) 0%
        );
        background-position: left;
        background-size: 2px 20px;
        background-repeat: repeat-y;
        right: -1px;
        top: 105%;
        position: absolute;
        z-index: 10;
      }
    `}
  ${(props) =>
    props.$is_weekend &&
    props.$is_saturday &&
    css`
      &.header-cell::after {
        transition: 0.3s;
        content: "";
        display: block;
        height: ${(props) => `${props.$body_height}px`};
        background: transparent;
        width: ${(props) => `${props.$width * 2}px`};
        background: repeating-linear-gradient(
          -45deg,
          #56565f 1px,
          #56565f 1px,
          transparent 2px,
          transparent 14px
        );
        border-right: 1px solid #56565f;
        border-left: 1px solid #56565f;
        right: -1px;
        top: 105%;
        position: absolute;
        z-index: 10;
      }
    `}
`;
export const StyledEmptyCell = styled.div.attrs((props) => ({
  style: {
    minWidth: `${props.$wdth}px`,
  },
}))``;

export const StyledToday = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 90%;
  border-radius: 50%;
  background: #ff7500;
  &&::before {
    transition: 0.3s;
    content: "";
    display: block;
    height: ${(props) => `${props.$body_height - 10}px`};
    background: transparent;
    width: 1px;
    background: #ff7500;
    right: calc(100% - 8px);
    top: 105%;
    position: absolute;
    z-index: 10;
  }
`;
