import { iconMap } from './card-icons';

import { rubik } from '@/app/ui/fonts';

interface ICardProps {
  title: string;
  value: number | string;
  type: 'invoices' | 'sellers' | 'awaiting' | 'earned';
}

const Card: React.FC<ICardProps> = (props) => {
  const { title, value, type } = props;

  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-neutral-700 p-2 shadow-sm">
      <div className="flex bg-neutral-700 p-4">
        {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
        <h3 className="ml-2 text-sm font-medium text-white">{title}</h3>
      </div>
      <p
        className={`${rubik.className}
          truncate rounded-xl bg-sky-700 px-4 py-8 text-center text-2xl text-white`}
      >
        {value}
      </p>
    </div>
  );
};

export default Card;
