import { createEvent, createStore } from "effector";

export const changeActivelineFx = createEvent();
export const resetActivelineFx = createEvent();

export const $activeRow = createStore(null)
  .on(changeActivelineFx, (_, arg) => arg)
  .reset(resetActivelineFx);
