// Transaction datas in array of objects
const transactions = [
  {
    transactionId: 1223,
    to: "Raj",
    date: "12-10-2022",
    type: "debit",
    mode: "NEFT",
    amount: 550,
  },
  {
    transactionId: 1235,
    to: "Gowtham",
    date: "15-10-2022",
    type: "credit",
    mode: "UPI",
    amount: 6000,
  },
  {
    transactionId: 1367,
    to: "John",
    date: "16-11-2022",
    type: "debit",
    mode: "NEFT",
    amount: 870,
  },
  {
    transactionId: 1485,
    to: "Lokesh",
    date: "18-11-2022",
    type: "debit",
    mode: "RTGS",
    amount: 950,
  },
  {
    transactionId: 1676,
    to: "Kumar",
    date: "21-12-2022",
    type: "credit",
    mode: "UPI",
    amount: 1200,
  },
];

// Getting table's body
let table = document.getElementsByTagName("tbody");

// Printing datas in html table using innerHTML
transactions.forEach((transaction) => {
  table[0].innerHTML += `<tr>
            <th scope="row">${transaction.transactionId}</th>
            <td>${transaction.to}</td>
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>${transaction.mode}</td>
            <td>${transaction.amount}</td>
          </tr>`;
});
