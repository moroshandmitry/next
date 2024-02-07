import { fetchSellers, fetchInvoiceById } from '@/app/lib/data';

import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

interface IPageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<IPageProps> = async (props) => {
  const { params } = props;

  const id = params.id;

  const [invoice, sellers] = await Promise.all([
    fetchInvoiceById(id),
    fetchSellers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            active: true,
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
          },
        ]}
      />
      <Form invoice={invoice} sellers={sellers} />
    </main>
  );
};

export default Page;
