function findValueInArray(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return -1;
    }
  }
  return 1;
}

function main(input) {
  const lines = input.trim().split("\n");
  const testCase = parseInt(lines[0]);
  let arr = lines[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let ans;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      let chk = findValueInArray(ans, arr[i]);
      if (chk === 1) {
        ans.push(arr[i]);
      }
    }
  }
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i] + " ");
  }
}

main("5" + "1 2 3 2 3");
