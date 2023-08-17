// const tableButton = document.getElementById("table_button");

// tableButton.addEventListener("click", (event) => {
//     event.preventDefault();

//     var tableRow = document.getElementById("table");
//     var row = document.createElement("tr");
//     var cell1 = document.createElement("td");
//     var cell2 = document.createElement("td");
//     var cell3 = document.createElement("td");

//     cell1.style.marginLeft = "auto";
//     cell1.style.marginRight = "auto";
//     cell1.style.border = "1px solid black";
//     cell1.style.borderCollapse = "collapse";
//     cell1.style.width = "1000px";
//     cell1.style.height = "500px";

//     cell2.style.marginLeft = "auto";
//     cell2.style.marginRight = "auto";
//     cell2.style.border = "1px solid black";
//     cell2.style.borderCollapse = "collapse";
//     cell2.style.width = "1000px";
//     cell2.style.height = "500px";

//     cell3.style.marginLeft = "auto";
//     cell3.style.marginRight = "auto";
//     cell3.style.border = "1px solid black";
//     cell3.style.borderCollapse = "collapse";
//     cell3.style.width = "1000px";
//     cell3.style.height = "500px";

//     row.appendChild(cell1);
//     row.appendChild(cell2);
//     row.appendChild(cell3);
//     tableRow.appendChild(row);
// });
//Adds a click listener to the add-row button
document.querySelector("#table_button").addEventListener("click", () => {
//calls the addRow() method on clicking the button
addRow();
});

const addRow = () => {
let row = document.createElement("tr");

//creates a new column element
let column1 = document.createElement("td");
let column2 = document.createElement("td");
let column3 = document.createElement("td");

column1.contentEditable = true;
column2.contentEditable = true;
column3.contentEditable = true;

row.appendChild(column1);
row.appendChild(column2);
row.appendChild(column3);

document.querySelector("table").appendChild(row);
};