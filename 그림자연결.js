graph = {
  100: new Set([67, 66]),
  67: new Set([100, 82, 63]),
  66: new Set([100, 73, 69]),
  82: new Set([67, 61, 79]),
  63: new Set([67]),
  73: new Set([66]),
  69: new Set([66, 65, 81]),
  61: new Set([82]),
  79: new Set([82, 87, 77]),
  65: new Set([69, 84, 99]),
  81: new Set([69]),
  87: new Set([79, 31, 78]),
  77: new Set([79]),
  84: new Set([65]),
  99: new Set([65]),
  31: new Set([87]),
  78: new Set([87]),
};

const DFSMax = (graph, start) => {
  let visit = [];
  let stack = [start];

  while (stack) {
    let n = 0; // 다음방문
    n = stack.pop();

    if (!visit.includes(n)) {
      visit.push(n);
      let setDifferences = new Set(
        [...graph[n]].filter((node) => !new Set(visit).has(node))
      );

      if (setDifferences.size === 0) break;

      stack.push(Math.max(...setDifferences));
    }

    if (stack.length === 0) break;
  }

  let result = "";

  for (let el of visit) {
    result += String.fromCharCode(el);
  }

  return result;
};

const DFSMin = (graph, start) => {
  let visit = [];
  let stack = [start];

  while (stack) {
    let n = 0; // 다음방문
    n = stack.pop();

    if (!visit.includes(n)) {
      visit.push(n);
      let setDifferences = new Set(
        [...graph[n]].filter((node) => !new Set(visit).has(node))
      );

      if (setDifferences.size === 0) break;

      stack.push(Math.min(...setDifferences));
    }

    if (stack.length === 0) break;
  }

  let result = "";

  for (let el of visit) {
    result += String.fromCharCode(el);
  }

  return result;
};

console.log(DFSMax(graph, 100));
console.log(DFSMin(graph, 100));
