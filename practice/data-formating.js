// Question: Data Formating
const incomingData = [
  {
    id: "1xw13",
    date: "2021-09-01T21:30:00Z",
    items: [
      {
        name: "Day 1 Warm up",
        type: "workout",
        completed: true,
        points: 5,
      },
      {
        name: "Day 1 Workout",
        type: "workout",
        completed: true,
        points: 30,
      },
      {
        name: "Day 1 Cardio",
        type: "cardio",
        completed: false,
        points: 10,
      },
    ],
  },
  {
    id: "2kk22",
    date: "2021-09-02T21:30:00Z",
    items: [
      {
        name: "Day 2 Warm up",
        type: "workout",
        completed: false,
        points: 10,
      },
      {
        name: "Day 2 Workout",
        type: "workout",
        completed: false,
        points: 20,
      },
      {
        name: "Day 2 Cardio",
        type: "cardio",
        completed: true,
        points: 30,
      },
    ],
  },
];

// const outputData = [
//   {
//     id: "1xw13",
//     date: "2021-09-01T21:30:00Z",
//     totalPoints: 45, // NEW
//     items: [
//       {
//         name: "Day 1 Warm up",
//         type: "workout",
//         completed: true,
//         points: 5,
//         date: "2021-09-01T21:30:00Z", // NEW
//       },
//       {
//         name: "Day 1 Workout",
//         type: "workout",
//         completed: true,
//         points: 30,
//         date: "2021-09-01T21:30:00Z", // NEW
//       },
//       {
//         name: "Day 1 Cardio",
//         type: "cardio",
//         completed: false,
//         points: 10,
//         date: "2021-09-01T21:30:00Z", // NEW
//       },
//     ],
//   },
//   {
//     id: "2kk22",
//     date: "2021-09-02T21:30:00Z",
//     totalPoints: 60, // NEW
//     items: [
//       {
//         name: "Day 2 Warm up",
//         type: "workout",
//         completed: false,
//         points: 10,
//         date: "2021-09-02T21:30:00Z", // NEW
//       },
//       {
//         name: "Day 2 Workout",
//         type: "workout",
//         completed: false,
//         points: 20,
//         date: "2021-09-02T21:30:00Z", // NEW
//       },
//       {
//         name: "Day 2 Cardio",
//         type: "cardio",
//         completed: true,
//         points: 30,
//         date: "2021-09-02T21:30:00Z", // NEW
//       },
//     ],
//   },
// ];

// Answer Below

let outputData = incomingData.map((object) => {
  let totalPoint = object.items
    .map((item) => item.points)
    .reduce((a, b) => a + b, 0);

  let newItem = object.items.map((item) => {
    return { ...item, date: object.date };
  });

  return {
    ...object,
    totalPoint,
    items: newItem,
  };
});

console.log(outputData);
