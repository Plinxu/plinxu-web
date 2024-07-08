interface Card {
  title: string;
  amount: string;
  color: string;
}

export default function BalanceCards() {
  const cards: Card[] = [
    { title: "Balance", amount: "$3,525.90", color: "bg-purple-200" },
    { title: "Income", amount: "$245.00", color: "bg-blue-200" },
    { title: "Expenses", amount: "$125.00", color: "bg-orange-200" },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className={`${card.color} p-6 rounded-lg shadow-sm`}>
          <h3 className="text-lg font-semibold text-gray-700">{card.title}</h3>
          <p className="text-2xl font-bold mt-2">{card.amount}</p>
        </div>
      ))}
    </>
  )
}