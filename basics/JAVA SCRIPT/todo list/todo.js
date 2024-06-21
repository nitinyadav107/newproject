list = [];

function Additem() {
  let inputelement = document.querySelector('#input');
  let todoitem = inputelement.value;
  let dateelement = document.querySelector('#date');
  let dateitem = dateelement.value;
  let todoObject = { text: todoitem, date: dateitem };

  if (todoitem.trim() !== "") {
    list.push(todoObject);
  }

  inputelement.value = "";
  display();
}

function display() {
  let container = document.querySelector('#item-container');
  let html = "";

  for (let i = 0; i < list.length; i++) {
    if (list.length !== 0) {
      html += `
         <span> ${list[i].text} </span>
         <span> ${list[i].date} </span>
         <button onclick="deleteItem(${i})">delete</button>
         `;
    }
  }

  container.innerHTML = html;
}

function deleteItem(index) {
  list.splice(index, 1);
  display();
}