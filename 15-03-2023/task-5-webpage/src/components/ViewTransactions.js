import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ViewTransactions() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <table className="table text-center w-75 m-auto mt-5 shadow border m-5">
        <thead className="bg-light">
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">To</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Mode</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1234</th>
            <td>user@456</td>
            <td>12-02-2023</td>
            <td>credit</td>
            <td>UPI</td>
            <td>700</td>
            <td>2000</td>
            <td>
              <i class="bi bi-pencil-square text-warning mx-3"></i>
              <i className="bi bi-trash-fill text-danger"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">1234</th>
            <td>user@123</td>
            <td>12-02-2023</td>
            <td>debit</td>
            <td>NEFT</td>
            <td>500</td>
            <td>1500</td>
            <td>
              <i class="bi bi-pencil-square text-warning mx-3"></i>
              <i className="bi bi-trash-fill text-danger"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <Link className="btn btn-success mx-5" to={`/transaction`}>
          New Transaction
        </Link>
        <Link className="btn btn-secondary mx-5" to={`/account`}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
