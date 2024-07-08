import Head from 'next/head'
import Sidebar from '@/components/dashboard/Sidebar'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import BalanceCards from '@/components/dashboard/BalanceCards';
import FinanceStatistics from '@/components/dashboard/FinanceStatistics';
import Activities from '@/components/dashboard/Activities';
import TransactionHistory from '@/components/dashboard/TransactionHistory';
import MyCards from '@/components/dashboard/MyCards';
import Savings from '@/components/dashboard/Savings';

const page = () => {
  return (
    <div className="flex h-screen bg-gray-100">
    <Head>
      <title>Plinxu</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Sidebar />

    <div className="flex-1 flex flex-col overflow-hidden">
      <DashboardHeader />

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <BalanceCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <FinanceStatistics />
            <TransactionHistory />
          </div>
          <div>
            <Activities />
            <MyCards />
            <Savings />
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default page