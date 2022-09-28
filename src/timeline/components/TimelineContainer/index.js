import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { getDatesArray } from "../../helpers";
import { StyledBodyContainer, StyledTimelineContainer } from "../../styles";
import TableHeader from "../StyledTableHeader";
import TableBody from "../TableBody";
import { resetActivelineFx } from "../TableRow/model";
import { useBodyHeight } from "./hooks";
import { changeScrollPosition, changeHorizontalScrollPosition } from "./model";

export const TimelineContainer = ({
  data,
  dateFrom,
  dateTo,
  cellWidth,
  daysInView,
  rowHeight,
  initData,
  setInitData,
  NameComponent,
}) => {
  const [inViewIndex, setInviewIndex] = useState(0);
  const array = getDatesArray(dateFrom, dateTo);
  const dates = useMemo(
    () => [...array].slice(inViewIndex, inViewIndex + daysInView),
    [inViewIndex, daysInView, array]
  );
  const scrollWidth = useMemo(
    () => (getDatesArray(dateFrom, dateTo).length - 1) * cellWidth + cellWidth,
    [dateFrom, dateTo, cellWidth]
  );
  const { bodyRef, bodyHeight } = useBodyHeight({ data });
  return (
    <StyledTimelineContainer
      id={"body-scrollable"}
      onScroll={(e) => {
        setInviewIndex(Math.floor(e.target.scrollLeft / cellWidth));
        changeHorizontalScrollPosition(e.target.scrollLeft);
      }}
    >
      {data.length > 0 && (
        <TableHeader
          inViewIndex={inViewIndex}
          cellWidth={cellWidth}
          dates={dates}
          bodyHeight={bodyHeight}
        />
      )}
      <StyledBodyContainer
        onMouseLeave={resetActivelineFx}
        onScroll={(e) => {
          changeScrollPosition(e.target.scrollTop);
        }}
        $width={scrollWidth}
        ref={bodyRef}
      >
        <TableBody
          rowHeight={rowHeight}
          data={data}
          array={array}
          cellWidth={cellWidth}
          initData={initData}
          setInitData={setInitData}
          NameComponent={NameComponent}
          width={scrollWidth}
        />
      </StyledBodyContainer>
    </StyledTimelineContainer>
  );
};

TimelineContainer.propTypes = {
  cellWidth: PropTypes.number,
  data: PropTypes.array,
  dateFrom: PropTypes.instanceOf(Date),
  dateTo: PropTypes.instanceOf(Date),
  daysInView: PropTypes.number,
  rowHeight: PropTypes.number,
  initData: PropTypes.array,
  setInitData: PropTypes.func,
  setHeaderScroll: PropTypes.func,
};
