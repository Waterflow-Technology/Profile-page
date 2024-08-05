import React from "react";

const rowData = [
  {
    symbol: "CLI",
    transactionType: "Sell",
    date: "2024-02-09",
    price: "12,345.67",
    quantity: 1000,
    amount: "1,234,567",
    balanceAfterTransaction: 1000,
    description: "",
  },
  {
    symbol: "CLI",
    transactionType: "Buy",
    date: "2024-02-09",
    price: "12,345.67",
    quantity: 1000,
    amount: "1,234,567",
    balanceAfterTransaction: 1000,
    description: "",
  },
  {
    symbol: "CLI",
    transactionType: "IPO",
    date: "2024-02-09",
    price: "12,345.67",
    quantity: 1000,
    amount: "1,234,567",
    balanceAfterTransaction: 1000,
    description: "",
  },
  {
    symbol: "CLI",
    transactionType: "Bonus Share",
    date: "2024-02-09",
    price: "12,345.67",
    quantity: 1000,
    amount: "1,234,567",
    balanceAfterTransaction: 1000,
    description: "",
  },
  {
    symbol: "CLI",
    transactionType: "FPO",
    date: "2024-02-09",
    price: "12,345.67",
    quantity: 1000,
    amount: "1,234,567",
    balanceAfterTransaction: 1000,
    description: "",
  },
  {
    symbol: "CLI",
    transactionType: "Right Share",
    date: "2024-02-09",
    price: "12,345.67",
    quantity: 1000,
    amount: "1,234,567",
    balanceAfterTransaction: 1000,
    description: "",
  },
  {
    symbol: "CLI",
    transactionType: "Sell",
    date: "2024-02-09",
    price: "12,345.67",
    quantity: 1000,
    amount: "1,234,567",
    balanceAfterTransaction: 1000,
    description: "",
  },
  {
    symbol: "CLI",
    transactionType: "Buy",
    date: "2024-02-09",
    price: "12,345.67",
    quantity: 1000,
    amount: "1,234,567",
    balanceAfterTransaction: 1000,
    description: "",
  },
];

const TransactionHistory = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg shadow-profile-card border border-[rgba(32,183,138,0.2)]">
      <h1 className="font-bold px-4 py-2 text-xl">Transaction History</h1>
      <hr />
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white table-auto border-separate border-spacing-x-0 border-spacing-y-2">
            <thead>
              <tr className=" text-[#58595B]  text-sm leading-normal">
                <th className="py-3 px-6 text-center font-normal">Symbol</th>
                <th className="py-3 px-6 text-center font-normal">
                  Transaction Type
                </th>
                <th className="py-3 px-6 text-center font-normal">Date</th>
                <th className="py-3 px-6 text-center font-normal">
                  Price(Per Share)
                </th>
                <th className="py-3 px-6 text-center font-normal">Quantity</th>
                <th className="py-3 px-6 text-center font-normal">Amount</th>
                <th className="py-3 px-6 text-center font-normal">
                  Balance After Transaction
                </th>
              </tr>
            </thead>
            <tbody className="text-[#58595B] text-sm font-medium">
              {rowData?.map((item, index) => (
                <tr key={index}>
                  <td
                    className={`${
                      item.transactionType.toUpperCase() === "SELL"
                        ? "bg-naasa-red-row"
                        : "bg-naasa-green-row"
                    } py-4 px-6 rounded-l-lg text-center`}
                  >
                    {item?.symbol}
                  </td>
                  <td
                    className={`${
                      item.transactionType.toUpperCase() === "SELL"
                        ? "bg-naasa-red-row"
                        : "bg-naasa-green-row"
                    } py-4 px-6  text-center`}
                  >
                    {item?.transactionType}
                  </td>
                  <td
                    className={`${
                      item.transactionType.toUpperCase() === "SELL"
                        ? "bg-naasa-red-row"
                        : "bg-naasa-green-row"
                    } py-4 px-6  text-center`}
                  >
                    {item?.date}
                  </td>
                  <td
                    className={`${
                      item.transactionType.toUpperCase() === "SELL"
                        ? "bg-naasa-red-row"
                        : "bg-naasa-green-row"
                    } py-4 px-6  text-center`}
                  >
                    Rs. {item?.price}
                  </td>
                  <td
                    className={`${
                      item.transactionType.toUpperCase() === "SELL"
                        ? "bg-naasa-red-row"
                        : "bg-naasa-green-row"
                    } py-4 px-6  text-center`}
                  >
                    {item?.quantity}
                  </td>
                  <td
                    className={`${
                      item.transactionType.toUpperCase() === "SELL"
                        ? "bg-naasa-red-row"
                        : "bg-naasa-green-row"
                    } py-4 px-6  text-center`}
                  >
                    Rs. {item?.amount}
                  </td>
                  <td
                    className={`${
                      item.transactionType.toUpperCase() === "SELL"
                        ? "bg-naasa-red-row"
                        : "bg-naasa-green-row"
                    } py-4 px-6 rounded-r-lg text-center`}
                  >
                    {item?.balanceAfterTransaction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
