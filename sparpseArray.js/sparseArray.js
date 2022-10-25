function matchingStrings(strings, queries) {
  // melakukan pemetaan dengan menggunakan method map
  // setelah itu di filter y === x
  return queries.map((x) => strings.filter((y) => y === x).length);
}

var strings = ["ab", "ab", "bca", "acb"];
var queries = ["ab", "abc", "bc"];

console.log(matchingStrings(strings, queries));
