export const findObjectInArray = ({
  initData,
  data,
  datesArray,
  newTo,
  newFrom,
  eventsData,
}) => {
  return [...initData].map((el) => {
    if (el.name === eventsData.name) {
      return {
        ...el,
        events: el.events.map((element) => {
          if (element.name === data.name) {
            return {
              ...element,
              from: datesArray[newFrom],
              to: datesArray[newTo < newFrom ? newFrom : newTo],
            };
          } else {
            return element;
          }
        }),
      };
    } else {
      return el;
    }
  });
};
