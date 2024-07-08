import Link from 'next/link'

interface MenuItem {
  icon: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "📊", label: "Analytics" },
  { icon: "💼", label: "My Wallet" },
  { icon: "🔄", label: "Transaction" },
  { icon: "👤", label: "Account" },
  { icon: "⚙️", label: "Setting" },
];

export default function Sidebar() {
  return (
    <aside className="bg-white w-64 hidden md:block shadow-xl">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Plinxu</h1>
      </div>
      <nav className="mt-10">
        {menuItems.map((item, index) => (
          <Link key={index} href="#" className="flex items-center mt-4 py-2 px-6 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200">
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 my-10">
        <Link href="#" className="flex items-center py-2 px-6 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200">
          <span className="mr-3">❓</span>
          Help?
        </Link>
        <Link href="#" className="flex items-center py-2 px-6 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200">
          <span className="mr-3">🚪</span>
          Log Out
        </Link>
      </div>
    </aside>
  )
}


