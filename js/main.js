const API = "http://localhost:8000/books";
const inpName = document.querySelector("#inpName");
const inpAuthor = document.querySelector("#inpAuthor");
const inpImg = document.querySelector("#inpImg");
const inpPrice = document.querySelector("#inpPrice");
const btnAdd = document.querySelector("#btnAdd");
const sectionBooks = document.querySelector(".sectionBooks");
// !--------------CREATE -----------------------
// проверка на пустоту
btnAdd.addEventListener("click", () => {
  if (
    !inpName.value.trim() ||
    !inpAuthor.value.trim() ||
    !inpImg.value.trim() ||
    !inpPrice.value.trim()
  ) {
    alert("Ведите данные ! ");
    return;
  }
  //   создание нового объекта, куда будут сохраняться новые введенные данные(каким образом будут сох-я)
  let newBook = {
    bookName: inpName.value,
    bookAuthor: inpAuthor.value,
    bookImg: inpImg.value,
    bookPrice: inpPrice.value,
    // при нажатии
  };
  createBook(newBook);
});
// Отправка данных в сервер
function createBook(book) {
  fetch(API, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(book),
  });
}
// !--------------------READ--------------- отображение
// создание отдельного инпута, куда будут отображаться новые веденные данные
function readBooks() {
  fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}
readBooks();
