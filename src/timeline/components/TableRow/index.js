import { useStore } from "effector-react";
import React from "react";
import { getSourceDateIndex } from "../../helpers";

import Event from "../Event";
import { $activeRow, changeActivelineFx } from "./model";
import { StyledBg, StyledRow } from "./styles";

const TableRow = ({
  eventsData,
  array,
  cellWidth,
  rowHeight,
  heightMultiply,
  initData,
  setInitData,
  width,
  elIndex,
}) => {
  const activeRow = useStore($activeRow);
  return (
    <StyledRow
      className={"events-row"}
      $heightMultiply={heightMultiply}
      $height={rowHeight}
      $width={width}
      onMouseOver={() => changeActivelineFx(elIndex)}
    >
      <StyledBg $active={elIndex === activeRow} />
      {eventsData.events.map((el, i) => {
        return (
          <Event
            key={i}
            data={el}
            from={getSourceDateIndex(array, el.from)}
            to={getSourceDateIndex(array, el.to)}
            cellWidth={cellWidth}
            rowHeight={rowHeight}
            datesArray={array}
            initData={initData}
            setInitData={setInitData}
            eventsData={eventsData}
          />
        );
      })}
    </StyledRow>
  );
};

export default React.memo(TableRow);
