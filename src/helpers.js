import { addDays, subDays } from "date-fns";

export const daysInView = 25;
export const rowHeight = 60;

export const data = [
  {
    name: "Carter Reyna",
    events: [
      {
        name: "Sample 1 line",
        from: subDays(
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
        to: subDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          1
        ),
      },
      {
        name: "Sample 1 line 2",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          0
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          4
        ),
      },
      {
        name: "Sample 1 line 3",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          5
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          8
        ),
      },
      {
        name: "Sample 1 line 4",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          9
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          17
        ),
      },
    ],
  },
  {
    name: "Kallum Levy",
    events: [
      {
        name: "Sample 2 line",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          0
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          4
        ),
      },
      {
        name: "Sample 2 line 2",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          5
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          27
        ),
      },
    ],
  },
  {
    name: "Franklin Galloway",
    events: [
      {
        name: "Sample 3 line",
        from: subDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          3
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          5
        ),
      },
      {
        name: "Sample 3 line 2",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          5
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          22
        ),
      },
    ],
  },
  {
    name: "Mario Kirkpatrick",
    events: [
      {
        name: "Sample 4 line",
        from: subDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          5
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          0
        ),
      },
      {
        name: "Sample 4 line 2",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          1
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          21
        ),
      },
    ],
  },
  {
    name: "Dollie Pratt",
    events: [
      {
        name: "Sample 5 line",
        from: subDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          4
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          3
        ),
      },
      {
        name: "Sample 5 line 2",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          4
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          27
        ),
      },
    ],
  },
  {
    name: "Fraya Hills",
    events: [
      {
        name: "Sample 6 line",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            2,
            0,
            0
          ),
          0
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          3
        ),
      },
      {
        name: "Sample 6 line 2",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          4
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          7
        ),
      },
      {
        name: "Sample 6 line 3",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          8
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          12
        ),
      },
      {
        name: "Sample 6 line 4",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          13
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          24
        ),
      },
    ],
  },
  {
    name: "Abdi Cook",
    events: [
      {
        name: "Sample 7 line",
        from: subDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          5
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          5
        ),
      },
      {
        name: "Sample 7 line 2",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          6
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          21
        ),
      },
    ],
  },
  {
    name: "Zander Carney",
    events: [
      {
        name: "Sample 8 line",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          0
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            1,
            0,
            0
          ),
          5
        ),
      },
      {
        name: "Sample 8 line 2",
        from: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          6
        ),
        to: addDays(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay(),
            0,
            0,
            0
          ),
          22
        ),
      },
    ],
  },
];
