function foo(x) {
  if (x <= 1) {
    return [true, false, true, false];
  }
  const memo = [true, false];
  for (let i = 2; i <= x; i++) {
    const next = memo[0] || memo[1];
    memo.shift();
    memo.push(next);
  }
  return memo;
}
console.log(foo(10));