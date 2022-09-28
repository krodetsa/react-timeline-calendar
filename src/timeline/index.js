import React from "react";
import { StyledTableContainer } from "./styles";
import { NamesColumn } from "./components/NamesColumn";

import { useDataWithRowsHeight } from "./helpers";
import { TimelineContainer } from "./components/TimelineContainer";
import WorkerItem from "./components/WorkerItem";

const TimelineComponent = ({
  dateFrom,
  dateTo,
  cellWidth,
  daysInView,
  rowHeight,
  data,
}) => {
  const { initData, setInitData, dataWithHeight } = useDataWithRowsHeight(data);
  return (
    <StyledTableContainer>
      <NamesColumn
        data={dataWithHeight}
        rowHeight={rowHeight}
        NameComponent={WorkerItem}
      />
      <TimelineContainer
        data={dataWithHeight}
        dateFrom={dateFrom}
        dateTo={dateTo}
        cellWidth={cellWidth}
        daysInView={daysInView}
        rowHeight={rowHeight}
        initData={initData}
        setInitData={setInitData}
        NameComponent={WorkerItem}
      />
    </StyledTableContainer>
  );
};

export default TimelineComponent;
