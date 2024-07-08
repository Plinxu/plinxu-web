export default function MyCards() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">My Cards</h3>
        <button>...</button>
      </div>
      <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <span>Credit Card</span>
          <span>Visa</span>
        </div>
        <div className="mt-4">
          <p className="text-xl">**** **** **** 9289</p>
          <p className="text-sm mt-2">09/25</p>
        </div>
      </div>
      <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
        Add New Card
      </button>
    </div>
  )
}