import { lusitana } from "@/app/ui/fonts"
import RevenueChart from "../../ui/dashboard/revenue-chart"
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import CardWrapper, { Card } from "../../ui/dashboard/cards";
import { fetchCardData, fetchLatestInvoices } from "../../lib/data";
import { Suspense } from "react";
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>DashBoard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* 收集的发票总数
        待处理的发票总数
        发票总数
        客户总数 */}
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected"></Card>
        <Card title="Pending" value={totalPendingInvoices} type="pending"></Card>
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices"></Card>
        <Card title="Total Customers" value={numberOfCustomers} type="customers"></Card> */}

        {/* 按照Card分组 */}
        <Suspense fallback={<CardSkeleton></CardSkeleton>}>
          <CardWrapper></CardWrapper>
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton></RevenueChartSkeleton>}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton></LatestInvoicesSkeleton>}>
          <LatestInvoices />
        </Suspense>

        {/* <LatestInvoices latestInvoices={latestInvoices}></LatestInvoices> */}
      </div>
    </main>
  )
}