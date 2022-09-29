import styled from "styled-components";

export const StyledRow = styled.div.attrs((props) => ({
  style: {
    width: `${props.$width - 1}px`,
    height: `${props.$height * props.$heightMultiply}px`,
  },
}))`
  position: relative;
  display: flex;
  align-items: center;
`;
export const StyledBg = styled.div.attrs((props) => ({
  style: {
    background: `${props.$active ? "rgba(32, 32, 32, 0.5)" : "transparent"}`,
  },
}))`
  width: 100%;
  height: calc(100% - 10px);
  position: absolute;
  transition: 0.3s background;
  border-radius: 0px 8px 8px 0px;
  box-sizing: border-box;
`;
