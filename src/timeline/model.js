import { addDays, subDays } from "date-fns";
import { createEvent, createStore } from "effector";

export const changeTimelineStateFx = createEvent();

export const $timelineState = createStore({
  drawer: false,
  cellWidth: 60,
  dateFrom: subDays(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDay(),
      2,
      0,
      0
    ),
    5
  ),
  dateTo: addDays(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDay(),
      2,
      0,
      0
    ),
    30
  ),
  sprintMode: false,
  position: null,
  prevPosition: null,
}).on(changeTimelineStateFx, (store, args) => {
  if (!args.drawer && store.sprintMode) {
    return {
      ...store,
      drawer: false,
    };
  } else {
    if (store.sprintMode) {
      return {
        ...store,
        cellWidth: 60,
        sprintMode: false,
        drawer: false,
        position: store.prevPosition,
      };
    } else {
      return {
        ...store,
        ...args,
        prevPosition: document.getElementById("body-scrollable").scrollLeft,
      };
    }
  }
});

$timelineState.watch(({ position }) => {
  if (position !== null) {
    setTimeout(() => {
      document
        .getElementById("body-scrollable")
        .scrollTo({ left: position, behavior: "smooth" });
    }, 200);
  }
});

export const changeTabStateFx = createEvent();
export const $tabState = createStore(false).on(
  changeTabStateFx,
  (store) => !store
);
