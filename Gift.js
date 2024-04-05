const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  // "ryan muzi",
  // "ryan muzi",
  // "ryan muzi",
  // "frodo muzi",
  // "frodo ryan",
  // "neo muzi",
];

const solution = (friends, gifts) => {
  const arr = friends.reduce((acc, cur) => {}, {});

  console.log(arr);
};

solution(friends, gifts);
