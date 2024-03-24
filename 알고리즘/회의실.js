let fs = require("fs");
let input = fs.readFileSync("./회의실.txt").toString().split("\n");

let { meetingLength, meetings } = {
  meetingLength: Number(input[0]),
  meetings: [],
};

for (let i = 1; i <= meetingLength; i += 1) {
  meetings.push(input[i].split(" ").map(Number));
}

meetings.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));

let answer = 1;
let cur = 0;
for (let i = 1; i < meetingLength; i += 1) {
  if (meetings[cur][1] <= meetings[i][0]) {
    cur = i;
    answer += 1;
  }
}

console.log(answer);
