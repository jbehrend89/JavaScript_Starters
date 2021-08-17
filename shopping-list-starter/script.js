let shopping_list_items = [];
//let list_element = document.getElementById("shopping-list-items");

//example of a for loop
//shopping_list_items.forEach((item) => {
    //console.log(item);
    //let item_element = document.createElement("li");
    //item_element.innerText = item;
    //list_element.appendChild(item_element);
//});

function addItem() {
    //go and get the text in the input box
    let item = document.getElementById("new-item-text").value;
    //add item to the list
    shopping_list_items.push(item);
    console.log(shopping_list_items);
    updateItems();
};

function updateItems() {
    let list_element = document.getElementById("shopping-list-items");
    list_element.innerHTML = "";
    shopping_list_items.forEach((item) => {
        console.log(item);
        let item_element = document.createElement("li");
        item_element.innerText = item;
        list_element.appendChild(item_element);
    });
};

function clearItem() {
    //calling an empty list
    shopping_list_items = [];
    //update items function to show on the page
    updateItems();
}
