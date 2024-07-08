export default function FinanceStatistic() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Finance Statistic</h3>
        <select className="bg-gray-100 rounded-md px-2 py-1">
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="h-64 bg-blue-50 rounded-lg"></div>
    </div>
  )
}
