const input = document.querySelector("#item");

const list = document.querySelector("ul");


const enter = document.querySelector("button");
enter.addEventListener( "click", (e) =>
    {e.preventDefault();
    let answer = input.value; 
    console.log(answer);
    input.value = "";

    //Create a new li, with the item name and button
    //which will be attached on later.

    const listItem = document.createElement("li");
    const row = document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        list.removeChild(listItem);
    })

    listItem.appendChild(row);
    listItem.appendChild(deleteButton);

    row.textContent = answer;
    deleteButton.textContent = "Delete";

    list.appendChild(listItem);

    input.focus();
    

} )


