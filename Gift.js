const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];

const solution = (friends, gifts) => {
  let arr = friends.reduce((acc, friend) => {
    if (!acc[friend]) {
      acc[friend] = {};
    }

    gifts.forEach((gift) => {
      const [from, to] = gift.split(" ");

      if (friend === from) {
        if (!acc[friend][to]) {
          acc[friend][to] = 0;
        }
        acc[friend][to]++;
      }
    });

    return acc;
  }, {});
};

solution(friends, gifts);
