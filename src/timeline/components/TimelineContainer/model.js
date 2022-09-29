import { createEvent, createStore } from "effector";

export const changeScrollPosition = createEvent();

export const $scrollPosition = createStore(null).on(
  changeScrollPosition,
  (_, arg) => arg
);

export const changeHorizontalScrollPosition = createEvent();

export const $horizontalScrollPosition = createStore(null).on(
  changeHorizontalScrollPosition,
  (_, arg) => arg
);

$scrollPosition.watch((top) => {
  if (top !== null) {
    document.getElementById("names-scrollable").scrollTo({ top });
  }
});
