function addResidence(){
    let number = document.getElementById("number").value;
    let neighborhood = document.getElementById("neighborhood").value;
    let city = document.getElementById("city").value;
    let area = document.getElementById("area").value;
    
    let newListItem = document.createElement("li");
    newListItem.innerText = `Área: ${area}, ${city} - ${neighborhood}, ${number} `;

    let removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remover";
    removeButton.setAttribute("onclick", "remove(this)");

    newListItem.appendChild(removeButton);
    document.getElementById("house-list").appendChild(newListItem); 
};

function remove(button){
    let liToRemove = button.parentNode;
    document.getElementById("house-list").removeChild(liToRemove);
};