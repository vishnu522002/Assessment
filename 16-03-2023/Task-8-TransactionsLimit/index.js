// Transaction datas in array of objects
const transactions = [
  {
    transactionId: 1223,
    date: new Date("12-10-2022"),
    type: "debit",
    amount: 550,
  },
  {
    transactionId: 1224,
    date: new Date("12-30-2022"),
    type: "credit",
    amount: 6000,
  },
];

// Getting table's body
let table = document.getElementsByTagName("tbody");

function loadTable() {
  // Refreshing if there is a existing table
  table[0].innerHTML = "";

  // Printing datas in html table using innerHTML
  transactions.forEach((transaction) => {
    table[0].innerHTML += `<tr>
            <th scope="row">${transaction.transactionId}</th>
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>${transaction.amount}</td>
          </tr>`;
  });
}

// loading table when the browser first loads
loadTable();

// Buttons - debit and credit
const debitBtn = document.getElementById("debit");
const creditBtn = document.getElementById("credit");

// Transaction form elements
const form = document.getElementById("transaction-form");
const amount = document.getElementById("amount");

// Logic For debiting amount
debitBtn.addEventListener("click", (e) => {
  if (amount.value === "") return alert("Please enter the amount");

  transactions.push({
    transactionId: transactions[transactions.length - 1].transactionId + 1,
    date: new Date(),
    type: "debit",
    amount: amount.value,
  });

  let limit = findMaxLimit(transactions, "type", "debit");
  if (limit > 3) {
    alert(
      "You are charged with Rs 20 for exceeding the maximum limit of transactions."
    );
    let newDebited = transactions.pop();
    newDebited = { ...newDebited, amount: +amount.value + 20 };
    transactions.push(newDebited);
  }

  loadTable();
});

// Method for finding limits for total no of debits
function findMaxLimit(arrWithObject, key, value) {
  const limits = arrWithObject.filter((object) => {
    return object[key] === value;
  });
  return limits.length;
}

// Logic For crediting amount
form.addEventListener("submit", (e) => {
  e.preventDefault();

  transactions.push({
    transactionId: transactions[transactions.length - 1].transactionId + 1,
    date: new Date(),
    type: "credit",
    amount: amount.value,
  });

  loadTable();
});
