import {
  areIntervalsOverlapping,
  isSameDay,
  eachDayOfInterval,
} from "date-fns";
import { useEffect, useState } from "react";

export const getDatesArray = (start, end) => {
  return eachDayOfInterval({
    start: new Date(start),
    end: new Date(end),
  });
};

export const getSourceDateIndex = (months, from) => {
  const arr = months.map((e) => isSameDay(from, e));
  return [...arr].indexOf(true);
};

const checkCrossedDates = (arr) => {
  let prevEvents = [];
  let lineHeight = 1;
  let topIndex = 1;
  const newData = arr.map((el, i) => {
    if (
      [...prevEvents].find((element) => {
        let isOverlapped = false;
        if (
          areIntervalsOverlapping(
            { start: new Date(el.from), end: new Date(el.to) },
            { start: new Date(element.from), end: new Date(element.to) }
          )
        ) {
          isOverlapped = true;
        }
        if (isSameDay(new Date(el.from), new Date(element.to))) {
          isOverlapped = true;
        }
        if (isSameDay(new Date(element.from), new Date(el.to))) {
          isOverlapped = true;
        }
        return isOverlapped;
      })
    ) {
      lineHeight = lineHeight + 1;
      prevEvents.push(el);
      topIndex = topIndex + 1;
      return {
        ...el,
        top: topIndex,
      };
    } else {
      prevEvents.push(el);
      return el;
    }
  });
  return { newData, lineHeight };
};

export const useDataWithRowsHeight = (data) => {
  const [initData, setInitData] = useState([]);
  const [dataWithHeight, setDataWithHeight] = useState([]);
  useEffect(() => {
    setDataWithHeight(
      initData.map((el) => {
        const { newData, lineHeight } = checkCrossedDates(el.events);
        return {
          ...el,
          events: newData,
          heightMultiply: lineHeight || 1,
        };
      })
    );
  }, [initData]);
  useEffect(() => {
    setInitData(data);
  }, [data]);

  return { dataWithHeight, initData, setInitData };
};
