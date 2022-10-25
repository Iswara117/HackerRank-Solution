function lonelyinteger(a) {
  let lonelyNumb = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      console.log(j);
      if (i != j && a[i] === a[j]) break;
      else if (j == a.length - 1) {
        lonelyNumb.push(a[i]);
      }
    }
  }

  console.log(lonelyNumb);
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
