import { fetchSellers } from '@/app/lib/data';

import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

const BREADCRUMBS = [
  { label: 'Invoices', href: '/dashboard/invoices' },
  {
    active: true,
    label: 'Create Invoice',
    href: '/dashboard/invoices/create',
  },
];

const Page: React.FC = async () => {
  const sellers = await fetchSellers();

  return (
    <main>
      <div className="rounded-xl bg-neutral-900 p-6">
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <Form sellers={sellers} />
      </div>
    </main>
  );
};

export default Page;
