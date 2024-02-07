import { fetchCardData } from '@/app/lib/data';

import Card from './card';

const CardWrapper: React.FC = async () => {
  const card = await fetchCardData();

  return (
    <>
      <Card title="Earned" value={card.totalFulfilledInvoices} type="earned" />
      <Card
        type="awaiting"
        title="In Progress"
        value={card.totalAwaitingInvoices}
      />
      <Card
        type="invoices"
        title="All Invoices"
        value={card.numberOfInvoices}
      />
      <Card title="Total Sellers" value={card.numberOfSellers} type="sellers" />
    </>
  );
};

export default CardWrapper;
