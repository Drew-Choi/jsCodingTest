const n = 3;

// const solution = (num) => {
//   const nums = Array.from(Array(num), (_, index) => index + 1);

//   const stack = [[nums, []]];

//   const result = [];

//   while (stack.length > 0) {
//     const [nums, path] = stack.pop();

//     if (path.length === nums.length) {
//       console.log("?", stack);
//       result.push(path);
//     } else {
//       for (const el of nums) {
//         if (!path.includes(el)) {
//           console.log("s", stack);
//           stack.push([nums, path.concat(el)]);
//         }
//       }
//     }
//   }

//   return result.map((arr) => arr.join(" ")).join("\n");
// };

// console.log(solution(n));
