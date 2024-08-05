import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";

const rowData = [
  {
    date: "02/07/2023",
    particulars:
      "Receivable from client for purchase bill no. B/0103406/079-080 (NICA 6000 kitta @ 838.07)",
    debit: "5,046,302.72",
    credit: "-",
    balance: "200,000,000.00 DR",
  },
  {
    date: "02/07/2023",
    particulars:
      "Receivable from client for purchase bill no. B/0103406/079-080 (NICA 6000 kitta @ 838.07)",
    debit: "5,046,302.72",
    credit: "5,046,302.72",
    balance: "200,000,000.00 DR",
  },
  {
    date: "02/07/2023",
    particulars:
      "Receivable from client for purchase bill no. B/0103406/079-080 (NICA 6000 kitta @ 838.07)",
    debit: "5,046,302.72",
    credit: "-",
    balance: "200,000,000.00 DR",
  },
];

const AccountStatement = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg shadow-profile-card border border-[rgba(32,183,138,0.2)]">
      <h1 className="font-bold px-4 py-2 text-xl">Account Statement</h1>
      <hr />
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white table-auto border-separate border-spacing-x-0 border-spacing-y-2">
            <thead>
              <tr className=" text-[#58595B]  text-sm leading-normal">
                <th className="py-3 px-6 text-center font-normal">Date</th>
                <th className="py-3 px-6 text-center font-normal">
                  Particulars
                </th>
                <th className="py-3 px-6 text-center font-normal">Debit</th>
                <th className="py-3 px-6 text-center font-normal">Credit</th>
                <th className="py-3 px-6 text-center font-normal">Balance</th>
              </tr>
            </thead>
            <tbody className="text-[#58595B] text-sm font-medium">
              <tr className="">
                <td className="bg-naasa-green-row py-4 px-6 rounded-l-lg text-center">
                  -
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">
                  Opening Balance
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">-</td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">-</td>
                <td className="bg-naasa-green-row py-4 px-6 rounded-r-lg text-center">
                  0.00
                </td>
              </tr>
              {rowData?.map((item, index) => (
                <tr key={index}>
                  <td className="bg-naasa-green-row py-4 px-6 rounded-l-lg text-center">
                    {item?.date}
                  </td>
                  <td className="bg-naasa-green-row py-4 px-6 text-center">
                    {item?.particulars}
                  </td>
                  <td className="bg-naasa-green-row py-4 px-6 text-center">
                    {item?.debit}
                  </td>
                  <td className="bg-naasa-green-row py-4 px-6 text-center">
                    {item?.credit}
                  </td>
                  <td className="bg-naasa-green-row py-4 px-6 rounded-r-lg text-center">
                    {item?.balance}
                  </td>
                </tr>
              ))}
              {/* <tr className="">
                <td className="bg-naasa-green-row py-4 px-6 text-center rounded-l-lg">
                  -
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">
                  Page Total
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">
                  2,01,85,210.9
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">
                  5,046,302.7
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center rounded-r-lg">
                  80,000,000 DR
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="bg-naasa-green-row py-4 px-6 text-center rounded-l-lg">
                  -
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">
                  Filter Total (Statement Balance)
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">
                  2,01,85,210.9
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center">
                  5,046,302.7
                </td>
                <td className="bg-naasa-green-row py-4 px-6 text-center rounded-r-lg">
                  80,000,000 DR
                </td>
              </tr> */}
              <tr className="">
                <td className="bg-naasa-yellow py-4 px-6 text-center rounded-l-lg">
                  -
                </td>
                <td className="bg-naasa-yellow py-4 px-6 text-center font-bold">
                  Total Balance With Interest
                </td>
                <td className="bg-naasa-yellow py-4 px-6 text-center font-bold">
                  2,01,85,210.9
                </td>
                <td className="bg-naasa-yellow py-4 px-6 text-center font-bold">
                  5,046,302.7
                </td>
                <td className="bg-naasa-yellow py-4 px-6 text-center rounded-r-lg font-bold">
                  80,000,000 DR
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end text-xs items-center p-2 cursor-pointer">
          <span className="text-naasa-green font-bold">View More</span>
          <KeyboardArrowRight sx={{ fontSize: "16px", color: "#20B78A" }} />
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
