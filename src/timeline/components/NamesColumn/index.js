import PropTypes from "prop-types";
import React from "react";
import { resetActivelineFx } from "../TableRow/model";
import {
  StyledSidebar,
  StyledSidebarRow,
  StyledHeaderContainer,
  StyledBodyContainer,
  StyledGap,
  StyledLine,
} from "./styles";

export const NamesColumn = ({ data, rowHeight, NameComponent }) => {
  return (
    <StyledSidebar onMouseLeave={resetActivelineFx}>
      <StyledHeaderContainer>
        <p>Team</p>
        <StyledLine />
      </StyledHeaderContainer>
      <StyledBodyContainer id={"names-scrollable"}>
        {data?.map((el, i) => (
          <StyledSidebarRow
            $heightMultiply={el.heightMultiply}
            $height={rowHeight}
            key={i}
          >
            <NameComponent name={el.name} elIndex={i} />
          </StyledSidebarRow>
        ))}
        <StyledGap />
      </StyledBodyContainer>
    </StyledSidebar>
  );
};

NamesColumn.propTypes = {
  data: PropTypes.array,
  rowHeight: PropTypes.number,
  NameComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
