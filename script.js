window.onload = function () {

    let prices = document.querySelectorAll(".prices");
    let total = 0;

    // calculate total
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].innerText);
    }

    // create row
    let row = document.createElement("tr");

    // create cell
    let cell = document.createElement("td");
    cell.colSpan = 2;
    cell.innerText = total;

    // append
    row.appendChild(cell);
    document.getElementById("groceryTable").appendChild(row);
};