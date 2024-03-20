const stone = [1, 2, 1, 4];
const friends = JSON.stringify([
  {
    이름: "루비독",
    나이: "95년생",
    점프력: "3",
    몸무게: "4",
  },
  {
    이름: "피치독",
    나이: "95년생",
    점프력: "3",
    몸무게: "3",
  },
  {
    이름: "씨-독",
    나이: "72년생",
    점프력: "2",
    몸무게: "1",
  },
  {
    이름: "코볼독",
    나이: "59년생",
    점프력: "1",
    몸무게: "1",
  },
]);

const survivor = (stone, friends) => {
  let = parseFriends = JSON.parse(friends);
  let copyStone = [...stone];
  let survivorResult = [];

  for (let friend of parseFriends) {
    let position = 0;
    let survival = true;
    while (position > copyStone.length) {
      position += parseInt(friend.점프력, 10);
      copyStone[position - 1] -= parseInt(friend.몸무게, 10);

      if (copyStone[position - 1] < 0) {
        survival = false;
        break;
      }
    }

    if (survival) {
      survivorResult.push(friend.이름);
    }
  }
  return survivorResult;
};

console.log(survivor(stone, friends));
