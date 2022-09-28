import { useEffect, useRef, useState } from "react";

export const useBodyHeight = ({ data }) => {
  const bodyRef = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(0);
  useEffect(() => {
    if (bodyRef?.current?.offsetHeight !== bodyHeight) {
      setBodyHeight(bodyRef?.current?.offsetHeight ?? 0);
    }
  }, [data]);
  return { bodyRef, bodyHeight };
};
