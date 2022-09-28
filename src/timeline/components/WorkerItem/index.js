import React from "react";
import {
  StyledContainer,
  StyledIconButton,
  StyledPenIcon,
  StyledWorkerItem,
} from "./styles";
import { ReactComponent as BinIcon } from "../../../assets/icons/bin.svg";
import { useStore } from "effector-react";
import { $activeRow, changeActivelineFx } from "../TableRow/model";

function WorkerItem({ name, elIndex }) {
  const activeRow = useStore($activeRow);
  const { rmUserHover, rmBorder } = {};
  return (
    <StyledWorkerItem
      className="worker-item"
      $active={elIndex === activeRow}
      onMouseOver={() => changeActivelineFx(elIndex)}
      $background={rmUserHover}
      $border={rmBorder}
    >
      <StyledContainer $active={elIndex === activeRow}>
        <p>{name}</p>
      </StyledContainer>
      <StyledIconButton
        onClick={() => {
          console.log(2);
        }}
      >
        <StyledPenIcon />
      </StyledIconButton>
      <StyledIconButton onClick={() => console.log(22)}>
        <BinIcon />
      </StyledIconButton>
    </StyledWorkerItem>
  );
}

export default WorkerItem;
