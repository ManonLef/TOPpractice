function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let readOrNot = "";
    if (read === false) {
      readOrNot = "I have not read this book";
    } else {
      readOrNot = "I have read this book";
    }
    return title + ", " + author + ", " + pages + " pages, " + readOrNot;
  };
}

const book1 = new Book("The Hobbit", "Tolkien", 295, true);