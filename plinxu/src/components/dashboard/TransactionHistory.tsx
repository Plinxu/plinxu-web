interface Transaction {
  name: string;
  date: string;
  time: string;
  amount: string;
}

export default function TransactionHistory() {
  const transactions: Transaction[] = [
    { name: "Steam Wallet", date: "Maret 27, 2022", time: "02:30:00", amount: "-$25.00" },
    { name: "Denver Sugiono", date: "Maret 30, 2022", time: "23:30:00", amount: "+$35.00" },
    { name: "Apple Macbook Pro", date: "Maret 29, 2022", time: "20:24:00", amount: "-$65.00" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Transaction History</h3>
        <select className="bg-gray-100 rounded-md px-2 py-1">
          <option>Recent</option>
          <option>Oldest</option>
        </select>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600">
            <th className="pb-3">Name</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Time</th>
            <th className="pb-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="py-2">{transaction.name}</td>
              <td>{transaction.date}</td>
              <td>{transaction.time}</td>
              <td className={transaction.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}