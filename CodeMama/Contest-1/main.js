function main(a) {
  let cpy = a[a.length - 1];
  // cpy.push(a.slice(0, a.length - 1)); write this using forEach
  a.forEach((e, i) => {
    if (i !== a.length - 1) {
      cpy.push(e);
    }
  });
  console.log(cpy);
}

main([1, 2, 3, 4, 5]);
