import { Suspense } from 'react';

import CardWrapper from '@/app/ui/dashboard/cards';
import IncomeChart from '@/app/ui/dashboard/income-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

import {
  CardsSkeleton,
  IncomeChartSkeleton,
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';

import { poppins } from '@/app/ui/fonts';

const Page: React.FC = () => (
  <main className="rounded-xl bg-neutral-900 p-6">
    <h1
      className={`${poppins.className} mb-4 text-center text-xl text-white md:text-3xl`}
    >
      Dashboard
    </h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>
    </div>
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<IncomeChartSkeleton />}>
        <IncomeChart />
      </Suspense>
      <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices />
      </Suspense>
    </div>
  </main>
);

export default Page;
