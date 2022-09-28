import { useEffect, useState } from "react";

export const useEventWidth = ({ from, to, cellWidth }) => {
  const [lineSettings, setLineSettings] = useState({
    left: from * cellWidth,
    width: (to - from) * cellWidth || cellWidth,
  });
  useEffect(() => {
    let width = 60;
    if ((to - from) * cellWidth > cellWidth) {
      width = (to - from) * cellWidth;
    }
    setLineSettings({
      left: from * cellWidth,
      width,
    });
  }, [from, to, cellWidth]);
  return { lineSettings, setLineSettings };
};

export const useEventDragged = () => {
  const [eventLineIsDragged, setEventLineIsDragged] = useState(false);
  const switchDraggingState = () => {
    setEventLineIsDragged(!eventLineIsDragged);
  };
  return { eventLineIsDragged, switchDraggingState };
};
