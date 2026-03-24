window.onload = function() {

    // get all price elements
    let prices = document.querySelectorAll(".prices");

    let total = 0;

    // calculate total
    prices.forEach(function(p) {
        total += parseInt(p.innerText);
    });

    // create new row
    let row = document.createElement("tr");

    // create cell
    let cell = document.createElement("td");
    cell.colSpan = 2;
    cell.innerText = total;

    // append to table
    row.appendChild(cell);
    document.getElementById("groceryTable").appendChild(row);
};