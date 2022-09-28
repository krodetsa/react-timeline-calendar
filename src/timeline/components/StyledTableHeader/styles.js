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
      props.$active ? "#ffffff" : props.$is_weekend ? "#CD9DFF" : "#babace"
    }`,
  },
}))``;
export const StyledHeaderSpan = styled.span.attrs((props) => ({
  style: {
    color: `${
      props.$active ? "#ffffff" : props.$is_weekend ? "#CD9DFF" : "#56565f"
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
          #838398 1px,
          rgba(255, 255, 255, 0) 0%
        );
        background-position: left;
        background-size: 1px 20px;
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
          #2d2d34 1px,
          #2d2d34 2px,
          transparent 2px,
          transparent 14px
        );
        border-right: 1px solid #2d2d34;
        border-left: 1px solid #2d2d34;
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
  width: 7px;
  height: 7px;
  top: 100%;
  border-radius: 50%;
  background: #babace;
  &&::before {
    transition: 0.3s;
    content: "";
    display: block;
    height: ${(props) => `${props.$body_height - 10}px`};
    background: transparent;
    width: 1px;
    background: #616174;
    right: calc(100% - 4px);
    top: 105%;
    position: absolute;
    z-index: 10;
  }
`;
