const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: false,
};
console.log(book)
console.log(typeof book)

bookJSON = JSON.stringify(book);
console.log(bookJSON);

console.log(typeof bookJSON);

const rev = JSON.parse(bookJSON);

console.log(rev);
console.log(rev.author);
console.log(typeof rev);
console.log(rev.isAvailable)