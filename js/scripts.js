// Business Logic ToDoList

function ToDoList() {
  this.items = [];
  this.currentID = 0;

}

ToDoList.prototype.addItem = function(item) {
  item.id = this.assignID();
  this.items.push(item);
}

ToDoList.prototype.assignID = function() {
  this.currentID +=1;
  return this.currentID;
}

ToDoList.prototype.deleteItem = function(id) {
  for (let i=0; i< this.items.length; i++) {
    if (this.items[i]) {
      if (this.items[i].id == id) {
        delete this.items[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic Items

function Item(itemName, description) {
  this.itemName = itemName;
  this.description = description;
  
}

Item.prototype.itemDescription = function () {
  return this.itemName + " " + this.description;
}

Item.prototype.complete = function(item) {
  item.complete = true;
}

//  User Interface Logic 

let todoList = new ToDoList();

function displayItemDetails(itemsToDisplay) {
  let itemList = $("ul#items");
  let htmlListInfo = "";
  itemsToDisplay.items.forEach(function(index, item) {
    htmlListInfo += "<li id=" + item.id + ">" + item.itemDescription() + "</li><button type=\"submit\" id=\"btn" + item.id + "\" class=\"complete\">Complete</button><button type=\"submit\">Remove</button>";
  });
  itemList.html(htmlListInfo);
};


$(document).ready(function() {
  $("form#new-item").submit(function(event) {
    event.preventDefault();
    let inputItem = $("input#new-itemName").val();
    let inputDescription = $("input#new-description").val();

    let newItem = new Item(inputItem, inputDescription);
    let removeItem = new Item(" ");

    todoList.addItem(newItem);
    // todoList.deleteItem(removeItem);
    console.log(todoList.items);
    // displayItemDetails(todoList);
  });

  $("#items").on
});

