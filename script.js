//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  if (title ==='' || author === '' || isbn === ''){
    alert(`Please fill all fields`)
    return;
  }

  const row = document.createElement("tr")
  row.innerHTML = `
  <td>${title}</td>
  <td>${author}</td>
  <td>${isbn}</td>
  <td><button class = "delete">X</button></td>
  `

  bookList.appendChild(row);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
})

bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove()
  }
})

