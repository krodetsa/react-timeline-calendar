import { useStore } from "effector-react";
import { data, daysInView, rowHeight } from "./helpers";
import TimelineComponent from "./timeline/index.js";
import { $timelineState } from "./timeline/model";
import { Fragment } from "react";

function App() {
  const { dateFrom, dateTo, cellWidth } = useStore($timelineState);
  return (
    <Fragment>
      <TimelineComponent
        dateFrom={dateFrom}
        dateTo={dateTo}
        cellWidth={cellWidth}
        daysInView={daysInView}
        rowHeight={rowHeight}
        data={data}
      />
    </Fragment>
  );
}

export default App;
