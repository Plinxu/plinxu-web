interface Saving {
  name: string;
  amount: string;
  icon: string;
}

export default function Saving() {
  const savings: Saving[] = [
    { name: "Emergency", amount: "$2,459.00", icon: "🚗" },
    { name: "Health", amount: "$1,259.00", icon: "🏥" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">My Saving</h3>
        <button>...</button>
      </div>
      {savings.map((saving, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-2xl mr-3">{saving.icon}</span>
            <div>
              <p className="font-medium">{saving.name}</p>
              <p className="text-gray-600">{saving.amount}</p>
            </div>
          </div>
          <button>
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}