import styled from "styled-components";

export const StyledTimelineContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll clip;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #404044;
    border-radius: 8px;
  }
`;
export const StyledTableContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #404044;
  border-radius: 16px;
`;

export const StyledBodyContainer = styled.div`
  width: ${(props) => `${props.$width}px`};
  height: calc(100% - 60px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 0px;
  border-top: 1px solid #353539;
  padding-top: 12px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
