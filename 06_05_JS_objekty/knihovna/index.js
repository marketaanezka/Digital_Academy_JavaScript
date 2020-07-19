const favBooks =
  [{
    section: "poetry",
    name: "Sonnets",
    author: "William Shakespeare",
    translator: "Martin Hilsky",
    edition: [12, 15, 16]
  },

  {
    section: "fiction",
    name: "Crime and Punishment",
    author: "Fyodor Michailovich Dostoyevskij",
    translator: "Ivo Jelinek",
    edition: [10, 12, 15]
  },

  {
    section: "stories",
    name: "Switch Bitch",
    author: "Roald Dahl",
    translator: "Jan Jařab",
    edition: [2, 4, 5]
  }
  ]

listElm = document.querySelector(".bookList");

console.log(favBooks[0].name)

for (let i = 0; i < favBooks.length; i++) {
  listElm.innerHTML += `<li> My ${i + 1}. favourite book is by ${favBooks[i].author}, name of the book is ${favBooks[i].name}. <br> It was translated into Czech by ${favBooks[i].translator}</li>`
}

