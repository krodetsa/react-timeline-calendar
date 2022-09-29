import styled from "styled-components";

export const StyledSidebar = styled.div`
  height: auto;
  width: auto;
  & span {
    height: 27px;
    width: 100%;
    font-size: 10px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
export const StyledGap = styled.div`
  height: 50px;
  width: 100%;
  background: transparent;
  min-height: 50px;
`;
export const StyledSidebarRow = styled.div`
  height: ${(props) => `${props.$height * props.$heightMultiply}px`};
  display: flex;
  align-items: flex-end;
  margin: 0px;
  flex-shrink: 0;
  & p {
    white-space: nowrap;
    margin: 0px;
    padding-left: 8px;
    padding-right: 8px;
    min-width: 85px;
  }
`;
export const StyledHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1px;
  align-items: flex-end;
  height: 52px;
  & p {
    margin: 0px;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: -7px;
    padding-left: 16px;
  }
`;
export const StyledLine = styled.div`
  width: 100%;
  margin-left: 8px;
  border-bottom: 1px solid #353539;
`;

export const StyledBodyContainer = styled.div`
  width: 100%;
  height: calc(100% - 26px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-top: 12px;
  box-shadow: 2px 12px 13px 0px rgb(0 0 0 / 34%);
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
