import { format, isMonday, isSameDay, isSunday, isWeekend } from "date-fns";
import { useStore } from "effector-react";
import React from "react";
import { $activeCell } from "./model";
import {
  StyledEmptyCell,
  StyledHeaderCell,
  StyledHeaderP,
  StyledHeaderSpan,
  StyledToday,
  StyledWrapper,
} from "./styles";

const today = new Date();

const TableHeader = ({ inViewIndex, cellWidth, dates, bodyHeight }) => {
  const activeCell = useStore($activeCell);
  return (
    <StyledWrapper>
      <StyledEmptyCell $wdth={inViewIndex * cellWidth} />
      {dates.map((el, i) => (
        <StyledHeaderCell
          className={"header-cell"}
          $body_height={bodyHeight}
          $width={cellWidth}
          $pos={i * cellWidth}
          key={format(el, "dd/MM")}
          $is_saturday={isSunday(new Date(el))}
          $is_weekend={isWeekend(new Date(el))}
          $is_monday={isMonday(new Date(el))}
          $is_today={isSameDay(new Date(el), today)}
        >
          {isSameDay(new Date(el), today) && (
            <StyledToday $body_height={bodyHeight} />
          )}
          <StyledHeaderP
            $active={isSameDay(new Date(activeCell), new Date(el))}
            $is_weekend={isWeekend(new Date(el))}
          >
            {format(el, "dd")}
          </StyledHeaderP>
          <StyledHeaderSpan
            $active={isSameDay(new Date(activeCell), new Date(el))}
            $is_weekend={isWeekend(new Date(el))}
          >
            {format(el, "MMM")}
          </StyledHeaderSpan>
        </StyledHeaderCell>
      ))}
    </StyledWrapper>
  );
};

export default React.memo(TableHeader);
