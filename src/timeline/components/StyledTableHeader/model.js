import { createEvent, createStore } from "effector";

export const changeActiveCellFx = createEvent();
export const resetActiveCellFx = createEvent();

export const $activeCell = createStore(new Date(98, 1))
  .on(changeActiveCellFx, (_, arg) => arg)
  .reset(resetActiveCellFx);
