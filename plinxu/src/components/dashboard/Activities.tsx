
export default function Activity() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
      <h3 className="text-lg font-semibold mb-4">Activity</h3>
      <div className="flex justify-between items-center">
        <div className="w-3/4 bg-gray-200 rounded-full h-4">
          <div className="bg-purple-500 h-4 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <span className="text-sm font-medium">80%</span>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <span>Financial Score</span>
        <span className="float-right">Payment</span>
      </div>
      <div className="mt-4">
        <button className="text-blue-500 text-sm">View All Record</button>
      </div>
    </div>
  )
}