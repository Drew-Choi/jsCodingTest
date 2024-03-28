const n = 3;

let history = [];
let stack = [];

for (let i = n; i > 0; i -= 1) {
  stack.push({ i, d: 1 });

  if (stack.length !== 0) {
    const pop = stack.pop();

    history.push(pop);
  }
}

/*  
                0
         1            2            3         
       2    3       1   3       1    2
     3        2    3     1    2        1

[{i: 1 d: 1}, {i: 2 d: 1}, {i: 3 d: 1}]


*/
