import styled, { css } from "styled-components";

export const StyledWrapper = styled.span.attrs((props) => {
  let top = 10;
  if (props.$top !== 1) {
    top = 10 + 60 * props.$top - 60;
  }
  return {
    style: {
      top,
      left: `${props.$from + 4}px`,
      width: `${props.$width + props.$min_width - 16}px`,
      opacity: `${props.$is_dragged ? 0.7 : 1}`,
    },
  };
})`
  background: #2c2c32;
  border: 1px solid #353539;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 8px 13px;
  height: 40px;
  z-index: 10;
  box-sizing: border-box;
  position: absolute;
  transition: 0.3s;
  padding: 0px 12px;
  cursor: pointer;
  & svg {
    margin-left: 5px;
    min-width: 20px;
    min-height: 20px;
  }
  & path {
    fill: #ffffff;
  }
  ${(props) =>
    !props.$is_dragged &&
    css`
      &:hover {
        &:before {
          opacity: 1;
        }
      }
    `}

  &:hover .handle {
    transform: scale(1, 1);
  }
  &:hover .handle-faked {
    transform: scale(-1, 1);
  }

  .handle,
  .handle-faked {
    transition: 0s;
  }
  .task-icon {
    z-index: 11;
  }
`;
export const StyledTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 11;
  padding-right: 24px;
  & strong {
    color: #ffffff;
    font-weight: 400;
    opacity: 0.7;
    margin-left: 8px;
    font-size: 12px;
  }
  & p {
    margin: 0px;
    margin-right: auto;
    padding: 0px 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #ffffff;
  }
`;
export const StyledDragHandle = styled.div.attrs((props) => {
  let top = 21;
  if (props.$top !== 1 && props.$top !== undefined) {
    top = 21 + 60 * props.$top - 60;
  }
  if (props.$top === undefined) {
    top = "unset";
  }
  return {
    style: {
      top,
    },
  };
})`
  background-color: #f3f3f3;
  border-radius: 8px;
  width: 3px;
  height: 18px;
  position: absolute;
  left: ${(props) => (props.$is_left ? "unset" : "1px")};
  right: ${(props) => (props.$is_left ? "-3px" : "unset")};
  cursor: ew-resize;
  transition: 0.3s;
  z-index: 12;
  box-sizing: border-box;
  padding: 2px;
  ${(props) =>
    props.$is_left &&
    css`
      transform: scale(-1, 1);
    `}
  ${(props) =>
    !props.$is_left &&
    css`
      opacity: 0;
      background: transparent;
      transition: 0;
    `}
`;
export const StyledDragHandleFaked = styled.div`
  width: 4px;
  height: 18px;
  background-color: #f3f3f3;
  border-radius: 8px;
  position: absolute;
  left: -3px;
  transition: 0.3s;
`;
export const StyledInfo = styled.div`
  position: relative;
  min-width: 323px;
  min-height: 76px;
  background: #2c2c32;
  border-radius: 8px;
  top: 170%;
  left: 0px;
  z-index: 12;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  && p {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin: 0px;
  }
  & p:nth-child(2) {
    margin-top: 4px;
    color: #fff;
    & span {
      background: #fff;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin: 0px 8px;
    }
    & strong {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #ff7500;
    }
  }
  & svg {
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
    & path {
      transition: 0.3s;
    }
    &:hover path {
      fill: #ffffff;
    }
  }
`;
