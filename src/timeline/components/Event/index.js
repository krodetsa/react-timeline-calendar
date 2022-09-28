import { format } from "date-fns";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import { findObjectInArray } from "./helpers";
import { useEventWidth, useEventDragged } from "./hooks";
import {
  StyledDragHandle,
  StyledInfo,
  StyledTextBlock,
  StyledWrapper,
  StyledDragHandleFaked,
} from "./styles";
import { ReactComponent as TaskIcon } from "../../../assets/icons/task.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/grey-cross.svg";
import {
  changeActiveCellFx,
  resetActiveCellFx,
} from "../StyledTableHeader/model";
import { Popover } from "@mui/material";

const Event = ({
  data,
  from,
  to,
  cellWidth,
  datesArray,
  initData,
  setInitData,
  eventsData,
  rowHeight,
}) => {
  const { lineSettings, setLineSettings } = useEventWidth({
    from,
    to,
    cellWidth,
  });
  const { eventLineIsDragged, switchDraggingState } = useEventDragged();
  const [anchorState, setAnchorState] = useState({
    anchorEl: null,
    popoverOpen: false,
    position: 0,
  });
  const { color, rmDragBs, rmUserHover, rmBorder } = {};
  const handleClick = (event, position) => {
    if (anchorState.anchorEl === null) {
      setAnchorState({
        anchorEl: event.currentTarget,
        popoverOpen: true,
        position: position,
      });
    }
  };
  const handleClose = () => {
    setAnchorState({ anchorEl: null, popoverOpen: false, position: 0 });
  };

  const endDragging = () => {
    resetActiveCellFx();
    switchDraggingState();
  };
  return (
    <>
      <Draggable
        position={{ x: lineSettings.left, y: 0 }}
        onStart={switchDraggingState}
        onStop={endDragging}
        axis="x"
        handle=".drag-handle"
        bounds={"parent"}
        grid={[cellWidth, cellWidth]}
        onDrag={(_, prevData) => {
          const newWidth = lineSettings.width - prevData.deltaX;
          const newLeft = lineSettings.left + prevData.deltaX;

          setLineSettings({
            ...lineSettings,
            width: newWidth,
            left: newLeft,
          });
          const newTo = newWidth / cellWidth + newLeft / cellWidth;
          const newFrom = newLeft / cellWidth;
          changeActiveCellFx(datesArray[newFrom]);
          setInitData(
            findObjectInArray({
              initData,
              data,
              datesArray,
              newTo,
              newFrom,
              eventsData,
            })
          );
          // console.log({
          //   to: datesArray[newTo < newFrom ? newFrom : newTo],
          //   from: datesArray[newFrom],
          //   eventName: data.name,
          //   userName: eventsData.name,
          // });
        }}
      >
        <StyledDragHandle
          $top={data.top ?? 1}
          $is_dragged={eventLineIsDragged}
          className="drag-handle"
          $box_shadow={rmDragBs}
          $background={color}
        ></StyledDragHandle>
      </Draggable>

      <StyledWrapper
        onClick={(e) => {
          e.stopPropagation();
          handleClick(e, e.nativeEvent.offsetX);
        }}
        $top={data.top ?? 1}
        $width={lineSettings.width}
        $from={lineSettings.left}
        $is_dragged={eventLineIsDragged}
        $min_width={cellWidth}
        $row_height={rowHeight}
        $on_hover={rmUserHover}
        $border={rmBorder}
      >
        <StyledDragHandleFaked
          className="handle-faked"
          $top={data.top ?? 1}
          $is_dragged={eventLineIsDragged}
          $box_shadow={rmDragBs}
          $background={color}
        ></StyledDragHandleFaked>
        <Popover
          id={"event-popover"}
          open={anchorState.popoverOpen}
          anchorEl={anchorState.anchorEl}
          onClick={(e) => {
            e.stopPropagation();
            handleClose(e);
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: anchorState.position,
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <StyledInfo>
            <p>{data.name}</p>
            <p>
              <strong>Be careful, this is an important info!</strong>
            </p>
            <CloseIcon />
          </StyledInfo>
        </Popover>
        <TaskIcon className="task-icon" />
        {lineSettings.width > 50 && (
          <StyledTextBlock>
            <p>{data.name}</p>

            {lineSettings.width > 180 && (
              <>
                <strong>{format(data.from, "dd/MM")} </strong>
                <strong> {format(data.to, "dd/MM")}</strong>
              </>
            )}
          </StyledTextBlock>
        )}

        <DraggableCore
          axis="x"
          grid={[cellWidth, cellWidth]}
          onDrag={(_, prevData) => {
            setLineSettings({
              ...lineSettings,
              width: lineSettings.width + prevData.deltaX,
            });
            const newFrom = lineSettings.left / cellWidth;
            const newTo = (lineSettings.width + prevData.deltaX) / cellWidth;
            changeActiveCellFx(datesArray[newFrom + newTo]);
            setInitData(
              findObjectInArray({
                initData,
                data,
                datesArray,
                newTo: newFrom + newTo,
                newFrom: newFrom,
                eventsData,
              })
            );
            // console.log({
            //   from: datesArray[newFrom],
            //   to: datesArray[newFrom + newTo],
            //   eventName: data.name,
            //   userName: eventsData.name,
            // });
          }}
          onStart={switchDraggingState}
          onStop={endDragging}
        >
          <StyledDragHandle
            $is_dragged={eventLineIsDragged}
            className="drag-handle handle"
            $is_left={true}
            $box_shadow={rmDragBs}
            $background={color}
          />
        </DraggableCore>
      </StyledWrapper>
    </>
  );
};

Event.propTypes = {
  cellWidth: PropTypes.number,
  data: PropTypes.object,
  from: PropTypes.number,
  to: PropTypes.number,
  datesArray: PropTypes.array,
  initData: PropTypes.array,
  setInitData: PropTypes.func,
  eventsData: PropTypes.object,
  rowHeight: PropTypes.number,
};

export default React.memo(Event);
