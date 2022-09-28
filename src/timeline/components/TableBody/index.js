import React from "react";
import TableRow from "../TableRow";

const TableBody = ({
  data,
  array,
  cellWidth,
  rowHeight,
  initData,
  setInitData,
  NameComponent,
  width,
}) => {
  return (
    <>
      {data?.map((el, i) => (
        <TableRow
          key={i}
          elIndex={i}
          eventsData={el}
          array={array}
          cellWidth={cellWidth}
          rowHeight={rowHeight}
          heightMultiply={el.heightMultiply || 1}
          initData={initData}
          setInitData={setInitData}
          NameComponent={NameComponent}
          width={width}
        />
      ))}
    </>
  );
};

export default React.memo(TableBody);
